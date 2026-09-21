/**
 * Backward-Compatible State Migration Engine
 * Safely upgrades legacy localStorage & Cloud Firestore study plans (v1 through v5) to v6.0.0.
 * Guarantees zero loss of user progress or completed task checkmarks.
 */

import { ENGINE_VERSION } from './planner.js';

export const MIGRATION_VERSION = 6;

/**
 * Cleanly migrates any legacy user study plan state into modern v6 structure.
 * @param {Object} rawState
 * @returns {Object}
 */
export function migrateUserState(rawState) {
  if (!rawState || typeof rawState !== 'object') {
    return null;
  }

  // If already at latest engine version, return clean copy
  if (rawState.engineVersion === ENGINE_VERSION && Array.isArray(rawState.plan)) {
    return { ...rawState };
  }

  // Extract completed task IDs from any legacy structure
  const completedTaskIds = new Set();

  if (Array.isArray(rawState.plan)) {
    rawState.plan.forEach((day) => {
      if (Array.isArray(day.tasks)) {
        day.tasks.forEach((task) => {
          if (task && task.completed && task.id) {
            completedTaskIds.add(task.id);
          }
        });
      }
    });
  }

  // Also check if legacy format stored completed tasks in an array or map
  if (Array.isArray(rawState.completedTasks)) {
    rawState.completedTasks.forEach((id) => completedTaskIds.add(id));
  }

  // Upgrade the plan days and tasks
  const upgradedPlan = (rawState.plan || []).map((day, dIdx) => {
    const upgradedTasks = (day.tasks || []).map((t, tIdx) => {
      const isCompleted = completedTaskIds.has(t.id) || Boolean(t.completed);

      // Clean topic title formatting (replace legacy "Part 1 of 3" with clean subtopics)
      let topic = t.topicTitle || '';
      if (topic.includes('of')) {
        topic = topic.replace(/Part (\d+) of (\d+)/i, 'Part $1/$2');
      }

      return {
        ...t,
        id: t.id || `legacy_task_${dIdx}_${tIdx}`,
        grade: t.grade || (t.id && t.id.startsWith('p1_') ? '+1' : '+2'),
        completed: isCompleted,
        topicTitle: topic,
        estimatedMinutes: t.estimatedMinutes || 60,
      };
    });

    const totalMinutes = upgradedTasks.reduce(
      (acc, t) => acc + (t.estimatedMinutes || 60),
      0
    );

    return {
      ...day,
      dayNumber: day.dayNumber || dIdx + 1,
      totalMinutes: day.totalMinutes || totalMinutes,
      tasks: upgradedTasks,
    };
  });

  return {
    ...rawState,
    engineVersion: ENGINE_VERSION,
    stream: rawState.stream || 'cs',
    createdDate: rawState.createdDate || new Date().toISOString().split('T')[0],
    deadlineDate: rawState.deadlineDate || '2027-02-28',
    termScope: rawState.termScope || 3,
    includePlusOne: Boolean(rawState.includePlusOne),
    plusOneSubjects: rawState.plusOneSubjects || [],
    dailyStudyHours: rawState.dailyStudyHours || 3.5,
    plan: upgradedPlan,
  };
}
