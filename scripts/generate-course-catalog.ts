/**
 * Regenerates content/course-catalog.md from the lesson files under
 * content/semester-* and content/university-support. Each lesson's ***
 * frontmatter block is the source of truth for the index rows.
 *
 * Usage: bun run scripts/generate-course-catalog.ts [--check]
 *   --check exits non-zero if the on-disk catalog differs (for CI/manual drift checks).
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const CATALOG_PATH = path.join(ROOT, 'content', 'course-catalog.md');

interface LessonRow {
  semesterLabel: string;
  semesterSort: number;
  subjectId: string;
  subjectName: string;
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  lessonId: string;
  lessonName: string;
  lessonNumber: number;
  moduleNumber: number;
  difficulty: string;
  estimatedStudyMinutes: number;
  file: string;
}

function parseFrontmatter(content: string): Record<string, string> {
  const lines = content.split('\n');
  if (lines[0]?.trim() !== '***') {
    throw new Error('missing *** frontmatter opening delimiter');
  }
  const fields: Record<string, string> = {};
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '***') return fields;
    const match = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (match) fields[match[1]] = match[2].trim();
  }
  throw new Error('missing *** frontmatter closing delimiter');
}

function walkMarkdownFiles(dir: string, found: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkMarkdownFiles(full, found);
    else if (entry.endsWith('.md')) found.push(full);
  }
  return found;
}

function collectLessons(): LessonRow[] {
  const roots = [
    ...fs
      .readdirSync(path.join(ROOT, 'content'))
      .filter((entry) => /^semester-\d+$/.test(entry))
      .map((entry) => path.join(ROOT, 'content', entry)),
    path.join(ROOT, 'content', 'university-support'),
  ];

  const rows: LessonRow[] = [];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const file of walkMarkdownFiles(root).sort()) {
      const fm = parseFrontmatter(fs.readFileSync(file, 'utf8'));
      const isAllSemesters = fm.semesterId === 'all';
      rows.push({
        semesterLabel: isAllSemesters ? 'all' : fm.semesterNumber ?? '?',
        semesterSort: isAllSemesters ? Number.MAX_SAFE_INTEGER : Number(fm.semesterNumber ?? 0),
        subjectId: fm.subjectId,
        subjectName: fm.subjectName,
        courseId: fm.courseId,
        courseName: fm.courseName,
        moduleId: fm.moduleId,
        moduleName: fm.moduleName,
        lessonId: fm.lessonId,
        lessonName: fm.lessonName,
        lessonNumber: Number(fm.lessonNumber ?? 0),
        moduleNumber: Number(fm.moduleNumber ?? 0),
        difficulty: fm.difficulty ?? '',
        estimatedStudyMinutes: Number(fm.estimatedStudyMinutes ?? 0),
        file: path.relative(ROOT, file),
      });
    }
  }

  return rows.sort(
    (a, b) =>
      a.semesterSort - b.semesterSort ||
      a.subjectId.localeCompare(b.subjectId) ||
      a.courseId.localeCompare(b.courseId) ||
      a.moduleNumber - b.moduleNumber ||
      a.lessonNumber - b.lessonNumber
  );
}

function renderCatalog(rows: LessonRow[]): string {
  const courses = new Set(rows.map((r) => `${r.semesterSort}|${r.subjectId}|${r.courseId}`));
  const subjects = new Map<string, { name: string; semesters: Set<string>; courses: Set<string>; lessons: number }>();
  for (const row of rows) {
    const entry = subjects.get(row.subjectId) ?? {
      name: row.subjectName,
      semesters: new Set<string>(),
      courses: new Set<string>(),
      lessons: 0,
    };
    entry.semesters.add(row.semesterLabel);
    entry.courses.add(row.courseId);
    entry.lessons += 1;
    subjects.set(row.subjectId, entry);
  }

  const semesterRange = (set: Set<string>) => {
    if (set.has('all')) return 'all';
    const nums = [...set].map(Number).sort((a, b) => a - b);
    return nums.length > 1 ? `${nums[0]}–${nums[nums.length - 1]}` : String(nums[0]);
  };

  const subjectOrder = ['physics', 'mathematics', 'astrophysics', 'computational-methods', 'university-support'];
  const subjectRows = [...subjects.entries()]
    .sort((a, b) => subjectOrder.indexOf(a[0]) - subjectOrder.indexOf(b[0]))
    .map(
      ([id, s]) =>
        `| ${id} | ${s.name} | ${semesterRange(s.semesters)} | ${s.courses.size} | ${s.lessons} |`
    );

  const lessonRows = rows.map(
    (r) =>
      `| ${r.semesterLabel} | ${r.subjectId} | ${r.courseName} | ${r.moduleName} | ${r.lessonName} | ${r.lessonId} | ${r.difficulty} | ${r.estimatedStudyMinutes} |`
  );

  return `---
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
institution: Christ University, Bangalore
batch: 2023–2027
generatedAt: ${new Date().toISOString().slice(0, 10)}
totalSemesters: 6
totalCourses: ${courses.size}
totalLessons: ${rows.length}
sourceType: authored-courseware
---

# Course Catalog

This catalog indexes every courseware file in the \`content/\` tree. Saint Elms Fire's
admin module ingests these markdown files, chunks them, and progressively releases
them as part of the B.Sc. Physics & Mathematics with minor in Astrophysics
programme at Christ University, Bangalore.

Regenerate with \`bun run scripts/generate-course-catalog.ts\`.

## Subjects and streams

| subjectId | subjectName | Semesters | Courses | Lessons |
|-----------|-------------|-----------|---------|---------|
${subjectRows.join('\n')}

## Lesson index

| Semester | Subject | Course | Module | Lesson | lessonId | Difficulty | Study min |
|----------|---------|--------|--------|--------|----------|------------|-----------|
${lessonRows.join('\n')}

## How release works

Saint Elms Fire releases lessons module-by-module. Within a course, lessons share
\`releaseOrder\` integers that start at 1 and increment. Once a course is "live" the
admin module walks \`releaseOrder\` sequentially, unlocking each lesson in turn. The
knowledge graph is built incrementally from the union of all released lessons for a
student.

## Knowledge-graph seam coverage

This corpus intentionally seeds cross-links between:

- **Calculus ↔ Mechanics** (limits, derivatives → velocity, acceleration, work).
- **Differential Equations ↔ Oscillations ↔ Waves** (SHM, damped/forced motion).
- **Linear Algebra ↔ Quantum Mechanics** (operators, eigenstates, Hilbert spaces).
- **Astrophysics ↔ Gravitation ↔ Differential Equations** (Kepler, two-body).
- **Numerical Methods ↔ Analysis** (root-finding, error analysis, ε).
- **Solid State ↔ Quantum ↔ Atomic** (bands, Fermi level, periodic table).

These are made explicit in the "Connections" section of every lesson so the graph
extraction step has reliable concept–relationship pairs to harvest.
`;
}

const rows = collectLessons();
const rendered = renderCatalog(rows);

if (process.argv.includes('--check')) {
  const current = fs.readFileSync(CATALOG_PATH, 'utf8');
  const normalize = (text: string) => text.replace(/generatedAt: \d{4}-\d{2}-\d{2}/, 'generatedAt: X');
  if (normalize(current) !== normalize(rendered)) {
    console.error('course-catalog.md is stale; run: bun run scripts/generate-course-catalog.ts');
    process.exit(1);
  }
  console.log(`course-catalog.md is current (${rows.length} lessons).`);
} else {
  fs.writeFileSync(CATALOG_PATH, rendered);
  console.log(`Wrote ${path.relative(ROOT, CATALOG_PATH)}: ${rows.length} lessons across ${new Set(rows.map((r) => r.courseId)).size} courses.`);
}
