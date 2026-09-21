const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Extract script from index.html
const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!scriptMatch) {
  console.error('FAIL: Could not locate <script> tag in index.html');
  process.exit(1);
}

// Set up virtual DOM/browser environment for script execution
const context = {
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  navigator: { onLine: true, serviceWorker: { register: () => Promise.resolve() } },
  window: {
    addEventListener: () => {},
    removeEventListener: () => {}
  },
  document: {
    addEventListener: () => {},
    removeEventListener: () => {},
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, style: {} })
  },
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  }
};
const exportSnippet = `
;Object.assign(window, {
  PLANNER_ENGINE_VERSION,
  PLAN_MIGRATION_VERSION,
  PLUS_TWO_SYLLABUS,
  PLUS_ONE_SYLLABUS,
  buildIntelligentPlan,
  validatePlan,
  migrateLegacyUserPlan,
  getLocalDateStr,
  calculateDaysBetween,
  TODAY_STR
});
`;

vm.createContext(context);
try {
  vm.runInContext(scriptMatch[1] + exportSnippet, context);
  console.log('Script loaded successfully in VM context.');
} catch (e) {
  console.error('VM execution error:', e);
  process.exit(1);
}

const {
  PLANNER_ENGINE_VERSION,
  PLUS_TWO_SYLLABUS,
  PLUS_ONE_SYLLABUS,
  buildIntelligentPlan,
  validatePlan,
  migrateLegacyUserPlan,
  getLocalDateStr,
  calculateDaysBetween,
  TODAY_STR
} = context.window;

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    failedChecks++;
    console.error(`[FAIL] ${message}`);
  }
}

console.log('\n--- 1. CANONICAL SYLLABUS AUDIT (HSSLIVE SCERT SCHEME OF WORK) ---');
assert(PLANNER_ENGINE_VERSION === 5, 'PLANNER_ENGINE_VERSION is 5');

// Chemistry Class 12: 10 chapters (Alcohols & Aldehydes in Term 2, Amines & Biomolecules in Term 3)
const chem12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Chemistry');
const chem12Chapters = [...new Set(chem12.map(t => t.chapterName))];
assert(chem12Chapters.length === 10, `Class 12 Chemistry has 10 chapters (found ${chem12Chapters.length})`);
assert(chem12Chapters.some(c => c.toLowerCase().includes('amines')), 'Class 12 Chemistry includes Amines');
assert(chem12Chapters.some(c => c.toLowerCase().includes('biomolecules')), 'Class 12 Chemistry includes Biomolecules');
const alcTerm = chem12.find(t => t.chapterName.includes('Alcohols'))?.term;
assert(alcTerm === 2, `Class 12 Chemistry Alcohols is Term 2 (found Term ${alcTerm})`);

// Physics Class 12: 14 chapters
const phys12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Physics');
const phys12Chapters = [...new Set(phys12.map(t => t.chapterName))];
assert(phys12Chapters.length === 14, `Class 12 Physics has 14 chapters (found ${phys12Chapters.length})`);

// Maths Class 12: 13 chapters (Vector Algebra & 3D Geometry in Term 2)
const maths12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Mathematics');
const maths12Chapters = [...new Set(maths12.map(t => t.chapterName))];
assert(maths12Chapters.length === 13, `Class 12 Maths has 13 chapters (found ${maths12Chapters.length})`);
const vecTerm = maths12.find(t => t.chapterName.includes('Vector Algebra'))?.term;
assert(vecTerm === 2, `Class 12 Maths Vector Algebra is Term 2 (found Term ${vecTerm})`);

// CS Class 12: 12 chapters (Official HSSLive: includes Advances in Computing & ICT and Society)
const cs12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Computer Science');
const cs12Chapters = [...new Set(cs12.map(t => t.chapterName))];
assert(cs12Chapters.length === 12, `Class 12 CS has 12 chapters (found ${cs12Chapters.length})`);
assert(cs12Chapters.some(c => c.includes('Advances in Computing')), 'Class 12 CS includes Advances in Computing');
assert(cs12Chapters.some(c => c.includes('ICT and Society')), 'Class 12 CS includes ICT and Society');

