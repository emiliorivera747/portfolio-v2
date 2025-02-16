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
      {/* <div className="h-screen w-screen bg-black text-white flex items-center justify-center">Hello</div> */}
    </main>
  );
}
