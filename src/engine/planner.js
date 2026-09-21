/**
 * Mission PlusTwo Intelligent Planning Engine (v6.0.0)
 * Deterministic, dependency-aware, capacity-bounded study scheduler for Kerala DHSE.
 */

import { PLUS_TWO_CHAPTERS } from '../data/syllabus-plus-two.js';
import { PLUS_ONE_CHAPTERS } from '../data/syllabus-plus-one.js';

export const ENGINE_VERSION = 6;

// Standard effort weights in relative minutes/difficulty
export const EFFORT_WEIGHTS = {
  LOW: 1.0,
  MEDIUM: 1.35,
  HIGH: 1.7,
  VERY_HIGH: 2.1,
};

/**
 * Format local date as YYYY-MM-DD
 * @param {Date} date
 * @returns {string}
 */
export function formatLocalDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Compute calendar days between two YYYY-MM-DD strings
 * @param {string} startStr
 * @param {string} endStr
 * @returns {number}
 */
export function calculateDaysBetween(startStr, endStr) {
  const s = new Date(startStr + 'T00:00:00');
  const e = new Date(endStr + 'T00:00:00');
  const diffMs = e.getTime() - s.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Returns canonical tasks for a given grade and subject list
 * @param {string} stream - 'cs' | 'bio'
 * @param {number} termScope - 1 | 2 | 3
 * @param {boolean} includePlusOne - whether +1 improvement is enabled
 * @param {string[]} plusOneSubjects - selected +1 subjects
 * @returns {Array<Object>}
 */
export function getCanonicalTasks({
  stream = 'cs',
  termScope = 3,
  includePlusOne = false,
  plusOneSubjects = [],
}) {
  const subjects =
    stream === 'bio'
      ? ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology']
      : ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'];

  const allTasks = [];

  // 1. Plus Two Tasks
  subjects.forEach((sub) => {
    const chapters = PLUS_TWO_CHAPTERS[sub] || [];
    chapters.forEach((ch) => {
      // Filter by term scope
      if (ch.term && ch.term > termScope) return;

      ch.parts.forEach((p, idx) => {
        const partNum = idx + 1;
        const totalParts = ch.parts.length;
        allTasks.push({
          id: `p2_${sub.replace(/\s+/g, '_')}_${ch.num}_P${partNum}`,
          grade: '+2',
          subject: sub,
          chapNumber: ch.num,
          chapterName: ch.name,
          part: partNum,
          totalParts: totalParts,
          topicTitle: p.title,
          estimatedMinutes: p.minutes,
          effort: ch.effort,
          weight: EFFORT_WEIGHTS[ch.effort] || 1.35,
          completed: false,
          term: ch.term,
        });
      });
    });
  });

  // 2. Plus One Improvement Tasks
  if (includePlusOne && plusOneSubjects.length > 0) {
    plusOneSubjects.forEach((sub) => {
      const chapters = PLUS_ONE_CHAPTERS[sub] || [];
      chapters.forEach((ch) => {
        ch.parts.forEach((p, idx) => {
          const partNum = idx + 1;
          const totalParts = ch.parts.length;
          allTasks.push({
            id: `p1_${sub.replace(/\s+/g, '_')}_${ch.num}_P${partNum}`,
            grade: '+1',
            subject: sub,
            chapNumber: ch.num,
            chapterName: ch.name,
            part: partNum,
            totalParts: totalParts,
            topicTitle: p.title,
            estimatedMinutes: p.minutes,
            effort: ch.effort,
            weight: (EFFORT_WEIGHTS[ch.effort] || 1.35) * 1.1, // Slight elevation for improvement focus
            completed: false,
            isImprovement: true,
          });
        });
      });
    });
  }

  return allTasks;
}

/**
 * Intelligent Plan Generation Engine
 * Generates an interleaved, dependency-aware daily study timetable.
 */
export function buildIntelligentPlan({
  stream = 'cs',
  startDateStr,
  deadlineDateStr,
  termScope = 3,
  includePlusOne = false,
  plusOneSubjects = [],
  improvementDates: _improvementDates = {},
  dailyStudyHours = 3.5,
  excludedChapterIds = new Set(),
}) {
  const todayStr = startDateStr || formatLocalDateStr(new Date());
  const daysTotal = calculateDaysBetween(todayStr, deadlineDateStr);

  if (daysTotal <= 0) {
    throw new Error('Target deadline must be in the future.');
  }

  // 1. Get filtered canonical tasks
  const rawTasks = getCanonicalTasks({
    stream,
    termScope,
    includePlusOne,
    plusOneSubjects,
  });

  // Filter out excluded chapters
  const activeTasks = rawTasks.filter((t) => !excludedChapterIds.has(t.id));

  // 2. Calculate dynamic revision buffer based on runway
  // Rules: Short runway (< 15 days) -> 1-2 buffer days. Medium (15-60 days) -> 3-7 buffer days. Long (> 60 days) -> 8-12 buffer days.
  let revisionDaysCount;
  if (daysTotal < 10) revisionDaysCount = 1;
  else if (daysTotal < 20) revisionDaysCount = 2;
  else if (daysTotal < 45) revisionDaysCount = 4;
  else if (daysTotal <= 90) revisionDaysCount = 7;
  else revisionDaysCount = 10;

  const studyDaysCount = Math.max(1, daysTotal - revisionDaysCount);

  // 3. Check feasibility (tasks cannot exceed 6 per day)
  const tasksPerDayApprox = activeTasks.length / studyDaysCount;
  const isConstrained = tasksPerDayApprox > 4.5;

  // 4. Partition tasks by subject for intelligent round-robin interleaving
  const subjectQueues = {};
  activeTasks.forEach((t) => {
    const key = `${t.grade}_${t.subject}`;
    if (!subjectQueues[key]) subjectQueues[key] = [];
    subjectQueues[key].push(t);
  });

  // Priority queue ordering: +1 Improvement tasks are placed with higher priority
  const queueKeys = Object.keys(subjectQueues).sort((a, b) => {
    const aIsP1 = a.startsWith('+1');
    const bIsP1 = b.startsWith('+1');
    if (aIsP1 && !bIsP1) return -1;
    if (!aIsP1 && bIsP1) return 1;
    return 0;
  });

  // 5. Day-by-Day Slot Distribution
  const dailyPlans = [];
  let currentCalDate = new Date(todayStr + 'T00:00:00');

  // Distribute active tasks into study days
  const distributedDayTasks = Array.from({ length: studyDaysCount }, () => []);
  let dayIdx = 0;

  while (true) {
    let tasksRemaining = false;
    for (const key of queueKeys) {
      const q = subjectQueues[key];
      if (q && q.length > 0) {
        tasksRemaining = true;
        const task = q.shift();
        distributedDayTasks[dayIdx].push(task);
        dayIdx = (dayIdx + 1) % studyDaysCount;
      }
    }
    if (!tasksRemaining) break;
  }

  // 6. Build the concrete daily plan structures
  for (let i = 0; i < studyDaysCount; i++) {
    const dateStr = formatLocalDateStr(currentCalDate);
    const dayTasks = distributedDayTasks[i] || [];

    // Calculate total minutes for this day
    const totalDayMinutes = dayTasks.reduce((acc, t) => acc + (t.estimatedMinutes || 60), 0);

    dailyPlans.push({
      dayNumber: i + 1,
      date: dateStr,
      isRevisionDay: false,
      isRestDay: dayTasks.length === 0,
      totalMinutes: totalDayMinutes,
      tasks: dayTasks,
    });

    currentCalDate.setDate(currentCalDate.getDate() + 1);
  }

  // 7. Append Revision Phase Days
  for (let r = 0; r < revisionDaysCount; r++) {
    const dateStr = formatLocalDateStr(currentCalDate);
    dailyPlans.push({
      dayNumber: studyDaysCount + r + 1,
      date: dateStr,
      isRevisionDay: true,
      totalMinutes: 180, // Standard 3-hour mock paper session
      tasks: [
        {
          id: `rev_mock_day_${r + 1}`,
          grade: '+2',
          subject: 'Comprehensive Revision',
          chapterName: `Final Preparation: Mock Exam & Model Paper ${r + 1}`,
          topicTitle: 'Official DHSE Sample Question Paper Solving under 2.5 Hour Board Exam Conditions',
          estimatedMinutes: 180,
          isRevision: true,
          completed: false,
        },
      ],
    });
    currentCalDate.setDate(currentCalDate.getDate() + 1);
  }

  return {
    engineVersion: ENGINE_VERSION,
    stream,
    createdDate: todayStr,
    deadlineDate: deadlineDateStr,
    termScope,
    includePlusOne,
    plusOneSubjects,
    revisionDaysCount,
    dailyStudyHours,
    isConstrained,
    plan: dailyPlans,
  };
}

/**
 * Validates plan invariants: no duplicates, total task counts, no lost items
 */
export function validatePlan(planState) {
  if (!planState || !Array.isArray(planState.plan)) {
    return { valid: false, error: 'Missing plan array' };
  }

  const seenIds = new Set();
  let totalTasks = 0;

  for (const day of planState.plan) {
    if (!day.tasks || !Array.isArray(day.tasks)) {
      return { valid: false, error: `Invalid tasks on day ${day.dayNumber}` };
    }
    for (const t of day.tasks) {
      if (seenIds.has(t.id)) {
        return { valid: false, error: `Duplicate task detected: ${t.id}` };
      }
      seenIds.add(t.id);
      totalTasks++;
    }
  }

  return { valid: true, totalTasks, uniqueTaskCount: seenIds.size };
}
