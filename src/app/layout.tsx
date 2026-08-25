import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "St. Elmo's Fire — The Second Brain LMS",
  description: "Illuminating the Unknown with AI-native Knowledge Graphs, Strict Release-Gated RAG, and Proactive Socratic Guidance powered by Genkit & Gemini 3.7 Flash.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col selection:bg-sky-200 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
