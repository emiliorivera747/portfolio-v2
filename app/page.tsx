import type { Metadata } from "next";
import HomePage from "@/features/home/components/HomePage";

export const metadata: Metadata = {
  title: `Emilio's Portfolio`,
  description:
    "Emilio is a Full Stack Developer specializing in React, Node.js, and TypeScript.",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        hello
      </footer>
    </main>
  );
}
