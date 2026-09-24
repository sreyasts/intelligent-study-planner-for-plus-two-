import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

describe('Curriculum Schema & Data Validation (data/kerala-dhse/)', () => {
  const schemaPath = path.resolve(__dirname, '../schemas/curriculum.schema.json');
  const schemaContent = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schemaContent);

  const dataDir = path.resolve(__dirname, '../data/kerala-dhse');
  const jsonFiles = fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith('.json'));

  it('contains the required stream files (science, commerce, humanities)', () => {
    expect(jsonFiles).toContain('science.json');
    expect(jsonFiles).toContain('commerce.json');
    expect(jsonFiles).toContain('humanities.json');
  });

  jsonFiles.forEach((file) => {
    it(`strictly validates ${file} against schemas/curriculum.schema.json`, () => {
      const filePath = path.join(dataDir, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const isValid = validate(data);
      if (!isValid) {
        console.error(`Validation errors in ${file}:`, validate.errors);
      }
      expect(isValid).toBe(true);
      expect(validate.errors).toBeNull();

      // Deep Invariant Checks
      expect(data.stream).toBeDefined();
      expect(Array.isArray(data.subjects)).toBe(true);
      expect(data.subjects.length).toBeGreaterThan(0);

      const subjectIds = new Set();
      data.subjects.forEach((subject) => {
        // Required properties
        expect(subject.subjectId).toMatch(/^[a-z0-9-]+$/);
        expect(subject.subjectName.length).toBeGreaterThanOrEqual(2);
        expect(subject.stream).toBe(data.stream);
        expect(Array.isArray(subject.chapters)).toBe(true);
        expect(subject.chapters.length).toBeGreaterThan(0);

        // Subject ID uniqueness
        expect(subjectIds.has(subject.subjectId)).toBe(false);
        subjectIds.add(subject.subjectId);

        const chapterNumbers = new Set();
        subject.chapters.forEach((chapter) => {
          expect(chapter.chapterNumber).toBeGreaterThanOrEqual(1);
          expect(chapter.title.length).toBeGreaterThanOrEqual(2);
          expect(chapter.weightageScore).toBeGreaterThanOrEqual(0);
          expect(chapter.recommendedRevisionHours).toBeGreaterThanOrEqual(0.25);

          // No duplicate chapter numbers in a single subject
          expect(chapterNumbers.has(chapter.chapterNumber)).toBe(false);
          chapterNumbers.add(chapter.chapterNumber);
        });
      });
    });
  });
});
