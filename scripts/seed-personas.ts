#!/usr/bin/env bun
import { seedPersonas } from '../src/lib/persona-seeder';

const manifestPath = process.argv.find((argument) => argument.endsWith('.yaml')) || 'content/programme-manifest.yaml';
const { fixtures, counts } = await seedPersonas(manifestPath);

console.table(fixtures.map((fixture) => ({
  persona: fixture.state.personaId,
  studentId: fixture.state.studentId,
  stage: fixture.state.stage,
  releases: fixture.releases.length,
  graphNodes: fixture.nodes.length,
  quizzes: fixture.quizzes.length,
  socraticSessions: fixture.socraticSessions.length,
  readings: fixture.recommendations.length,
  documents: counts[fixture.state.studentId],
})));
