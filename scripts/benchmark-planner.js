/**
 * Mission PlusTwo Reproducible Planner Benchmark Runner
 * Compares the deterministic constraint-aware planner against two baselines:
 * 1. Naive Sequential Scheduler
 * 2. Naive Round-Robin Scheduler
 * 
 * Evaluates objective properties:
 * - Task Coverage Rate (%)
 * - Duplicate Count
 * - Ordering Violations (e.g., Part 2 scheduled before Part 1)
 * - Deadline Violations (e.g., +1 improvement tasks scheduled after exam date)
 * - Blank Study Days (days with no assigned study tasks during active study period)
 * - Workload Imbalance (standard deviation of daily task count)
 * - Revision Buffer Preservation (count of dedicated final revision days)
 */

import { buildIntelligentPlan, getCanonicalTasks, calculateDaysBetween, formatLocalDateStr } from '../src/engine/planner.js';

// Baseline 1: Naive Sequential Scheduling
function naiveSequentialSchedule(tasks, startDateStr, deadlineStr, improvementConfig = []) {
  const totalDays = calculateDaysBetween(startDateStr, deadlineStr) + 1;
  const days = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDateStr + 'T00:00:00');
    d.setDate(d.getDate() + i);
    days.push({
      dayNumber: i + 1,
      date: formatLocalDateStr(d),
      isRevisionDay: false,
      isRestDay: false,
      tasks: []
    });
  }

  // Pack tasks sequentially into available days
  const tasksPerDay = Math.ceil(tasks.length / totalDays);
  let taskIdx = 0;
  for (let d = 0; d < totalDays && taskIdx < tasks.length; d++) {
    for (let k = 0; k < tasksPerDay && taskIdx < tasks.length; k++) {
      days[d].tasks.push({ ...tasks[taskIdx] });
      taskIdx++;
    }
  }

  return evaluateSchedule(days, tasks, improvementConfig, 0);
}

// Baseline 2: Naive Round-Robin Scheduling
function naiveRoundRobinSchedule(tasks, startDateStr, deadlineStr, improvementConfig = []) {
  const totalDays = calculateDaysBetween(startDateStr, deadlineStr) + 1;
  const days = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDateStr + 'T00:00:00');
    d.setDate(d.getDate() + i);
    days.push({
      dayNumber: i + 1,
      date: formatLocalDateStr(d),
      isRevisionDay: false,
      isRestDay: false,
      tasks: []
    });
  }

  // Group tasks by subject
  const subjects = [...new Set(tasks.map((t) => t.subject))];
  const queues = {};
  subjects.forEach((s) => (queues[s] = tasks.filter((t) => t.subject === s)));

  let dayIdx = 0;
  let remaining = tasks.length;
  let subIdx = 0;

  while (remaining > 0 && dayIdx < totalDays) {
    const s = subjects[subIdx % subjects.length];
    subIdx++;
    if (queues[s].length > 0) {
      const task = queues[s].shift();
      days[dayIdx].tasks.push({ ...task });
      remaining--;
    }
    // Advance day after distributing across available subjects
    if (subIdx % subjects.length === 0) {
      dayIdx = (dayIdx + 1) % totalDays;
    }
  }

  return evaluateSchedule(days, tasks, improvementConfig, 0);
}

