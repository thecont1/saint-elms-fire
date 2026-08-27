/**
 * Second-Brain-grounded corpus assembly (Phase 6, Track A0).
 *
 * Multimodal generation draws from the student's curated corpus for a lesson:
 * released lesson chunks + accepted library excerpts + accepted peer shares.
 * Provenance (`sources`) is stored on every artifact so the UI can render
 * "built from: Lesson 3.2, Manning ch. 4, note shared by Priya".
 *
 * The payoff loop: better curation → better corpus → better artifacts.
 */
import type { ArtifactSource } from './artifacts';

export type CorpusScope = 'lesson' | 'second_brain';

export interface CorpusChunk {
  id: string;
  origin?: 'lesson' | 'library' | 'peer_share';
  lessonId: string;
  lessonTitle: string;
  heading: string;
  content: string;
  chunkIndex: number;
  libraryItemId?: string;
  sharedItemId?: string;
}

function sourceOf(chunk: CorpusChunk): ArtifactSource {
  if (chunk.origin === 'library') {
    return { kind: 'library', refId: chunk.libraryItemId ?? chunk.id, label: chunk.lessonTitle };
  }
  if (chunk.origin === 'peer_share') {
    return { kind: 'peer_share', refId: chunk.sharedItemId ?? chunk.id, label: chunk.lessonTitle };
  }
  return { kind: 'lesson', refId: chunk.lessonId, label: chunk.lessonTitle };
}

export function corpusSources(chunks: CorpusChunk[]): ArtifactSource[] {
  const seen = new Map<string, ArtifactSource>();
  for (const chunk of chunks) {
    const source = sourceOf(chunk);
    seen.set(`${source.kind}:${source.refId}`, source);
  }
  return [...seen.values()];
}

export interface AssembledCorpus {
  corpusMarkdown: string;
  sources: ArtifactSource[];
}

export function assembleCorpus(input: {
  scope: CorpusScope;
  chunks: CorpusChunk[];
}): AssembledCorpus {
  const included = input.scope === 'lesson'
    ? input.chunks.filter((chunk) => !chunk.origin || chunk.origin === 'lesson')
    : input.chunks;

  if (included.length === 0) {
    throw new Error('Corpus is empty: no released or accepted material available for generation');
  }

  const byOrigin = { lesson: [] as CorpusChunk[], library: [] as CorpusChunk[], peer_share: [] as CorpusChunk[] };
  for (const chunk of included) byOrigin[chunk.origin ?? 'lesson'].push(chunk);

  const sections: string[] = [];
  const render = (title: string, chunks: CorpusChunk[]) => {
    if (chunks.length === 0) return;
    const body = chunks
      .sort((a, b) => a.lessonTitle.localeCompare(b.lessonTitle) || a.chunkIndex - b.chunkIndex)
      .map((chunk) => `### ${chunk.lessonTitle} — ${chunk.heading}\n${chunk.content}`)
      .join('\n\n');
    sections.push(`## ${title}\n\n${body}`);
  };
  render('Released lesson material', byOrigin.lesson);
  render('University library readings (licensed excerpts)', byOrigin.library);
  render('Peer-contributed material (accepted by this student)', byOrigin.peer_share);

  return { corpusMarkdown: sections.join('\n\n'), sources: corpusSources(included) };
}
