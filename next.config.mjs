/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['@google-cloud/firestore', 'genkit', '@genkit-ai/google-genai'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
