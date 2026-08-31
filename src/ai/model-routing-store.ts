import { db } from '@/lib/firestore';
import {
  ModelRoutingConfigStore,
  bootstrapModelRoutingConfig,
  type ModelRoutingConfig,
} from './model-routing';

const routingRef = db.collection('config').doc('modelRouting');

export const modelRoutingStore = new ModelRoutingConfigStore({
  bootstrap: bootstrapModelRoutingConfig(),
  ttlMs: 30_000,
  async read(): Promise<unknown | null> {
    const snapshot = await routingRef.get();
    return snapshot.exists ? snapshot.data() : null;
  },
  async write(value: ModelRoutingConfig): Promise<void> {
    await routingRef.set(value);
  },
});
