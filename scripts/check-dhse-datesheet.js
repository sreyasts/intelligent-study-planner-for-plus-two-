/**
 * Kerala DHSE Datesheet & Circular Watcher
 * Periodically monitors Kerala General Education / DHSE circulars for 2027 examination timetable announcements.
 */

import fs from 'fs';
import path from 'path';

const LOG_FILE = path.resolve('docs/datesheet-monitor.json');
const TARGET_URL = 'https://education.kerala.gov.in/';

const SEARCH_TERMS = [
  'higher secondary examination',
  'plus two examination',
  'time table',
  'timetable',
  'datesheet',
  'march 2027',
  'notification',
];

async function checkDatesheet() {
  console.log(`[DHSE Watcher] Fetching portal: ${TARGET_URL}...`);
  const timestamp = new Date().toISOString();

  let status = 'CHECKED';
  let matches = [];

  try {
    const res = await fetch(TARGET_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!res.ok) {
      console.warn(`[DHSE Watcher] Portal returned status ${res.status}`);
      status = `HTTP_${res.status}`;
    } else {
      const html = await res.text();
      const lowerHtml = html.toLowerCase();

      SEARCH_TERMS.forEach((term) => {
        if (lowerHtml.includes(term)) {
          matches.push(term);
        }
      });
      console.log(`[DHSE Watcher] Keywords detected:`, matches);
    }
  } catch (err) {
    console.error(`[DHSE Watcher] Fetch error:`, err.message);
    status = `ERROR_${err.message}`;
  }

  const logEntry = {
    timestamp,
    status,
    matchedKeywords: matches,
    targetUrl: TARGET_URL,
  };

  fs.writeFileSync(LOG_FILE, JSON.stringify(logEntry, null, 2), 'utf8');
  console.log(`[DHSE Watcher] Status saved to: ${LOG_FILE}`);
}

checkDatesheet();
