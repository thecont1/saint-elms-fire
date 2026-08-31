import { readFile } from 'node:fs/promises';
import { parse } from 'yaml';

export interface ProgrammeManifestRow {
  rowId: string;
  courseId: string;
  courseName: string;
  subjectId: string;
  status: string;
  semesterNumber: number;
  contentPath?: string;
}

export interface ProgrammeManifest {
  totalPdfRows: number;
  rows: ProgrammeManifestRow[];
}

export interface PersonaSeedPlan {
  personaId: 'ananya' | 'brinda' | 'chetna';
  studentId: string;
  completedSemester: number;
  breakMode: boolean;
  recommendReadings: boolean;
  releasedCourses: ProgrammeManifestRow[];
  releasedCourseIds: string[];
  graphNodeTarget: number;
  quizHistoryTarget: number;
  socraticSessionTarget: number;
  seedComment: string;
}

interface RawManifest {
  totalPdfRows?: unknown;
  [key: string]: unknown;
}

export async function readProgrammeManifest(path: string): Promise<ProgrammeManifest> {
  const raw = parse(await readFile(path, 'utf8')) as RawManifest;
  const totalPdfRows = Number(raw.totalPdfRows);
  const rows: ProgrammeManifestRow[] = [];
  for (const [key, value] of Object.entries(raw)) {
    const match = key.match(/^semester-(\d+)$/);
    if (!match || !value || typeof value !== 'object') continue;
    const semesterRows = (value as { rows?: unknown }).rows;
    if (!Array.isArray(semesterRows)) continue;
    for (const entry of semesterRows) {
      if (!entry || typeof entry !== 'object') continue;
      const row = entry as Record<string, unknown>;
      rows.push({
        rowId: String(row.rowId || ''),
        courseId: String(row.courseId || ''),
        courseName: String(row.courseName || ''),
        subjectId: String(row.subjectId || ''),
        status: String(row.status || ''),
        semesterNumber: Number(match[1]),
        contentPath: row.contentPath ? String(row.contentPath) : undefined,
      });
    }
  }
  return { totalPdfRows, rows };
}

function releasedThrough(manifest: ProgrammeManifest, semester: number): ProgrammeManifestRow[] {
  return manifest.rows.filter((row) => row.status === 'released' && row.semesterNumber <= semester);
}

function plan(
  personaId: PersonaSeedPlan['personaId'],
  releasedCourses: ProgrammeManifestRow[],
  options: Omit<PersonaSeedPlan, 'personaId' | 'studentId' | 'releasedCourses' | 'releasedCourseIds'>,
): PersonaSeedPlan {
  return {
    personaId,
    studentId: `student-${personaId}`,
    releasedCourses,
    releasedCourseIds: releasedCourses.map((course) => course.courseId),
    ...options,
  };
}

export function buildPersonaSeedPlans(manifest: ProgrammeManifest): Record<PersonaSeedPlan['personaId'], PersonaSeedPlan> {
  if (!Number.isInteger(manifest.totalPdfRows) || manifest.totalPdfRows !== manifest.rows.length) {
    throw new Error(`Programme manifest declares ${manifest.totalPdfRows} rows but contains ${manifest.rows.length}`);
  }
  if (manifest.totalPdfRows !== 71) {
    throw new Error(`Phase 9 requires the 71-row programme manifest; received ${manifest.totalPdfRows}`);
  }

  const ananyaIds = new Set(['bridge-physics', 'mechanics', 'mechanics-lab', 'differential-calculus']);
  const ananyaCourses = manifest.rows.filter((row) => row.status === 'released' && ananyaIds.has(row.courseId));
  const brindaCourses = releasedThrough(manifest, 3);

  return {
    ananya: plan('ananya', ananyaCourses, {
      completedSemester: 0,
      breakMode: false,
      recommendReadings: false,
      graphNodeTarget: 8,
      quizHistoryTarget: 3,
      socraticSessionTarget: 2,
      seedComment: 'Sem I ongoing: an early released slice of the actual manifest.',
    }),
    brinda: plan('brinda', brindaCourses, {
      completedSemester: 3,
      breakMode: false,
      recommendReadings: false,
      graphNodeTarget: 20,
      quizHistoryTarget: 8,
      socraticSessionTarget: 5,
      seedComment: 'Completed the currently released Semester I–III curriculum from the programme manifest.',
    }),
    chetna: plan('chetna', releasedThrough(manifest, 5), {
      completedSemester: 5,
      breakMode: true,
      recommendReadings: true,
      graphNodeTarget: 36,
      quizHistoryTarget: 15,
      socraticSessionTarget: 9,
      seedComment: 'Completed Sem I–V and on break before Sem VI: use revisitation and library-reading trailheads, not new-material pressure.',
    }),
  };
}
