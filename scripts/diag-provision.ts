/** A0/A6 provisioning scratch script — bucket + IAM + chat_messages index via ADC. Delete after use. */
import { Storage } from '@google-cloud/storage';
import { GoogleAuth } from 'google-auth-library';

const project = process.env.GOOGLE_CLOUD_PROJECT ?? 'saint-elms-fire';
const bucketName = process.env.ARTIFACT_BUCKET ?? 'saint-elms-fire-artifacts';
const runtimeSa = `saint-elms-fire-app@${project}.iam.gserviceaccount.com`;
const ROLE = 'roles/storage.objectAdmin';

const auth = new GoogleAuth({ scopes: ['https://www.googleapis.com/auth/cloud-platform'] });
const client = await auth.getClient();
const token = (await client.getAccessToken()).token ?? '';
const tokenInfo = await (await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${token}`)).json() as { email?: string };
const localIdentity = tokenInfo.email;
console.log(`project=${project} localIdentity=${localIdentity}`);

// 1. Bucket
const storage = new Storage();
const bucket = storage.bucket(bucketName);
const [exists] = await bucket.exists();
if (exists) {
  console.log(`bucket ${bucketName} already exists`);
} else {
  await storage.createBucket(bucketName, { location: 'ASIA-SOUTH1', storageClass: 'STANDARD' });
  console.log(`bucket ${bucketName} created in ASIA-SOUTH1`);
}

// 2. IAM
const members = [`serviceAccount:${runtimeSa}`];
if (localIdentity) members.push(`user:${localIdentity}`);
const [policy] = await bucket.iam.getPolicy();
for (const member of members) {
  const binding = policy.bindings.find((b) => b.role === ROLE);
  if (binding) {
    if (!binding.members.includes(member)) binding.members.push(member);
  } else {
    policy.bindings.push({ role: ROLE, members: [member] });
  }
}
await bucket.iam.setPolicy(policy);
console.log(`IAM ${ROLE} -> ${members.join(', ')}`);

// 3. Firestore composite index for chat history (studentId == + createdAt desc)
const dbId = encodeURIComponent(process.env.FIRESTORE_DATABASE_ID ?? '(default)');
const indexUrl = `https://firestore.googleapis.com/v1/projects/${project}/databases/${dbId}/collectionGroups/chat_messages/indexes`;
const res = await fetch(indexUrl, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    queryScope: 'COLLECTION',
    fields: [
      { fieldPath: 'studentId', order: 'ASCENDING' },
      { fieldPath: 'createdAt', order: 'DESCENDING' },
    ],
  }),
});
const body = await res.text();
console.log(`index create -> HTTP ${res.status}: ${body.slice(0, 300)}`);
process.exit(0);
