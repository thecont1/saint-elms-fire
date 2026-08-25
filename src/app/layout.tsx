import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Saint Elms Fire — The Second Brain Multimodal LMS",
  description: "AI-native Learning Management System with Drip-Feed Knowledge Graphs, Strict Release-Gated RAG, and Proactive Socratic Tutoring powered by Genkit & Gemini 3.7 Flash.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090D16] text-slate-100 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
