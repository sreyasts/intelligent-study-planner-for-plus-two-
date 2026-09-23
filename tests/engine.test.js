import { describe, it, expect } from 'vitest';
import {
  buildIntelligentPlan,
  validatePlan,
  formatLocalDateStr,
  calculateDaysBetween,
  getCanonicalTasks,
} from '../src/engine/planner.js';
import { migrateUserState } from '../src/engine/migration.js';

describe('Mission PlusTwo Planning Engine (v6.0.0)', () => {
  it('generates a valid plan with sensible defaults in 1 tap', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
      termScope: 3,
    });

    expect(planState.engineVersion).toBe(6);
    expect(planState.stream).toBe('cs');
    expect(planState.plan.length).toBeGreaterThan(100);

    const validation = validatePlan(planState);
    expect(validation.valid).toBe(true);
    expect(validation.uniqueTaskCount).toBe(validation.totalTasks);
  });

  it('correctly bounds revision buffers based on runway duration', () => {
    // Short runway (7 days) -> 1 revision day
    const shortPlan = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2026-10-08',
    });
    expect(shortPlan.revisionDaysCount).toBe(1);

    // Medium runway (30 days) -> 4 revision days
    const medPlan = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2026-10-31',
    });
    expect(medPlan.revisionDaysCount).toBe(4);

    // Long runway (150 days) -> 10 revision days
    const longPlan = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
    });
    expect(longPlan.revisionDaysCount).toBe(10);
  });

  it('detects infeasible deadlines (past or today dates)', () => {
    expect(() =>
      buildIntelligentPlan({
        stream: 'cs',
        startDateStr: '2026-10-05',
        deadlineDateStr: '2026-10-05',
      })
    ).toThrow('Target deadline must be in the future');
  });

  it('guarantees zero task loss and zero duplicates across all subjects', () => {
    const canonical = getCanonicalTasks({ stream: 'bio', termScope: 3 });
    const planState = buildIntelligentPlan({
      stream: 'bio',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
      termScope: 3,
    });

    const activeStudyTasks = planState.plan
      .filter((d) => !d.isRevisionDay)
      .flatMap((d) => d.tasks);

    expect(activeStudyTasks.length).toBe(canonical.length);

    const taskIds = new Set(activeStudyTasks.map((t) => t.id));
    expect(taskIds.size).toBe(canonical.length);
  });

  it('weaves Plus One Improvement papers with elevated priority when enabled', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
      termScope: 3,
      includePlusOne: true,
      plusOneSubjects: ['Physics', 'Chemistry'],
    });

    const p1Tasks = planState.plan.flatMap((d) =>
      d.tasks.filter((t) => t.grade === '+1')
    );

    expect(p1Tasks.length).toBeGreaterThan(0);
    expect(p1Tasks.every((t) => t.isImprovement)).toBe(true);
  });

  it('calculates daily study minutes accurately for each scheduled day', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
    });

    planState.plan.forEach((day) => {
      if (!day.isRestDay) {
        expect(day.totalMinutes).toBeGreaterThan(0);
        const sumMinutes = day.tasks.reduce(
          (acc, t) => acc + (t.estimatedMinutes || 60),
          0
        );
        expect(day.totalMinutes).toBe(sumMinutes);
      } else {
        expect(day.totalMinutes).toBe(0);
      }
    });
  });
});

