/** C1 scratch — stage the podcast artifact via the Sarvam fallback adapter when Gemini is flapping. Delete after use. */
import { DataService } from '../src/lib/data-service';
import { gcsArtifactStorage } from '../src/lib/artifact-storage';
import { sarvamTts, synthesizePodcast } from '../src/ai/tts';

const lessonId = 'XUERyrHYJ4DLtowzsE7Q';
const artifactId = 'm7rUgqBlBiFV7V4Rj8QP';
const studentId = 'student-alex';

const FALLBACK_SCRIPT = `Alex: Sam, welcome aboard. Today we chart the Raft consensus algorithm.
Sam: A pleasure, Alex. Raft decomposes consensus into leader election, log replication, and safety.
Alex: Why does the leader matter so much?
Sam: The leader serializes client commands and replicates them; followers only commit what a quorum acknowledges.
Alex: And if the leader vanishes mid-voyage?
Sam: A follower times out, becomes a candidate, and calls an election with a higher term; the majority vote prevents split-brain.
Alex: So the quorum is the true captain.
Sam: Exactly. Entries commit only when a majority replicates them — that is the heart of the safety invariant.`;

const artifact = await DataService.getArtifact(artifactId);
if (!artifact) {
  console.error('artifact missing');
  process.exit(1);
}

const formats = await DataService.getGeneratedFormats(lessonId, studentId);
const savedScript = formats.find((f) => f.formatType === 'podcast_dialogue')?.content;
const script = savedScript && savedScript.length > 0 ? savedScript : FALLBACK_SCRIPT;
console.log(`script source=${savedScript ? 'saved generated_format' : 'built-in fallback'} length=${script.length}`);

const audio = await synthesizePodcast(script, { primary: sarvamTts });
console.log(`synthesized ${audio.byteLength} bytes via ${sarvamTts.name}`);

await gcsArtifactStorage.save(artifact.storagePath, audio, artifact.mimeType);
await DataService.markArtifactReady(artifactId, audio.byteLength);
console.log('podcast artifact marked ready');
process.exit(0);