// Botany Class 12: 5 chapters (Official HSSLive: Ecosystem is Ch 5)
const bot12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Botany');
const bot12Chapters = [...new Set(bot12.map(t => t.chapterName))];
assert(bot12Chapters.length === 5, `Class 12 Botany has 5 chapters (found ${bot12Chapters.length})`);

// Zoology Class 12: 8 chapters (Official HSSLive: includes Biodiversity and Conservation)
const zoo12 = PLUS_TWO_SYLLABUS.filter(t => t.subject === 'Zoology');
const zoo12Chapters = [...new Set(zoo12.map(t => t.chapterName))];
assert(zoo12Chapters.length === 8, `Class 12 Zoology has 8 chapters (found ${zoo12Chapters.length})`);
assert(zoo12Chapters.some(c => c.includes('Biodiversity and Conservation')), 'Class 12 Zoology includes Biodiversity and Conservation');

// Plus One Computer Science: 10 chapters (2025-26 C++ Curriculum for Improvement Exam)
const cs11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Computer Science');
const cs11Chapters = [...new Set(cs11.map(t => t.chapterName))];
assert(cs11Chapters.length === 10, `Class 11 CS has 10 chapters for 2025-26 Improvement (found ${cs11Chapters.length})`);
assert(cs11Chapters.some(c => c.includes('Introduction to C++ Programming')), 'Class 11 CS includes Introduction to C++ Programming');
assert(cs11Chapters.some(c => c.includes('Computer Networks')), 'Class 11 CS includes Computer Networks');

// Plus One Physics: 14 chapters
const phys11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Physics');
const phys11Chapters = [...new Set(phys11.map(t => t.chapterName))];
assert(phys11Chapters.length === 14, `Class 11 Physics has 14 chapters (found ${phys11Chapters.length})`);

// Plus One Chemistry: 9 chapters
const chem11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Chemistry');
const chem11Chapters = [...new Set(chem11.map(t => t.chapterName))];
assert(chem11Chapters.length === 9, `Class 11 Chemistry has 9 chapters (found ${chem11Chapters.length})`);

// Plus One Maths: 14 chapters
const maths11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Mathematics');
const maths11Chapters = [...new Set(maths11.map(t => t.chapterName))];
assert(maths11Chapters.length === 14, `Class 11 Maths has 14 chapters (found ${maths11Chapters.length})`);

// Plus One Botany: 9 chapters
const bot11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Botany');
const bot11Chapters = [...new Set(bot11.map(t => t.chapterName))];
assert(bot11Chapters.length === 9, `Class 11 Botany has 9 chapters (found ${bot11Chapters.length})`);

// Plus One Zoology: 10 chapters
const zoo11 = PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Zoology');
const zoo11Chapters = [...new Set(zoo11.map(t => t.chapterName))];
assert(zoo11Chapters.length === 10, `Class 11 Zoology has 10 chapters (found ${zoo11Chapters.length})`);

// Check prerequisites on canonical tasks
PLUS_TWO_SYLLABUS.forEach(task => {
  if (task.part > 1) {
    assert(task.prerequisiteId !== null, `Task ${task.id} has a prerequisite`);
  }
});
PLUS_ONE_SYLLABUS.forEach(task => {
  if (task.part > 1) {
    assert(task.prerequisiteId !== null, `Task ${task.id} has a prerequisite`);
  }
});