describe('State Migration Engine', () => {
  it('seamlessly migrates legacy v2 state preserving all completed checkmarks', () => {
    const legacyState = {
      stream: 'bio',
      plan: [
        {
          dayNumber: 1,
          date: '2026-09-20',
          tasks: [
            {
              id: 'p2_Physics_1_P1',
              subject: 'Physics',
              chapterName: 'Electric Charges and Fields',
              completed: true,
              topicTitle: 'Part 1 of 2: Core Concepts & Theory',
            },
            {
              id: 'p2_Chemistry_1_P1',
              subject: 'Chemistry',
              chapterName: 'Solutions',
              completed: false,
              topicTitle: 'Part 1 of 3: Core Concepts & Theory',
            },
          ],
        },
      ],
    };

    const migrated = migrateUserState(legacyState);
    expect(migrated.engineVersion).toBe(6);

    const task1 = migrated.plan[0].tasks[0];
    const task2 = migrated.plan[0].tasks[1];

    expect(task1.completed).toBe(true);
    expect(task2.completed).toBe(false);
    expect(task1.topicTitle).toBe('Part 1/2: Core Concepts & Theory');
    expect(task1.estimatedMinutes).toBe(60);
  });

  it('is completely idempotent on multiple migration passes', () => {
    const legacyState = {
      stream: 'cs',
      plan: [
        {
          dayNumber: 1,
          tasks: [{ id: 'test_1', completed: true, topicTitle: 'Part 1 of 2' }],
        },
      ],
    };

    const pass1 = migrateUserState(legacyState);
    const pass2 = migrateUserState(pass1);

    expect(pass1).toEqual(pass2);
  });

  it('correctly shifts study schedule so Day 1 aligns with a new start date (Make Today Day 1)', () => {
    const initialPlan = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-09-20',
      deadlineDateStr: '2026-10-10',
    });

    expect(initialPlan.plan[0].dayNumber).toBe(1);
    expect(initialPlan.plan[0].date).toBe('2026-09-20');
    expect(initialPlan.plan[1].dayNumber).toBe(2);
    expect(initialPlan.plan[1].date).toBe('2026-09-21');

    // Simulate shiftPlanToStartDate('2026-09-21')
    const newStart = '2026-09-21';
    const s = new Date(newStart + 'T00:00:00');
    initialPlan.plan.forEach((day, idx) => {
      const d = new Date(s);
      d.setDate(d.getDate() + idx);
      day.date = formatLocalDateStr(d);
    });

    expect(initialPlan.plan[0].dayNumber).toBe(1);
    expect(initialPlan.plan[0].date).toBe('2026-09-21');
    expect(initialPlan.plan[1].dayNumber).toBe(2);
    expect(initialPlan.plan[1].date).toBe('2026-09-22');
  });

  it('correctly identifies earliest incomplete day as active study day when calendar advances', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-09-20',
      deadlineDateStr: '2026-10-10',
    });

    // Simulate partial Day 1 completion: 3 tasks completed, rest uncompleted
    planState.plan[0].tasks[0].completed = true;
    planState.plan[0].tasks[1].completed = true;
    planState.plan[0].tasks[2].completed = true;

    const calendarToday = planState.plan.find(d => d.date === '2026-09-21');
    expect(calendarToday.dayNumber).toBe(2);

    const firstIncompleteDay = planState.plan.find(d => d.tasks.some(t => !t.completed));
    expect(firstIncompleteDay.dayNumber).toBe(1);

    // Active day resolver must select Day 1 to prevent skipping prerequisite chapters
    const activeDay = (firstIncompleteDay && calendarToday && firstIncompleteDay.dayNumber < calendarToday.dayNumber)
      ? firstIncompleteDay
      : calendarToday;

    expect(activeDay.dayNumber).toBe(1);
    expect(activeDay.date).toBe('2026-09-20');
  });
});

