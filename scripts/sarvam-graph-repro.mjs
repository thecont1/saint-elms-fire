// Reproduce the graph-extraction fallback call to see Sarvam's exact output shape.
import { readFileSync } from 'node:fs';
const env = Object.fromEntries(
  readFileSync('.env', 'utf8').split('\n').filter(l => l.includes('=') && !l.startsWith('#')).map(l => {
    const i = l.indexOf('=');
    return [l.slice(0, i), l.slice(i + 1)];
  })
);

const jsonSchema = {
  type: 'object',
  properties: {
    nodes: { type: 'array', items: { type: 'object', properties: {
      concept: { type: 'string', minLength: 1 },
      category: { type: 'string', enum: ['core','technique','architecture','formula','tradeoff','concept'] },
      summary: { type: 'string', minLength: 1 },
      importance: { type: 'number' },
    }, required: ['concept','category','summary','importance'], additionalProperties: false } },
    edges: { type: 'array', items: { type: 'object', properties: {
      sourceConcept: { type: 'string', minLength: 1 },
      targetConcept: { type: 'string', minLength: 1 },
      relationshipType: { type: 'string', enum: ['prerequisite','builds_upon','related_to','contrasts_with','part_of'] },
      description: { type: 'string', minLength: 1 },
      strength: { type: 'number' },
    }, required: ['sourceConcept','targetConcept','relationshipType','description'], additionalProperties: false } },
  },
  required: ['nodes','edges'],
  additionalProperties: false,
};

const system = `You extract concise knowledge graphs from lesson Markdown. Return only facts present in the lesson text. Connect to prior concepts only when explicitly supported.

Respond with ONLY a single valid JSON object matching this shape, no markdown fences, no commentary:
${JSON.stringify(jsonSchema)}`;

const prompt = `Extract a concise knowledge graph from the lesson below. Use only facts in the Markdown. Connect to prior concepts only when explicitly supported.

Prior concepts: []

Lesson: 2.1 Vector Indexing with HNSW & Product Quantization

# Vector Indexing: HNSW Graphs & Compression Techniques

## 1. High-Dimensional Similarity & The Curse of Dimensionality
Exact Nearest Neighbor (kNN) search in d-dimensional space has time complexity O(N * d), which fails under real-time retrieval requirements with millions of embedding vectors. Approximate Nearest Neighbor (ANN) trades small recall losses for sub-millisecond query latency.

## 2. Hierarchical Navigable Small World (HNSW)
HNSW builds a multi-layer graph hierarchy where:
- Top layers contain sparse nodes with long-range skip connections (express routing).
- Bottom layer (Layer 0) contains all vectors with dense local neighborhood connections.
- Greedy routing starts at the top layer, descends upon reaching local minima, and conducts beam search on Layer 0.

## 3. Product Quantization (PQ)
To fit billions of vectors in RAM:
1. Decompose a d-dimensional vector into m sub-vectors of size (d/m).
2. Run k-means clustering on each sub-space to generate k* centroids (typically 256, encoded as 1 byte).
3. Replace each sub-vector with its nearest centroid ID.
4. Asymmetric Distance Computation (ADC) allows calculating query-to-centroid lookup distances without decompressing stored vectors.`;

const t0 = Date.now();
const res = await fetch('https://api.sarvam.ai/v1/chat/completions', {
  method: 'POST',
  headers: { Authorization: `Bearer ${env.SARVAM_API_KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'sarvam-105b-conversations',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: prompt },
    ],
    max_completion_tokens: 32768,
  }),
});
console.log('HTTP', res.status, 'in', Date.now() - t0, 'ms');
const data = await res.json();
const m = data.choices?.[0]?.message;
console.log('finish:', data.choices?.[0]?.finish_reason);
console.log('content len:', (m?.content || '').length);
console.log('reasoning len:', (m?.reasoning_content || '').length);
console.log('content head:', (m?.content || '').slice(0, 150));
console.log('content tail:', (m?.content || '').slice(-150));
import { writeFileSync } from 'node:fs';
writeFileSync('/tmp/sarvam_graph_content.json', m?.content || '');