console.log('\n--- 2. REGRESSION TEST: BUG REPRODUCTION & FIX ---');
// Tasks for CS stream
const csTasks = PLUS_TWO_SYLLABUS.filter(t => ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'].includes(t.subject));
const testPlanCS = buildIntelligentPlan(
  '2027-03-01',
  csTasks,
  '2026-09-21',
  [],
  'cs'
);

assert(testPlanCS !== null && testPlanCS.planDays && testPlanCS.planDays.length > 0, 'Plan generated successfully');
const validationCS = validatePlan(testPlanCS.planDays, csTasks, { stream: 'cs' });
assert(validationCS.isValid, `Standard plan passes validation (issues: ${validationCS.issues.join('; ')})`);
assert(validationCS.scorecard.orderingViolations === 0, `Zero prerequisite violations in generated plan`);
assert(validationCS.scorecard.duplicateTasks === 0, `Zero duplicate tasks in generated plan`);

// Check chapter continuity
let maxInterleavingGap = 0;
const chapterDayMap = {};
testPlanCS.planDays.forEach(day => {
  day.tasks.forEach(task => {
    if (!task.isRevision) {
      const key = `${task.subject}__${task.chapterName}`;
      if (!chapterDayMap[key]) chapterDayMap[key] = [];
      chapterDayMap[key].push(day.dayNumber);
    }
  });
});
for (const key in chapterDayMap) {
  const days = chapterDayMap[key];
  if (days.length > 1) {
    const span = Math.max(...days) - Math.min(...days);
    if (span > maxInterleavingGap) maxInterleavingGap = span;
  }
}
assert(maxInterleavingGap <= 20, `Chapter parts are scheduled closely (max span was ${maxInterleavingGap} days)`);

console.log('\n--- 3. MATRIX SCENARIOS A through Y ---');
const bioTasks = PLUS_TWO_SYLLABUS.filter(t => ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology'].includes(t.subject));

const scenarios = [
  { id: 'A', stream: 'cs', tasks: csTasks, imp: [], start: '2026-09-21', end: '2027-03-01' },
  { id: 'B', stream: 'cs', tasks: csTasks, imp: [], start: '2026-09-21', end: '2027-02-15' },
  { id: 'C', stream: 'cs', tasks: csTasks, imp: [], start: '2026-09-21', end: '2026-12-31' },
  { id: 'D', stream: 'bio', tasks: bioTasks, imp: [], start: '2026-09-21', end: '2027-03-01' },
  { id: 'E', stream: 'bio', tasks: bioTasks, imp: [], start: '2026-09-21', end: '2027-01-31' },
  { id: 'F', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Physics')], imp: [{ subject: 'Physics', examDate: '2026-10-15' }], start: '2026-09-21', end: '2027-03-01' },
  { id: 'G', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Physics', 'Chemistry'].includes(t.subject))], imp: [{ subject: 'Physics', examDate: '2026-10-15' }, { subject: 'Chemistry', examDate: '2026-10-18' }], start: '2026-09-21', end: '2027-03-01' },
  { id: 'H', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Physics', 'Chemistry', 'Mathematics'].includes(t.subject))], imp: [{ subject: 'Physics', examDate: '2026-10-15' }, { subject: 'Chemistry', examDate: '2026-10-18' }, { subject: 'Mathematics', examDate: '2026-10-22' }], start: '2026-09-21', end: '2027-03-01' },
  { id: 'I', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Botany', 'Zoology'].includes(t.subject))], imp: [{ subject: 'Botany', examDate: '2026-10-14' }, { subject: 'Zoology', examDate: '2026-10-17' }], start: '2026-09-21', end: '2027-03-01' },
  { id: 'J', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Physics', 'Botany'].includes(t.subject))], imp: [{ subject: 'Physics', examDate: '2026-10-15' }, { subject: 'Botany', examDate: '2026-10-20' }], start: '2026-09-21', end: '2027-03-01' },
  { id: 'K', stream: 'cs', tasks: csTasks, imp: [], start: '2026-10-01', end: '2027-01-15' },
  { id: 'L', stream: 'bio', tasks: bioTasks, imp: [], start: '2026-10-01', end: '2027-01-15' },
  { id: 'M', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Physics')], imp: [{ subject: 'Physics', examDate: '2026-10-25' }], start: '2026-10-01', end: '2026-12-31' },
  { id: 'N', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Chemistry')], imp: [{ subject: 'Chemistry', examDate: '2026-10-28' }], start: '2026-09-25', end: '2027-02-28' },
  { id: 'O', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Computer Science')], imp: [{ subject: 'Computer Science', examDate: '2026-10-30' }], start: '2026-09-21', end: '2027-03-15' },
  { id: 'P', stream: 'bio', tasks: bioTasks, imp: [], start: '2026-11-01', end: '2027-03-01' },
  { id: 'Q', stream: 'cs', tasks: csTasks, imp: [], start: '2026-09-21', end: '2026-11-30' },
  { id: 'R', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Physics')], imp: [{ subject: 'Physics', examDate: '2026-10-10' }], start: '2026-09-21', end: '2026-11-30' },
  { id: 'S', stream: 'cs', tasks: csTasks, imp: [], start: '2026-09-21', end: '2027-05-01' },
  { id: 'T', stream: 'bio', tasks: bioTasks, imp: [], start: '2026-09-21', end: '2027-05-01' },
  { id: 'U', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Physics', 'Computer Science'].includes(t.subject))], imp: [{ subject: 'Physics', examDate: '2026-11-05' }, { subject: 'Computer Science', examDate: '2026-11-10' }], start: '2026-10-15', end: '2027-03-01' },
  { id: 'V', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Botany')], imp: [{ subject: 'Botany', examDate: '2026-11-05' }], start: '2026-10-15', end: '2027-03-01' },
  { id: 'W', stream: 'cs', tasks: [...csTasks, ...PLUS_ONE_SYLLABUS.filter(t => t.subject === 'Mathematics')], imp: [{ subject: 'Mathematics', examDate: '2026-10-25' }], start: '2026-09-21', end: '2027-02-15' },
  { id: 'X', stream: 'bio', tasks: [...bioTasks, ...PLUS_ONE_SYLLABUS.filter(t => ['Mathematics', 'Physics'].includes(t.subject))], imp: [{ subject: 'Mathematics', examDate: '2026-10-25' }, { subject: 'Physics', examDate: '2026-10-28' }], start: '2026-09-21', end: '2027-02-15' },
  { id: 'Y', stream: 'cs', tasks: csTasks, imp: [], start: '2026-12-01', end: '2027-03-01' }
];

scenarios.forEach(sc => {
  const result = buildIntelligentPlan(
    sc.end,
    sc.tasks,
    sc.start,
    sc.imp,
    sc.stream
  );

  assert(result !== null && result.planDays && result.planDays.length > 0, `Scenario ${sc.id} produced plan`);
  const val = validatePlan(result.planDays, sc.tasks, { stream: sc.stream });
  assert(val.isValid, `Scenario ${sc.id} is valid: ${val.issues.join(', ')}`);
  assert(val.scorecard.orderingViolations === 0, `Scenario ${sc.id} 0 ordering violations`);
  assert(val.scorecard.duplicateTasks === 0, `Scenario ${sc.id} 0 duplicate tasks`);

  // Stream check
  const forbiddenSub = sc.stream === 'cs' ? ['Botany', 'Zoology'] : ['Computer Science'];
  let hasForbidden = false;
  result.planDays.forEach(d => {
    d.tasks.forEach(t => {
      if (forbiddenSub.includes(t.subject)) hasForbidden = true;
    });
  });
  assert(!hasForbidden, `Scenario ${sc.id} strict stream isolation`);
});

console.log('\n--- 4. RANDOMIZED FUZZ TESTING (500 ITERATIONS) ---');
const csImpList = [[], ['Physics'], ['Chemistry'], ['Mathematics'], ['Computer Science'], ['Physics', 'Chemistry'], ['Physics', 'Mathematics'], ['Physics', 'Chemistry', 'Mathematics']];
const bioImpList = [[], ['Physics'], ['Chemistry'], ['Mathematics'], ['Botany'], ['Zoology'], ['Botany', 'Zoology'], ['Physics', 'Chemistry', 'Botany', 'Zoology']];

let fuzzSuccesses = 0;
for (let i = 0; i < 500; i++) {
  const stream = (i % 2 === 0) ? 'cs' : 'bio';
  const baseTasks = stream === 'cs' ? csTasks : bioTasks;
  const impPool = stream === 'cs' ? csImpList : bioImpList;
  const chosenImpSubs = impPool[i % impPool.length];

  // Duration between 40 and 200 days
  const duration = 40 + (i % 160);
  const startObj = new Date(2026, 8, 21 + (i % 30));
  const endObj = new Date(startObj.getTime() + duration * 86400000);

  const startStr = getLocalDateStr(startObj);
  const endStr = getLocalDateStr(endObj);

  let extraImpTasks = [];
  let impConfig = [];
  if (chosenImpSubs.length > 0) {
    extraImpTasks = PLUS_ONE_SYLLABUS.filter(t => chosenImpSubs.includes(t.subject));
    const examOffset = Math.min(25, Math.floor(duration / 2));
    const examDate = getLocalDateStr(new Date(startObj.getTime() + examOffset * 86400000));
    impConfig = chosenImpSubs.map(s => ({ subject: s, examDate }));
  }

  const allTasks = [...baseTasks, ...extraImpTasks];

  const fuzzResult = buildIntelligentPlan(
    endStr,
    allTasks,
    startStr,
    impConfig,
    stream
  );

  if (fuzzResult && fuzzResult.planDays) {
    const val = validatePlan(fuzzResult.planDays, allTasks, { stream });
    if (val.isValid && val.scorecard.orderingViolations === 0 && val.scorecard.duplicateTasks === 0) {
      fuzzSuccesses++;
    } else {
      console.error(`Fuzz ${i} failed:`, val.issues);
    }
  } else {
    console.error(`Fuzz ${i} failed to generate plan`);
  }
}
assert(fuzzSuccesses === 500, `500/500 fuzz test iterations passed (success: ${fuzzSuccesses})`);

console.log('\n--- 5. MIGRATION & IDEMPOTENCY ---');
const legacyState = {
  version: 2,
  stream: 'cs',
  startDate: '2026-09-21',
  deadlineDate: '2027-03-01',
  completedChaptersOnInit: [],
  improvementConfig: [],
  plan: [
    {
      dayNumber: 1,
      date: '2026-09-21',
      tasks: [
        { id: '+2_Physics_1_P1', subject: 'Physics', chapterName: 'Electric Charges and Fields', part: 'Part 1', completed: true },
        { id: '+2_Chemistry_4_P2', subject: 'Chemistry', chapterName: 'd- & f-Block Elements', part: 'Part 2', completed: true }
      ]
    },
    {
      dayNumber: 2,
      date: '2026-09-22',
      tasks: [
        { id: '+2_Mathematics_1_P1', subject: 'Mathematics', chapterName: 'Relations and Functions', part: 'Part 1', completed: false }
      ]
    }
  ]
};

const migrated = migrateLegacyUserPlan(legacyState);
assert(migrated.engineVersion === 5, 'Migrated state has engineVersion 5');
assert(migrated.plan.length > 0, 'Migrated state has new generated study plan');
assert(migrated.diagnostics !== null, 'Migrated state has diagnostics');

const valMigrated = validatePlan(migrated.plan, csTasks, { stream: 'cs' });
assert(valMigrated.isValid, `Migrated plan passes validation (${valMigrated.issues.join(', ')})`);

// Check that already completed tasks remain marked completed
let foundCompletedP1 = false;
migrated.plan.forEach(day => {
  day.tasks.forEach(t => {
    if (t.id === '+2_Physics_1_P1' && t.completed) foundCompletedP1 = true;
  });
});
assert(foundCompletedP1, 'Completed tasks from legacy plan preserved after migration');

// Test idempotency: migrating already-migrated state
const reMigrated = migrateLegacyUserPlan(migrated);
assert(reMigrated === migrated, 'Migrating v3 state is a clean no-op (idempotent)');

console.log('\n======================================');
console.log(`TOTAL CHECKS: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${failedChecks}`);
console.log('======================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('ALL ENGINE TESTS PASSED WITH ZERO ERRORS!');
  process.exit(0);
}
