import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';

export async function POST() {
  try {
    // Check if courses already exist
    const existingCourses = await DataService.getCourses();
    if (existingCourses.length > 0) {
      return NextResponse.json({
        message: 'Courses already exist in Firestore.',
        courseCount: existingCourses.length,
        courses: existingCourses,
      });
    }

    // 1. Create UGC hierarchy: Programme → Subject → Semester → Course
    const programmes = await DataService.getProgrammes();
    let programme;
    if (programmes.length === 0) {
      programme = await DataService.createProgramme({
        title: 'M.Sc. in Computer Science',
        level: 'postgraduate',
        durationSemesters: 4,
        totalCredits: 80,
        description: 'Postgraduate programme in distributed systems and AI architectures.',
      });
    } else {
      programme = programmes[0];
    }

    let subjects = await DataService.getSubjects(programme.id);
    let subject;
    if (subjects.length === 0) {
      subject = await DataService.createSubject({
        programmeId: programme.id,
        title: 'Computer Science',
        code: 'CS',
        description: 'Core computer science discipline.',
      });
    } else {
      subject = subjects[0];
    }

    let semesters = await DataService.getSemesters(subject.id);
    let semester;
    if (semesters.length === 0) {
      semester = await DataService.createSemester({
        programmeId: programme.id,
        subjectId: subject.id,
        title: 'Year I - Semester 1',
        yearNumber: 1,
        semesterNumber: 1,
        order: 1,
      });
    } else {
      semester = semesters[0];
    }

    const course = await DataService.createCourse({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      title: 'CS-850: Distributed Systems & Autonomous AI Architectures',
      description: 'Foundations of resilient consensus, vector index partitioning, event-driven streaming, and decentralized agent graphs.',
      category: 'core',
      credits: 4,
      instructor: 'Dr. Elena Vance & Staff',
      code: 'CS-850',
    });

    // 2. Create Modules
    const mod1 = await DataService.createModule({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      title: 'Module 1: Consensus & State Machine Replication',
      description: 'Raft protocol, Byzantine Fault Tolerance, and distributed WALs.',
      order: 1,
    });

    const mod2 = await DataService.createModule({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      title: 'Module 2: High-Throughput Vector Indices & RAG Partitioning',
      description: 'HNSW, Quantization, Sharding strategies, and multi-tenant graph memory.',
      order: 2,
    });

    const mod3 = await DataService.createModule({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      title: 'Module 3: Autonomous Agent Orbits & Multi-Agent Consensus',
      description: 'Durable workflows, actor mailboxes, and agentic reflection loops.',
      order: 3,
    });

    // 3. Create Lessons with rich Markdown
    const lesson1_1 = await DataService.createLesson({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      moduleId: mod1.id,
      title: '1.1 The Raft Consensus Algorithm & Leader Election',
      order: 1,
      summary: 'Leader election, heartbeat timeouts, term numbers, and log replication safety in Raft.',
      tags: ['Consensus', 'Raft', 'Distributed Systems'],
      markdownContent: `# The Raft Consensus Algorithm: Leader Election & Safety

## 1. Introduction & Problem Statement
In distributed computing, achieving consensus across unreliable nodes over an asynchronous network is the bedrock of resilient infrastructure. Raft addresses this by decomposing consensus into three distinct subproblems:
- **Leader Election**
- **Log Replication**
- **Safety Invariants**

\`\`\`
       +-------------+
       |   Follower  |<----------------+
       +-------------+                 |
              | (election timeout)     | (discovers current leader
              v                        |  or higher term)
       +-------------+                 |
       |  Candidate  |-----------------+
       +-------------+
              | (receives majority votes)
              v
       +-------------+
       |    Leader   |
       +-------------+
\`\`\`

## 2. Server States & State Transitions
At any given moment, each server is in one of three states:
1. **Leader**: Handles all client requests, replicates log entries to followers, and sends periodic heartbeats (\`AppendEntries\` RPC with empty entries).
2. **Follower**: Passive responder; only replies to RPCs from candidates and leaders. If election timeout elapses without heartbeats, it transitions to candidate.
3. **Candidate**: Increments term counter, votes for itself, and broadcasts \`RequestVote\` RPCs to peers.

## 3. Election Invariants & Quorum
- A candidate wins an election if it collects votes from a strict majority (\`N/2 + 1\`) of servers in the cluster for that term.
- Each server votes for at most **one** candidate per term on a first-come, first-served basis.
- Randomized election timeouts (e.g., 150ms–300ms) prevent split votes when multiple nodes detect leader failure simultaneously.

## 4. Log Matching Invariant
If two logs contain an entry with the same index and term:
- They store the same command.
- Their logs are identical in all preceding entries.

## 5. Architectural Tradeoffs
- **Pros**: Understandable formal model, deterministic single-leader operational simplicity.
- **Cons**: Leader bottleneck under extreme write pressure; failover pause during re-election window.
`,
    });

    const lesson1_2 = await DataService.createLesson({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      moduleId: mod1.id,
      title: '1.2 Log Replication, Commit Indexes, and Byzantine Resistance',
      order: 2,
      summary: 'Handling network partitions, log matching checks, and comparing crash-fault-tolerant vs Byzantine systems.',
      tags: ['Log Replication', 'Partitions', 'BFT'],
      markdownContent: `# Log Replication & Fault Boundaries in Distributed State Machines

## 1. The AppendEntries Protocol
Once a leader is elected, it begins serving client commands:
1. Leader appends command to its local log as an uncommitted entry.
2. Leader sends \`AppendEntries\` RPC containing the entry, the previous entry index, and previous entry term (\`prevLogIndex\`, \`prevLogTerm\`).
3. Follower rejects the RPC if its log does not contain an entry matching \`prevLogIndex\` and \`prevLogTerm\`.
4. Leader retries by decrementing \`nextIndex\` until follower log converges.

## 2. Commit Rule
An entry is considered **committed** once it is safely replicated on a majority of nodes by the leader of the current term. Once committed, the leader executes the state machine transition and returns the result to the client.

## 3. Handling Network Partitions (Split-Brain Defense)
Consider a 5-node cluster \`[S1, S2, S3, S4, S5]\` partitioned into \`{S1, S2}\` and \`{S3, S4, S5}\`:
- Minority partition \`{S1, S2}\` cannot commit any writes because quorum requires 3 nodes.
- Majority partition \`{S3, S4, S5}\` elects a new leader with a higher term and commits valid client writes.
- Upon partition healing, \`S1\` and \`S2\` recognize the higher term, step down, and overwrite uncommitted speculative logs.

## 4. Crash Fault Tolerance (CFT) vs. Byzantine Fault Tolerance (BFT)
- **CFT (Raft, Paxos)**: Assumes non-malicious nodes that may crash or drop messages, but do not lie. Tolerates up to \`f\` failures with \`2f + 1\` nodes.
- **BFT (PBFT, Tendermint)**: Assumes adversarial nodes capable of forging messages or equivocation. Requires \`3f + 1\` nodes to tolerate \`f\` Byzantine actors.
`,
    });

    const lesson2_1 = await DataService.createLesson({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      moduleId: mod2.id,
      title: '2.1 Vector Indexing with HNSW & Product Quantization',
      order: 1,
      summary: 'Hierarchical Navigable Small World graphs, dimensional reduction, and approximate nearest neighbor search.',
      tags: ['Vector Search', 'HNSW', 'Quantization'],
      markdownContent: `# Vector Indexing: HNSW Graphs & Compression Techniques

## 1. High-Dimensional Similarity & The Curse of Dimensionality
Exact Nearest Neighbor (kNN) search in d-dimensional space has time complexity \\(O(N \\cdot d)\\), which fails under real-time retrieval requirements with millions of embedding vectors. Approximate Nearest Neighbor (ANN) trades small recall losses for sub-millisecond query latency.

## 2. Hierarchical Navigable Small World (HNSW)
HNSW builds a multi-layer graph hierarchy where:
- Top layers contain sparse nodes with long-range skip connections (express routing).
- Bottom layer (Layer 0) contains all vectors with dense local neighborhood connections.
- Greedy routing starts at the top layer, descends upon reaching local minima, and conducts beam search on Layer 0.

\`\`\`
Layer 2: [A] ------------------------> [G]
           \\                            \\
Layer 1: [A] ---------> [D] ---------> [G]
           \\            /  \\           / \\
Layer 0: [A] -> [B] -> [C] -> [D] -> [E] -> [F] -> [G]
\`\`\`

## 3. Product Quantization (PQ)
To fit billions of vectors in RAM:
1. Decompose a d-dimensional vector into \\(m\\) sub-vectors of size \\(d/m\\).
2. Run k-means clustering on each sub-space to generate \\(k^*\\) centroids (typically 256, encoded as 1 byte).
3. Replace each sub-vector with its nearest centroid ID.
4. Asymmetric Distance Computation (ADC) allows calculating query-to-centroid lookup distances without decompressing stored vectors.
`,
    });

    const lesson3_1 = await DataService.createLesson({
      programmeId: programme.id,
      subjectId: subject.id,
      semesterId: semester.id,
      courseId: course.id,
      moduleId: mod3.id,
      title: '3.1 Durable Agent Workflows & State Synchronization',
      order: 1,
      summary: 'Actor models, deterministic replay, event-sourced agent state, and tool-call checkpoints.',
      tags: ['Agents', 'Durable Execution', 'State Machines'],
      markdownContent: `# Durable Agent Workflows & State Synchronization

## 1. Ephemeral vs. Durable Agent Execution
Standard LLM agent loops execute in transient memory. If a network blip occurs mid-workflow (e.g. during a 30-second multi-step code generation or external API call), the entire context is lost.

Durable Execution provides:
- **Automatic Checkpointing**: State is saved to durable storage at each workflow step.
- **Deterministic Replay**: When recovering, previous successful steps are replayed from cached outputs rather than re-executing expensive LLM calls.
- **Reliable Sleep/Alarms**: Workflows can pause for hours or days waiting for user input without consuming active compute.
`,
    });

    // 4. Create sample initial quiz records to simulate past student interaction
    await DataService.recordQuizSubmission({
      studentId: 'student-alex',
      lessonId: lesson1_1.id,
      concept: 'Raft Leader Election Quorum',
      question: 'What is the minimum number of votes required for a candidate to become leader in a 5-node cluster?',
      selectedOptionIndex: 1, // answered 2 instead of 3
      isCorrect: false,
      feedback: 'Incorrect. A majority of 5 nodes is 3 (N/2 + 1), not 2.',
      weakSpotDetected: true,
    });

    return NextResponse.json({
      message: 'Courseware successfully seeded into Firestore!',
      course,
      modules: [mod1, mod2, mod3],
      lessons: [lesson1_1, lesson1_2, lesson2_1, lesson3_1],
    });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
