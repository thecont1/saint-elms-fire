/** @type {import('next').NextConfig} */
const gitCommitSha =
  process.env.NEXT_PUBLIC_GIT_COMMIT_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  'dev';

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GIT_COMMIT_SHA: gitCommitSha,
  },
  serverExternalPackages: ['@google-cloud/firestore', 'genkit', '@genkit-ai/google-genai'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
