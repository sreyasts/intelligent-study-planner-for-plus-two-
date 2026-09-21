# Contributing to Mission PlusTwo

Thank you for contributing to **Mission PlusTwo**! This open-source study planner helps thousands of Kerala Higher Secondary (+2) and +1 Improvement students succeed in their board exams.

## Code of Conduct
Please be welcoming, inclusive, and respectful in all interactions with fellow students and maintainers.

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sreyasts/intelligent-study-planner-for-plus-two-.git
   cd intelligent-study-planner-for-plus-two-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local dev server:**
   ```bash
   npm run dev
   ```

4. **Run the test suites:**
   ```bash
   npm test             # Vitest test suite
   npm run test:legacy  # Invariant regression tests
   ```

## Pull Request Guidelines

- All features and fixes should be tested. Ensure `npm test` passes with zero errors.
- Never commit secret API keys or service account credentials.
- When updating syllabus data or exam dates, always link the official SCERT or DHSE circular in the PR description.
- Follow our guide on [How to Update Syllabus Data](docs/how-to-update-syllabus.md).
