# Mission PlusTwo — Privacy-First Usage Telemetry & Metrics Specification

This document details the telemetry architecture, metric definitions, and privacy compliance standards for **Mission PlusTwo**.

Mission PlusTwo adheres strictly to India's **Digital Personal Data Protection Act (DPDP Act) 2023** and **GDPR**. The application operates on an anonymous, cookieless telemetry model designed exclusively to evaluate product retention, onboarding friction, and algorithm efficacy.

---

## 1. Privacy Guarantees & DPDP Act Compliance

1. **Zero Personally Identifiable Information (PII)**:
   - No names, physical addresses, phone numbers, or government IDs are ever requested or logged.
   - User IP addresses are truncated/masked at the edge by Google Cloud/Firebase and are not accessible to maintainers.
2. **Cookieless Operation**:
   - Tracking does NOT use browser cookies or third-party advertising IDs.
   - Signals and ad personalization are explicitly disabled globally:
     ```javascript
     window['gtag_enable_tcf_support'] = false;
     window['ga-disable-analytics'] = false;
     ```
   - No cross-site or fingerprinting trackers are embedded.
3. **Optional Cloud Authentication**:
   - Google Sign-In is completely optional and used solely to store an encrypted serialized study plan in Firebase Cloud Firestore for multi-device sync.
   - Students can use 100% of Mission PlusTwo features offline or in anonymous local mode via browser `localStorage`.

---

## 2. Event Taxonomy & Telemetry Stages

Telemetry events are defined in `src/analytics/tracker.js` and follow a strict sequential activation funnel:

```text
opened
  ↓
setup_started
  ↓
plan_created
  ↓
first_task_checked
  ↓
returned_day3
```

### Event Definitions

| Event Name | Trigger Condition | Educational / Growth Purpose |
| :--- | :--- | :--- |
| `opened` | Client loads the application in a browser window. | Measures initial top-of-funnel reach and web traffic. |
| `setup_started` | Student clicks "Start Setup" or modifies onboarding stream/term controls. | Evaluates onboarding conversion rate from visitor to active student. |
| `plan_created` | Planner generates a valid schedule and saves state. | Measures successful schedule generation across CS, Bio, and Improvement streams. |
| `first_task_checked` | Student ticks off their first study task checkbox. | Captures Day 1 study activation (indicates the student is actually studying). |
| `returned_day3` | Student opens the app 3 or more days after their initial recorded visit timestamp. | Measures true 72-hour study habit formation and early retention. |
| `plan_rebalanced` | Student triggers intelligent regeneration to catch up on missed days. | Measures engagement with the adaptive replanning engine. |
| `timetable_printed` | Student clicks "Print / Save PDF" to export physical schedule. | Measures real-world utility and offline study integration. |
| `pwa_installed` | Student accepts native PWA / WebAPK installation prompt. | Tracks transition to desktop/mobile homescreen standalone utility. |

---

## 3. Retention & Cohort Measurement Methodology

Retention is calculated using non-invasive client-side timestamps stored in `localStorage`:

1. **First Visit Timestamp (`mpt_first_visit_ts`)**: Recorded upon initial `opened` event.
2. **7-Day Study Habit**: Evaluated when a client records a task checkmark where:
   $$\Delta t = t_{\text{now}} - t_{\text{first}} \ge 7 \times 86400\,\text{seconds}$$
3. **Completion Ratio**:
   $$\text{Completion Rate} = \frac{\text{Completed Tasks}}{\text{Total Configured Tasks}} \times 100$$

---

## 4. Public Metrics Integrity Policy

In accordance with OSS maintainer standards:
- All reported metrics on public dashboards or program applications are pulled from primary sources (Firebase Analytics console, GitHub Traffic API, Firestore aggregations).
- Extrapolations or estimates must always be labeled explicitly as `(Estimated)` or `(Sampled)`.
- Fabricated vanity metrics (fake accounts, bot traffic, automated checkmarks) are strictly forbidden.
