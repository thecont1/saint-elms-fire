import { sweepStaleWork } from '../src/lib/job-watchdog';
import type { WatchdogStore } from '../src/lib/job-watchdog';
import type { JobRecord } from '../src/lib/job-queue';
import type { GeneratedArtifact } from '../src/lib/artifacts';

async function main() {
  const now = Date.now();
  const createdAt = new Date(now - 150 * 1000).toISOString();
  
  const mockStore: WatchdogStore = {
    listActiveJobs: async () => [{
      id: 'job-1',
      kind: 'podcast_audio',
      payload: {},
      status: 'running',
      attempts: 0,
      createdAt,
      startedAt: createdAt,
    }],
    listPendingArtifactsOlderThan: async () => [],
    getJob: async () => null,
    resetJobToPending: async (job: JobRecord) => { console.log('resetJobToPending called'); },
    failJob: async (job: JobRecord, category?: string) => { console.log('failJob called with category', category); },
    failArtifact: async (id: string, expectedStatus?: 'pending', category?: string) => { console.log('failArtifact called'); },
  };

  const result = await sweepStaleWork(mockStore, now);
  console.log('Result:', result);
  if (result.deadLettered === 0) {
    console.log('SUCCESS: 150s job was not swept.');
  } else {
    console.log('FAILED: 150s job was swept.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