// Evaluate schedule metrics
function evaluateSchedule(planDays, originalTasks, improvementConfig, expectedRevisionDays) {
  const scheduledTaskMap = new Map();
  const chapterPartDays = new Map();

  planDays.forEach((day, dayIndex) => {
    (day.tasks || []).forEach((t) => {
      if (!t.id) return;
      if (!scheduledTaskMap.has(t.id)) scheduledTaskMap.set(t.id, []);
      scheduledTaskMap.get(t.id).push({ dayIndex, date: day.date });

      if (t.chapId && t.part) {
        if (!chapterPartDays.has(t.chapId)) chapterPartDays.set(t.chapId, []);
        chapterPartDays.get(t.chapId).push({ part: t.part, dayIndex });
      }
    });
  });

  // 1. Duplicates
  let duplicateCount = 0;
  scheduledTaskMap.forEach((occurrences) => {
    if (occurrences.length > 1) duplicateCount += occurrences.length - 1;
  });

  // 2. Ordering Violations
  let orderingViolations = 0;
  chapterPartDays.forEach((parts) => {
    parts.sort((a, b) => a.part - b.part);
    for (let i = 0; i < parts.length - 1; i++) {
      if (parts[i + 1].dayIndex < parts[i].dayIndex) orderingViolations++;
    }
  });

  // 3. Deadline Violations (for improvement exams)
  let deadlineViolations = 0;
  if (Array.isArray(improvementConfig) && improvementConfig.length > 0) {
    improvementConfig.forEach((cfg) => {
      if (!cfg.examDate) return;
      planDays.forEach((day) => {
        if (day.date > cfg.examDate) {
          const late = (day.tasks || []).filter((t) => t.grade === '+1' && t.subject === cfg.subject);
          deadlineViolations += late.length;
        }
      });
    });
  }

  // 4. Blank study days
  let blankStudyDays = 0;
  for (let i = 0; i < planDays.length; i++) {
    const d = planDays[i];
    if (!d.isRevisionDay && !d.isRestDay && (!d.tasks || d.tasks.length === 0)) {
      blankStudyDays++;
    }
  }

  // 5. Task Coverage
  const covered = originalTasks.filter((t) => scheduledTaskMap.has(t.id)).length;
  const coverageRate = originalTasks.length > 0 ? ((covered / originalTasks.length) * 100).toFixed(1) : 100;

  // 6. Workload Imbalance (std dev of tasks per day across non-revision, non-rest days)
  const activeDays = planDays.filter((d) => !d.isRevisionDay && !d.isRestDay);
  const taskCounts = activeDays.map((d) => (d.tasks || []).length);
  const avg = taskCounts.length > 0 ? taskCounts.reduce((a, b) => a + b, 0) / taskCounts.length : 0;
  const variance = taskCounts.length > 0 ? taskCounts.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / taskCounts.length : 0;
  const workloadStdDev = Math.sqrt(variance).toFixed(2);

  // 7. Revision buffer days
  const actualRevisionDays = planDays.filter((d) => d.isRevisionDay).length;

  return {
    coverageRate: Number(coverageRate),
    duplicateCount,
    orderingViolations,
    deadlineViolations,
    blankStudyDays,
    workloadStdDev: Number(workloadStdDev),
    revisionDays: actualRevisionDays
  };
}

export function runBenchmark() {
  const scenarios = [
    {
      name: 'Standard CS Runway (90 days)',
      stream: 'cs',
      startDate: '2026-10-01',
      deadlineDate: '2026-12-29',
      improvementConfig: []
    },
    {
      name: 'Standard Bio Runway (120 days)',
      stream: 'bio',
      startDate: '2026-10-01',
      deadlineDate: '2027-01-28',
      improvementConfig: []
    },
    {
      name: 'Dual Stream + Dual Improvement (+1 Physics & Chem with exams on Day 25 & 30)',
      stream: 'cs',
      startDate: '2026-10-01',
      deadlineDate: '2027-02-15',
      includePlusOne: true,
      plusOneSubjects: ['Physics', 'Chemistry'],
      improvementConfig: [
        { subject: 'Physics', examDate: '2026-10-25' },
        { subject: 'Chemistry', examDate: '2026-10-30' }
      ]
    },
    {
      name: 'Compressed Cram Runway (21 days, CS)',
      stream: 'cs',
      startDate: '2026-10-01',
      deadlineDate: '2026-10-21',
      improvementConfig: []
    }
  ];

  const results = [];

  for (const s of scenarios) {
    const tasks = getCanonicalTasks({
      stream: s.stream,
      termScope: 3,
      includePlusOne: Boolean(s.includePlusOne),
      plusOneSubjects: s.plusOneSubjects || []
    });

    // 1. Mission PlusTwo Adaptive Planner
    const mPlan = buildIntelligentPlan({
      stream: s.stream,
      startDateStr: s.startDate,
      deadlineDateStr: s.deadlineDate,
      termScope: 3,
      includePlusOne: Boolean(s.includePlusOne),
      plusOneSubjects: s.plusOneSubjects || [],
      improvementDates: (s.improvementConfig || []).reduce((acc, c) => ({ ...acc, [c.subject]: c.examDate }), {})
    });
    const mMetrics = evaluateSchedule(mPlan.plan, tasks, s.improvementConfig, mPlan.revisionDaysCount);

    // 2. Naive Sequential
    const sMetrics = naiveSequentialSchedule(tasks, s.startDate, s.deadlineDate, s.improvementConfig);

    // 3. Naive Round-Robin
    const rMetrics = naiveRoundRobinSchedule(tasks, s.startDate, s.deadlineDate, s.improvementConfig);

    results.push({
      scenario: s.name,
      tasksCount: tasks.length,
      daysCount: calculateDaysBetween(s.startDate, s.deadlineDate) + 1,
      plustwo: mMetrics,
      sequential: sMetrics,
      roundRobin: rMetrics
    });
  }

  return results;
}

if (process.argv[1]?.endsWith('benchmark-planner.js')) {
  console.log('Running Mission PlusTwo Scheduler Benchmarks...\n');
  const results = runBenchmark();
  console.log(JSON.stringify(results, null, 2));
}
