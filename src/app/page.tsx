import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
