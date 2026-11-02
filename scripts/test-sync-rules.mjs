import assert from 'node:assert/strict';

// Run only against an explicitly configured emulator; never use production data.
assert.ok(process.env.FIRESTORE_EMULATOR_HOST, 'Start the Firestore emulator first');
const project = 'demo-hss-sync';
const origin = `http://${process.env.FIRESTORE_EMULATOR_HOST}`;
const base = `${origin}/v1/projects/${project}/databases/(default)/documents`;
const encode = value => {
  if (value === null) return { nullValue: null };
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number') return { integerValue: String(value) };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(encode) } };
  return { mapValue: { fields: Object.fromEntries(Object.entries(value).map(([key, item]) => [key, encode(item)])) } };
};
function token(uid) {
  const b64 = data => Buffer.from(JSON.stringify(data)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  return `${b64({ alg: 'none', typ: 'JWT' })}.${b64({
    aud: project, iss: `https://securetoken.google.com/${project}`, sub: uid, user_id: uid,
    iat: now, exp: now + 3600, auth_time: now,
    firebase: { sign_in_provider: 'custom', identities: {} },
  })}.`;
}
async function request(path, uid, data) {
  return fetch(`${base}/${path}`, {
    method: data === undefined ? 'GET' : 'PATCH',
    headers: { 'Content-Type': 'application/json', ...(uid ? { Authorization: `Bearer ${token(uid)}` } : {}) },
    ...(data === undefined ? {} : { body: JSON.stringify({ fields: encode(data).mapValue.fields }) }),
  });
}
async function check(label, expected, ...args) {
  const response = await request(...args);
  const body = await response.text();
  assert.equal(response.status, expected, `${label}: ${body}`);
  console.log(`PASS ${label}`);
}
const state = {
  grade: '+2', stream: 'cs', engineVersion: 3, targetTerm: 3,
  startDate: '2026-11-01', deadlineDate: '2027-03-01',
  createdAt: '2026-11-01T00:00:00.000Z', lastModified: '2026-11-01T01:00:00.000Z',
  lastSynced: '2026-11-01T01:00:00.000Z', clientSessionId: 'sess_emulator_phone',
  ownerUid: 'student', userEmail: 'student@example.com', displayName: 'Student',
  plan: [{ date: '2026-11-01', dayNumber: 1, tasks: [{ id: 'Physics_1', completed: true }] }],
  xp: 100, streakCount: 1, lastCompletedDate: '2026-11-01', personalization: {}, diagnostics: {},
};
await check('current app payload including grade and clientSessionId creates successfully', 200, 'users/student', 'student', state);
await check('owner reads account progress on another device', 200, 'users/student', 'student');
await check('progress update succeeds', 200, 'users/student', 'student', { ...state, xp: 200, clientSessionId: 'sess_emulator_pc' });
await check('new plan preserves account creation time', 200, 'users/student', 'student', { ...state, grade: '+1' });
await check('other account cannot read', 403, 'users/student', 'other');
await check('other account cannot write', 403, 'users/student', 'other', state);
await check('signed-out user cannot read', 403, 'users/student', null);
await check('spoofed owner is rejected', 403, 'users/student', 'student', { ...state, ownerUid: 'other' });
await check('invalid grade is rejected', 403, 'users/student', 'student', { ...state, grade: 'invalid' });
await check('oversized session ID is rejected', 403, 'users/student', 'student', { ...state, clientSessionId: 'x'.repeat(151) });
await check('unknown top-level fields are rejected', 403, 'users/student', 'student', { ...state, administrator: true });
await check('creation time remains immutable', 403, 'users/student', 'student', { ...state, createdAt: 'changed' });
console.log('12 Firestore emulator checks passed');
