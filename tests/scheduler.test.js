import { describe, it, expect } from 'vitest';
import {
  generateSchedule,
  validateSchedule,
  calculateDaysBetween,
  allocateActiveRecall,
  getStreamSubjects,
  CORE_ENGINE_VERSION,
} from '../src/core/index.js';

describe('Mission PlusTwo Core Scheduler Engine', () => {
  it('exports valid core engine version and stream definitions', () => {
    expect(CORE_ENGINE_VERSION).toBe('1.1.0');
    expect(getStreamSubjects('cs')).toContain('Computer Science');
    expect(getStreamSubjects('bio')).toContain('Botany');
    expect(getStreamSubjects('commerce')).toContain('Accountancy');
    expect(getStreamSubjects('humanities')).toContain('History');
  });

  describe('1. Short Revision Window (Exam is 7 Days Away)', () => {
    it('successfully constructs a compact 7-day schedule with 1-day revision buffer', () => {
      const schedule = generateSchedule({
        stream: 'cs',
        startDate: '2026-10-01',
        examDate: '2026-10-08',
        hoursPerDay: 4,
      });

      expect(schedule.plan.length).toBe(8); // Oct 1 through Oct 8 inclusive
      expect(schedule.revisionDaysCount).toBe(1);
      expect(schedule.syllabusDaysCount).toBe(7);

      // Verify final day has revision/mock tasks
      const lastDay = schedule.plan[schedule.plan.length - 1];
      expect(lastDay.isRevisionDay).toBe(true);
      expect(lastDay.tasks.length).toBeGreaterThan(0);

      // Verify zero ordering or duplicate task violations
      const val = validateSchedule(schedule);
      expect(val.scorecard.duplicateTasks).toBe(0);
      expect(val.scorecard.orderingViolations).toBe(0);
    });

    it('handles tight 3-day emergency runways gracefully without failing', () => {
      const schedule = generateSchedule({
        stream: 'cs',
        startDate: '2026-10-01',
        examDate: '2026-10-04',
        hoursPerDay: 6,
      });

      expect(schedule.plan.length).toBe(4);
      expect(schedule.isValid).toBe(true);
      expect(schedule.plan.every((d) => d.dayNumber > 0)).toBe(true);
    });
  });

  describe('2. Standard Multi-Month Preparation (120 Days Runway)', () => {
    it('allocates comprehensive spaced timetable with interleaving and 10-day revision runway', () => {
      const schedule = generateSchedule({
        stream: 'cs',
        startDate: '2026-10-01',
        examDate: '2027-01-29',
        hoursPerDay: 3,
        weeklyRhythm: 'weekend_booster',
      });

      expect(schedule.plan.length).toBe(121);
      expect(schedule.revisionDaysCount).toBe(10);
      expect(schedule.syllabusDaysCount).toBe(111);

      // Verify final days allocate PYQ sprint and Final Mock Exam simulation
      const revDays = schedule.plan.filter((d) => d.isRevisionDay);
      expect(revDays.length).toBe(10);

      const penultimateDay = revDays[revDays.length - 2];
      const finalDay = revDays[revDays.length - 1];

      expect(penultimateDay.tasks.some((t) => t.taskType === 'PYQ')).toBe(true);
      expect(finalDay.tasks.some((t) => t.taskType === 'MOCK')).toBe(true);

      const val = validateSchedule(schedule);
      expect(val.valid).toBe(true);
      expect(val.scorecard.orderingViolations).toBe(0);
      expect(val.scorecard.duplicateTasks).toBe(0);
      expect(val.scorecard.omittedTasks).toBe(0);
    });
  });

  describe('3. Single-Subject Intensive Revision vs Balanced Multi-Stream', () => {
    it('schedules a single-subject intensive course (Physics only) without subject-mixing errors', () => {
      const schedule = generateSchedule({
        stream: 'cs',
        subjects: ['Physics'],
        startDate: '2026-10-01',
        examDate: '2026-11-15',
        hoursPerDay: 3,
      });

      expect(schedule.plan.length).toBe(46);

      // Verify only Physics tasks are present in study days
      const studyTasks = schedule.plan
        .filter((d) => !d.isRevisionDay)
        .flatMap((d) => d.tasks);

      expect(studyTasks.length).toBeGreaterThan(0);
      expect(studyTasks.every((t) => t.subject === 'Physics')).toBe(true);

      // Part sequential ordering invariant holds strictly
      const val = validateSchedule(schedule);
      expect(val.scorecard.orderingViolations).toBe(0);
      expect(val.scorecard.duplicateTasks).toBe(0);
    });

    it('interleaves balanced multi-stream scheduling across Biology Science', () => {
      const schedule = generateSchedule({
        stream: 'bio',
        startDate: '2026-10-01',
        examDate: '2027-02-15',
        hoursPerDay: 3.5,
      });

      const subjectsPresent = new Set();
      schedule.plan
        .filter((d) => !d.isRevisionDay)
        .forEach((d) => d.tasks.forEach((t) => subjectsPresent.add(t.subject)));

      expect(subjectsPresent.has('Physics')).toBe(true);
      expect(subjectsPresent.has('Chemistry')).toBe(true);
      expect(subjectsPresent.has('Mathematics')).toBe(true);
      expect(subjectsPresent.has('Botany')).toBe(true);
      expect(subjectsPresent.has('Zoology')).toBe(true);
      expect(subjectsPresent.has('Computer Science')).toBe(false);

      const val = validateSchedule(schedule);
      expect(val.valid).toBe(true);
    });
  });

  describe('4. Active Recall Allocation Unit Tests', () => {
    it('creates dedicated active recall tasks matching subjects and buffer length', () => {
      const recallDays = allocateActiveRecall({
        revisionDaysCount: 4,
        streamSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
        completedChaptersBySubject: {
          Physics: ['Electric Charges and Fields', 'Current Electricity'],
        },
      });

      expect(recallDays.length).toBe(4);
      // Day 3 should be PYQ, Day 4 should be Mock
      expect(recallDays[2][0].taskType).toBe('PYQ');
      expect(recallDays[3][0].taskType).toBe('MOCK');
    });
  });

  describe('5. Malformed Inputs, Zero Hours & Boundary Validation', () => {
    it('throws error when examDate is missing or non-string', () => {
      expect(() => generateSchedule({})).toThrow(
        'A valid target examDate string (YYYY-MM-DD) is required'
      );
      expect(() => generateSchedule({ examDate: null })).toThrow();
    });

    it('throws error when examDate is on or before startDate (past / zero runway)', () => {
      expect(() =>
        generateSchedule({
          startDate: '2026-10-10',
          examDate: '2026-10-10',
        })
      ).toThrow('Target deadline must be in the future');

      expect(() =>
        generateSchedule({
          startDate: '2026-10-10',
          examDate: '2026-10-05',
        })
      ).toThrow('Target deadline must be in the future');
    });

    it('throws error when hoursPerDay is zero or negative', () => {
      expect(() =>
        generateSchedule({
          examDate: '2026-11-01',
          hoursPerDay: 0,
        })
      ).toThrow('hoursPerDay must be greater than zero');

      expect(() =>
        generateSchedule({
          examDate: '2026-11-01',
          hoursPerDay: -2,
        })
      ).toThrow('hoursPerDay must be greater than zero');
    });

    it('throws error when calculateDaysBetween receives malformed dates', () => {
      expect(() => calculateDaysBetween('not-a-date', '2026-10-01')).toThrow();
      expect(() => calculateDaysBetween('2026-10-01', '')).toThrow();
    });
  });
});