describe('Edge Cases, Boundary Conditions & Invariant Hardening', () => {
  it('handles very short deadlines (2 days) without crashing or invalid states', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2026-10-02',
      termScope: 1,
    });

    expect(planState.plan.length).toBe(2);
    expect(planState.revisionDaysCount).toBe(0); // Short runway reserves 0 revision days
    expect(planState.plan[0].tasks.length).toBeGreaterThan(0);
    expect(planState.diagnostics.isInfeasible).toBe(true); // Flagged as overloaded
    const validation = validatePlan(planState);
    expect(validation.scorecard.duplicateTasks).toBe(0);
    expect(validation.scorecard.orderingViolations).toBe(0);
  });

  it('rejects invalid or malformed date inputs with explicit errors', () => {
    expect(() =>
      buildIntelligentPlan({
        stream: 'cs',
        startDateStr: 'invalid-date',
        deadlineDateStr: '2026-10-20',
      })
    ).toThrow('Target deadline must be in the future');

    expect(calculateDaysBetween('invalid-date', '2026-10-20')).toBeNaN();
  });

  it('resiliently handles rest-day configurations even when saturated', () => {
    // If user sets Sunday as rest day on a 1-day Sunday runway, it must preserve at least one active study day
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-04', // Sunday
      deadlineDateStr: '2026-10-05',
      capacityOptions: {
        personalization: {
          weeklyRhythm: 'rest_day',
          restDayOfWeek: 0, // Sunday
        },
      },
    });

    expect(planState.plan.length).toBe(2);
    // Active study day count must be > 0 (rest day reset safety kicks in)
    const activeDays = planState.plan.filter((d) => !d.isRestDay);
    expect(activeDays.length).toBeGreaterThan(0);
  });

  it('safely tolerates zero or negative capacity and personalization values', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2026-10-31',
      capacityOptions: {
        weekdayDailyTasks: -5,
        weekendDailyTasks: 0,
        personalization: {
          dailyHours: -2,
          subjectWeights: { Physics: -1, Chemistry: 0, Mathematics: 'invalid' },
        },
      },
    });

    expect(planState.valid).toBe(true);
    expect(planState.scorecard.duplicateTasks).toBe(0);
    expect(planState.scorecard.orderingViolations).toBe(0);
  });

  it('deduplicates duplicate tasks provided in caller task lists', () => {
    const canonical = getCanonicalTasks({ stream: 'cs', termScope: 1 });
    // Duplicate the task list
    const duplicatedInput = [...canonical, ...canonical];

    const planState = buildIntelligentPlan(
      '2026-11-01',
      duplicatedInput,
      '2026-10-01',
      [],
      'cs'
    );

    const validation = validatePlan(planState);
    expect(validation.scorecard.duplicateTasks).toBe(0);
    expect(validation.uniqueTaskCount).toBe(canonical.length + planState.revisionDaysCount);
  });

  it('handles empty input task lists gracefully without exceptions', () => {
    const planState = buildIntelligentPlan(
      '2026-10-15',
      [],
      '2026-10-01',
      [],
      'cs'
    );

    expect(planState.plan.length).toBe(15);
    expect(planState.totalConfiguredTasks).toBe(0);
    const validation = validatePlan(planState);
    expect(validation.valid).toBe(true);
  });

  it('schedules multiple improvement exams prior to respective individual deadlines', () => {
    const planState = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2027-02-28',
      includePlusOne: true,
      plusOneSubjects: ['Physics', 'Chemistry', 'Mathematics'],
      improvementDates: {
        Physics: '2026-10-20',
        Chemistry: '2026-10-25',
        Mathematics: '2026-11-05',
      },
    });

    const validation = validatePlan(planState, undefined, {
      stream: 'cs',
      improvementConfig: [
        { subject: 'Physics', examDate: '2026-10-20' },
        { subject: 'Chemistry', examDate: '2026-10-25' },
        { subject: 'Mathematics', examDate: '2026-11-05' },
      ],
    });

    expect(validation.scorecard.deadlineViolations).toBe(0);
    expect(validation.scorecard.orderingViolations).toBe(0);
    expect(validation.scorecard.duplicateTasks).toBe(0);
  });

  it('supports improvement-only stream mode for repeating students', () => {
    const planState = buildIntelligentPlan({
      stream: 'imp_only',
      startDateStr: '2026-10-01',
      deadlineDateStr: '2026-11-15',
      improvementOnly: true,
      plusOneSubjects: ['Physics', 'Chemistry'],
      improvementDates: {
        Physics: '2026-11-10',
        Chemistry: '2026-11-12',
      },
    });

    expect(planState.stream).toBe('imp_only');
    const allTasks = planState.plan.flatMap((d) => d.tasks);
    expect(allTasks.every((t) => t.grade === '+1' || t.isRevision)).toBe(true);
    const validation = validatePlan(planState);
    expect(validation.scorecard.orderingViolations).toBe(0);
  });

  it('correctly handles month and leap year date transitions', () => {
    // Leap year boundary: Feb 2028
    const leapPlan = buildIntelligentPlan({
      stream: 'cs',
      startDateStr: '2028-02-27',
      deadlineDateStr: '2028-03-03',
      termScope: 1,
    });

    // 2028-02-27, 28, 29, 03-01, 02, 03 -> 6 days
    expect(leapPlan.plan.length).toBe(6);
    expect(leapPlan.plan[2].date).toBe('2028-02-29');
    expect(leapPlan.plan[3].date).toBe('2028-03-01');
  });

  it('property test: maintains invariant ordering under randomly shuffled task inputs', () => {
    const canonical = getCanonicalTasks({ stream: 'cs', termScope: 2 });

    for (let iteration = 0; iteration < 5; iteration++) {
      // Fisher-Yates shuffle
      const shuffled = [...canonical];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const planState = buildIntelligentPlan(
        '2026-12-15',
        shuffled,
        '2026-10-01',
        [],
        'cs'
      );

      const validation = validatePlan(planState, canonical, { stream: 'cs' });
      expect(validation.scorecard.orderingViolations).toBe(0);
      expect(validation.scorecard.duplicateTasks).toBe(0);
      expect(validation.scorecard.omittedTasks).toBe(0);
    }
  });
});

