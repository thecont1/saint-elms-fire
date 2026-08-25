import { z } from 'genkit';
import { ai, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';

export const IngestionInputSchema = z.object({
  lessonId: z.string().describe('ID of the lesson to ingest'),
  courseId: z.string().describe('ID of the course'),
  moduleId: z.string().describe('ID of the module'),
  studentId: z.string().describe('Target student ID or cohort identifier'),
  markdownContent: z.string().describe('Full markdown content of the lesson'),
  lessonTitle: z.string().optional().describe('Title of the lesson'),
  releaseTimestamp: z.string().optional().describe('ISO timestamp of release'),
});

export const ExtractedConceptSchema = z.object({
  concept: z.string().describe('Name of key concept/entity/principle'),
  category: z.enum(['core', 'technique', 'architecture', 'formula', 'tradeoff', 'concept']).describe('Category of concept'),
  summary: z.string().describe('Clear, concise 1-2 sentence explanation grounded strictly in the text'),
  importance: z.number().min(1).max(5).describe('Relevance/importance scale 1 to 5'),
});

export const ExtractedEdgeSchema = z.object({
  sourceConcept: z.string().describe('Source concept name'),
  targetConcept: z.string().describe('Target concept name'),
  relationshipType: z.enum(['prerequisite', 'builds_upon', 'related_to', 'contrasts_with', 'part_of']),
  description: z.string().describe('Why and how these two concepts are connected'),
  strength: z.number().min(1).max(5).default(3),
});

export const IngestionOutputSchema = z.object({
  lessonId: z.string(),
  studentId: z.string(),
  extractedNodesCount: z.number(),
  extractedEdgesCount: z.number(),
  nodes: z.array(ExtractedConceptSchema),
  edges: z.array(ExtractedEdgeSchema),
  message: z.string(),
});

function extractFallbackConcepts(markdownContent: string, title?: string): {
  nodes: Array<z.infer<typeof ExtractedConceptSchema>>;
  edges: Array<z.infer<typeof ExtractedEdgeSchema>>;
} {
  const lines = markdownContent.split('\n');
  const headings = lines
    .filter((l) => l.startsWith('## ') || l.startsWith('### '))
    .map((l) => l.replace(/^#+\s*(\d+\.?\s*)?/, '').trim());

  const mainTitle = title || headings[0] || 'Core Architecture';
  const nodes: Array<z.infer<typeof ExtractedConceptSchema>> = [
    {
      concept: mainTitle,
      category: 'core',
      summary: `Primary architectural foundation for ${mainTitle}.`,
      importance: 5,
    },
  ];

  const edges: Array<z.infer<typeof ExtractedEdgeSchema>> = [];

  for (const h of headings) {
    if (h && h.toLowerCase() !== mainTitle.toLowerCase()) {
      const isTradeoff = h.toLowerCase().includes('tradeoff') || h.toLowerCase().includes('fault');
      const isArchitecture = h.toLowerCase().includes('architecture') || h.toLowerCase().includes('state') || h.toLowerCase().includes('index');
      const cat = isTradeoff ? 'tradeoff' : isArchitecture ? 'architecture' : 'technique';

      nodes.push({
        concept: h,
        category: cat,
        summary: `Key mechanism and operational principles of ${h}.`,
        importance: 4,
      });

      edges.push({
        sourceConcept: mainTitle,
        targetConcept: h,
        relationshipType: 'part_of',
        description: `${h} forms an essential sub-component of ${mainTitle}.`,
        strength: 3,
      });
    }
  }

  return { nodes, edges };
}

export const ingestCoursewareFlow = ai.defineFlow(
  {
    name: 'ingestCoursewareFlow',
    inputSchema: IngestionInputSchema,
    outputSchema: IngestionOutputSchema,
  },
  async (input) => {
    const { lessonId, courseId, moduleId, studentId, markdownContent, releaseTimestamp, lessonTitle } = input;
    const releaseTime = releaseTimestamp || new Date().toISOString();

    // Fetch existing nodes for the student to find semantic connections with already learned concepts
    const existingGraph = await DataService.getStudentKnowledgeGraph(studentId);
    const existingConcepts = existingGraph.nodes.map((n) => n.concept);

    let parsed: {
      nodes: Array<z.infer<typeof ExtractedConceptSchema>>;
      edges: Array<z.infer<typeof ExtractedEdgeSchema>>;
    } = { nodes: [], edges: [] };

    try {
      const extractionPrompt = `
You are the Knowledge Ingestion Engine for "Saint Elms Fire", an AI-native Second Brain LMS.
Analyze the following courseware markdown for lesson "${lessonTitle || lessonId}".

TASK:
1. Extract the core concepts, principles, techniques, architectures, or formulas.
2. For each concept, provide a crisp summary strictly grounded in this text.
3. Identify intra-lesson relationships between the newly extracted concepts.
4. If applicable, connect new concepts to previously released concepts known to the student:
   PREVIOUS CONCEPTS: ${existingConcepts.length > 0 ? JSON.stringify(existingConcepts) : 'None yet (first release)'}

MARKDOWN CONTENT:
"""
${markdownContent}
"""

Return a clean structured JSON with:
- nodes: list of { concept, category, summary, importance }
- edges: list of { sourceConcept, targetConcept, relationshipType, description, strength }
`;

      const response = await ai.generate({
        prompt: extractionPrompt,
        output: {
          schema: z.object({
            nodes: z.array(ExtractedConceptSchema),
            edges: z.array(ExtractedEdgeSchema),
          }),
        },
      });

      parsed = response.output || { nodes: [], edges: [] };
    } catch (genError: any) {
      console.warn('Gemini 3.7 Flash generation call encountered rate/quota limit, using structural parser fallback:', genError.message);
      parsed = extractFallbackConcepts(markdownContent, lessonTitle);
    }

    // Format nodes & edges for Firestore persistence
    const nodesToSave = parsed.nodes.map((n) => ({
      lessonId,
      moduleId,
      courseId,
      concept: n.concept,
      category: n.category,
      summary: n.summary,
      importance: n.importance,
      releasedAt: releaseTime,
    }));

    const edgesToSave = parsed.edges.map((e) => ({
      sourceNodeId: '',
      targetNodeId: '',
      sourceConcept: e.sourceConcept,
      targetConcept: e.targetConcept,
      relationshipType: e.relationshipType,
      description: e.description,
      strength: e.strength,
      releasedAt: releaseTime,
    }));

    const { savedNodes, savedEdges } = await DataService.saveKnowledgeNodesAndEdges(
      studentId,
      nodesToSave,
      edgesToSave
    );

    return {
      lessonId,
      studentId,
      extractedNodesCount: savedNodes.length,
      extractedEdgesCount: savedEdges.length,
      nodes: parsed.nodes,
      edges: parsed.edges,
      message: `Successfully ingested lesson and synced ${savedNodes.length} nodes and ${savedEdges.length} edges to student Second Brain graph in Firestore.`,
    };
  }
);
