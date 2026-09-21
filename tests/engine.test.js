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
});
