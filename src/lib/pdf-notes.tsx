/**
 * Branded PDF notes renderer (Phase 6, Track A3 — see docs/ADR-006).
 *
 * Pure-JS rendering via @react-pdf/renderer: our generated-markdown subset is
 * parsed to typed blocks and laid out with the "mariner's chart" branding
 * (course/module/lesson header, concept callouts, release-date footer).
 */
import React from 'react';
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer';

export type NoteBlock =
  | { type: 'heading1'; text: string }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'listItem'; text: string }
  | { type: 'callout'; text: string }
  | { type: 'code'; text: string };

export function parseMarkdownBlocks(markdown: string): NoteBlock[] {
  const normalized = markdown.replace(/\r\n?/g, '\n').trim();
  if (!normalized) throw new Error('Markdown content is required');

  const blocks: NoteBlock[] = [];
  const lines = normalized.split('\n');
  let index = 0;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    const text = paragraph.join(' ').trim();
    if (text) blocks.push({ type: 'paragraph', text: stripInline(text) });
    paragraph = [];
  };

  while (index < lines.length) {
    const line = lines[index];

    if (line.startsWith('```')) {
      flushParagraph();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: 'code', text: code.join('\n') });
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      const type = level === 1 ? 'heading1' : level === 2 ? 'heading2' : 'heading3';
      blocks.push({ type, text: stripInline(heading[2]) });
      index += 1;
      continue;
    }

    const listItem = line.match(/^\s*[-*+]\s+(.+)$/) ?? line.match(/^\s*\d+\.\s+(.+)$/);
    if (listItem) {
      flushParagraph();
      blocks.push({ type: 'listItem', text: stripInline(listItem[1]) });
      index += 1;
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      blocks.push({ type: 'callout', text: stripInline(quote[1]) });
      index += 1;
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      index += 1;
      continue;
    }

    paragraph.push(line.trim());
    index += 1;
  }
  flushParagraph();
  return blocks;
}

/** Strip inline markdown decoration the PDF layout renders as plain text. */
function stripInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[(.+?)\]\([^)]*\)/g, '$1');
}

const BEACON = '#1d4ed8';
const MARINE = '#0f172a';

const styles = StyleSheet.create({
  page: { paddingTop: 96, paddingBottom: 64, paddingHorizontal: 56, fontSize: 10.5, color: MARINE, fontFamily: 'Helvetica' },
  header: { position: 'absolute', top: 28, left: 56, right: 56, borderBottomWidth: 2, borderBottomColor: BEACON, paddingBottom: 8 },
  headerCourse: { fontSize: 9, color: BEACON, letterSpacing: 1.2, textTransform: 'uppercase' },
  headerLesson: { fontSize: 14, fontFamily: 'Helvetica-Bold', marginTop: 2 },
  headerModule: { fontSize: 9, color: '#475569', marginTop: 2 },
  footer: { position: 'absolute', bottom: 28, left: 56, right: 56, borderTopWidth: 1, borderTopColor: '#cbd5e1', paddingTop: 6, flexDirection: 'row', justifyContent: 'space-between' },
  footerText: { fontSize: 8, color: '#64748b' },
  h1: { fontSize: 17, fontFamily: 'Helvetica-Bold', marginTop: 14, marginBottom: 6, color: MARINE },
  h2: { fontSize: 13.5, fontFamily: 'Helvetica-Bold', marginTop: 12, marginBottom: 5, color: BEACON },
  h3: { fontSize: 11.5, fontFamily: 'Helvetica-Bold', marginTop: 10, marginBottom: 4 },
  paragraph: { marginBottom: 6, lineHeight: 1.5 },
  listItem: { marginBottom: 3, marginLeft: 12, lineHeight: 1.4 },
  callout: { marginVertical: 8, padding: 10, backgroundColor: '#eff6ff', borderLeftWidth: 3, borderLeftColor: BEACON, lineHeight: 1.4 },
  code: { marginVertical: 8, padding: 10, backgroundColor: '#f1f5f9', fontFamily: 'Courier', fontSize: 9, lineHeight: 1.35 },
  conceptBox: { marginTop: 10, marginBottom: 14, padding: 12, borderWidth: 1, borderColor: BEACON, borderRadius: 4 },
  conceptTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: BEACON, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  conceptItem: { fontSize: 9.5, marginBottom: 2 },
});

export interface NotesPdfInput {
  markdown: string;
  courseTitle: string;
  moduleTitle: string;
  lessonTitle: string;
  releasedAt: string;
  /** Knowledge-node concepts rendered as a callout box under the header. */
  concepts?: string[];
}

function NotesDocument({ input, blocks }: { input: NotesPdfInput; blocks: NoteBlock[] }) {
  return (
    <Document title={`${input.lessonTitle} — Study Notes`} author="Saint Elms Fire">
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed>
          <Text style={styles.headerCourse}>{input.courseTitle} · Saint Elms Fire</Text>
          <Text style={styles.headerLesson}>{input.lessonTitle}</Text>
          <Text style={styles.headerModule}>{input.moduleTitle}</Text>
        </View>

        {input.concepts && input.concepts.length > 0 && (
          <View style={styles.conceptBox}>
            <Text style={styles.conceptTitle}>Concepts in this lesson</Text>
            {input.concepts.slice(0, 8).map((concept, i) => (
              <Text key={i} style={styles.conceptItem}>◆ {concept}</Text>
            ))}
          </View>
        )}

        {blocks.map((block, i) => {
          switch (block.type) {
            case 'heading1': return <Text key={i} style={styles.h1}>{block.text}</Text>;
            case 'heading2': return <Text key={i} style={styles.h2}>{block.text}</Text>;
            case 'heading3': return <Text key={i} style={styles.h3}>{block.text}</Text>;
            case 'listItem': return <Text key={i} style={styles.listItem}>• {block.text}</Text>;
            case 'callout': return <Text key={i} style={styles.callout}>{block.text}</Text>;
            case 'code': return <Text key={i} style={styles.code}>{block.text}</Text>;
            default: return <Text key={i} style={styles.paragraph}>{block.text}</Text>;
          }
        })}

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Released {new Date(input.releasedAt).toISOString().slice(0, 10)}</Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
}

export async function renderNotesPdf(input: NotesPdfInput): Promise<Buffer> {
  const blocks = parseMarkdownBlocks(input.markdown);
  const buffer = await renderToBuffer(<NotesDocument input={input} blocks={blocks} />);
  return Buffer.from(buffer);
}
