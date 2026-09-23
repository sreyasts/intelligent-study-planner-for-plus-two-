# Mission PlusTwo — Planning Algorithm Specification

## 1. Algorithmic Overview

Mission PlusTwo employs a **deterministic, constraint-aware scheduling algorithm** that solves the multi-subject academic timetable allocation problem under rigid board examination deadlines, subject dependencies, and varying daily capacities.

Rather than relying on non-deterministic or compute-heavy stochastic heuristics (e.g. simulated annealing or unconstrained LLM text generation), the algorithm executes in guaranteed polynomial time (\(O(N \log N + D \cdot S)\) where \(N\) is syllabus parts, \(D\) is runway days, and \(S\) is stream subjects) and ensures **100% reproducible schedules** given identical inputs.

---

## 2. Formal Inputs & Constraints

### 2.1 Inputs

- **\(T_{start}\)**: Schedule start date (`YYYY-MM-DD`).
- **\(T_{deadline}\)**: Final examination deadline date (`YYYY-MM-DD`).
- **\(\mathcal{S}_{stream}\)**: Active subject domain:
  - Computer Science: \(\{\text{Physics}, \text{Chemistry}, \text{Mathematics}, \text{Computer Science}\}\)
  - Biology: \(\{\text{Physics}, \text{Chemistry}, \text{Mathematics}, \text{Botany}, \text{Zoology}\}\)
- **\(\mathcal{E}_{imp}\)**: Improvement exam tuples \(\{(s_i, d_i)\}\) where \(s_i \in \mathcal{S}_{stream}\) and \(d_i \le T_{deadline}\).
- **\(\mathcal{C}_{pers}\)**: Personalization configuration (daily study hours, rest day of week, weekly rhythm style: balanced, weekend booster, or rest day).

### 2.2 Invariant Constraints

1. **Topological Order Invariance**: For any chapter \(C\) with parts \(p_1, p_2, \dots, p_k\), scheduled day \(d(p_{j+1}) \ge d(p_j)\).
2. **Improvement Deadline Invariance**: For every \(+1\) task \(t\) in improvement subject \(s_i\), \(d(t) \le d_i\).
3. **Task Coverage & Non-Duplication**: \(\sum_{d \in D} |t \in d| = N_{applicable}\) with \(\text{duplicates} = 0\) and \(\text{omitted} = 0\).
4. **Revision Buffer Preservation**: Final \(R\) days of the schedule (\(1 \le R \le 10\)) are reserved exclusively for mock papers, previous-year question (PYQ) sprints, and formula recall.
5. **Rest Day Capacity**: On user-designated rest days \(d_{rest}\), no active syllabus study is allocated.

---

## 3. Step-by-Step Scheduling Strategy

### Step 1: Runway Calculation & Dynamic Revision Sizing

Runway length is computed:
\[
D_{total} = \text{calculateDaysBetween}(T_{start}, T_{deadline}) + 1
\]
The dedicated revision buffer \(R\) is dynamically partitioned according to runway duration:
\[
R = \begin{cases}
10 & \text{if } D_{total} \ge 75 \\
7 & \text{if } 45 \le D_{total} < 75 \\
4 & \text{if } 25 \le D_{total} < 45 \\
2 & \text{if } 14 \le D_{total} < 25 \\
1 & \text{if } 7 \le D_{total} < 14 \\
0 & \text{if } D_{total} \le 5
\end{cases}
\]
Active syllabus study days: \(D_{syllabus} = \max(1, D_{total} - R)\).

---

### Step 2: Phase 1 — Plus One (+1) Improvement Schedulability

Because \(+1\) improvement exams typically occur midway through the Plus Two academic year, improvement tasks must be back-loaded and completed *strictly prior* to each subject's exam date:

1. For each subject \(s \in \mathcal{E}_{imp}\), filter all corresponding Class 11 parts: \(\{t_1, t_2, \dots, t_m\}\).
2. Calculate the latest safe study date:
   \[
   d_{latest} = \max(0, \min(d_{exam} - 2, D_{syllabus} - 1))
   \]
3. Gather available active non-rest study days \([0, d_{latest}]\).
4. Map part index \(j \in [0, m-1]\) uniformly across available slots:
   \[
   \text{targetDay}(j) = \text{availableDays}\left[\left\lfloor \frac{j}{m} \cdot |\text{availableDays}| \right\rfloor\right]
   \]
5. Apply monotonicity correction: if \(\text{targetDay}(j) < \text{targetDay}(j-1)\), set \(\text{targetDay}(j) = \min(\text{targetDay}(j-1), d_{latest})\).

---

### Step 3: Phase 2 — Plus Two (+2) State Machine & Subject Interleaving

To prevent student cognitive fatigue, the engine alternates between subjects while maintaining strict chapter part continuity.

1. **State Tracking**: Each subject maintains a cursor:
   - `chapterIndex`: Current chapter pointer.
   - `partIndex`: Current part in active chapter.
   - `lastScheduledDay`: Last day this subject was assigned.
2. **Daily Quota Sizing**: Using an accumulator across active study days, daily task quotas adapt to weekend boosters and rest days without discrete rounding loss:
   \[
   A \leftarrow A + N_{p2} \cdot \frac{w(d)}{\sum w}
   \]
   \[
   K_{today} = \lfloor A \rfloor; \quad A \leftarrow A - K_{today}
   \]
3. **Candidate Subject Selection Heuristic**: For each task slot today, evaluate available subjects:
   \[
   \text{Score}(s) = 1.2 \cdot w_s + \text{InProgressBonus}(s) + 0.8 \cdot \text{RecencyGap}(s)
   \]
   - \(\text{InProgressBonus}(s) = 1.8\) if the subject is currently in the middle of a chapter (partIndex > 0), strongly encouraging chapter completion before jumping away.
   - \(\text{RecencyGap}(s) = d - \text{lastScheduledDay}(s)\), favoring subjects that haven't been reviewed recently.

---

### Step 4: Phase 3 — Spaced Revision Buffer Generation

For the reserved \(R\) days:
- **Penultimate Days**: Dedicated Previous Year Questions (PYQ) sprint across all subjects.
- **Final Day**: 3-hour timed board model exam simulation.
- **Preceding Revision Days**: Spaced rotation targeting each stream subject with curated derivation, formula sheet, named reaction, and diagram checklists.

---

### Step 5: Phase 4 — Invariant Verification Layer (`validatePlan`)

Before rendering, the plan is passed to `validatePlan` which performs an exhaustive structural audit:
- Identifies any duplicated task IDs.
- Verifies chapter part order: \(\forall i, \text{day}(p_{i+1}) \ge \text{day}(p_i)\).
- Checks all improvement tasks against target exam dates.
- Counts any unallocated tasks or unassigned study days.

---

## 4. Complexity & Determinism

- **Time Complexity**: \(O(N \log N + D \cdot |\mathcal{S}|)\) where \(N \le 160\), \(D \le 365\), and \(|\mathcal{S}| \le 5\). Complete schedule generation takes \(< 5\text{ ms}\) on standard browser JS engines.
- **Space Complexity**: \(O(D + N)\) working memory, easily fitting in \(< 1\text{ MB}\) RAM.
- **Determinism**: The algorithm contains no random seeds or non-deterministic branching. Identical inputs strictly yield identical schedules.
