import React from "react";
import Link from "next/link";
import { StatusIndicator } from "../common/StatusIndicator";
import { Shield, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B14]/90 backdrop-blur-md border-b border-[#16263D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Branding & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-9 w-9 bg-[#0D1527] border border-cyan-500/40 rounded shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <Shield size={18} className="text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-slate-100 text-lg">
                AQUATRACE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest -mt-0.5">
              MARITIME INTELLIGENCE SYSTEM
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Styled as active operational items) */}
        <nav className="hidden md:flex items-center gap-1 font-mono-tech text-xs">
          <Link
            href="#overview"
            className="px-3 py-1.5 text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded font-medium transition-colors"
          >
            OVERVIEW
          </Link>
          
          <button
            type="button"
            title="Module coming in Page 2"
            className="px-3 py-1.5 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-default opacity-80"
          >
            AIS INTELLIGENCE
            <span className="text-[9px] px-1 py-0.2 bg-[#0D1527] border border-[#16263D] text-slate-500 rounded">
              STUB
            </span>
          </button>

          <button
            type="button"
            title="Module coming in Page 3"
            className="px-3 py-1.5 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-default opacity-80"
          >
            SATELLITE ANALYSIS
            <span className="text-[9px] px-1 py-0.2 bg-[#0D1527] border border-[#16263D] text-slate-500 rounded">
              STUB
            </span>
          </button>

          <button
            type="button"
            title="Module coming in Page 4"
            className="px-3 py-1.5 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-default opacity-80"
          >
            INCIDENTS
            <span className="text-[9px] px-1 py-0.2 bg-[#0D1527] border border-[#16263D] text-slate-500 rounded">
              STUB
            </span>
          </button>
        </nav>

        {/* Right: Status Indicator & Primary Action */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block border-r border-[#16263D] pr-4 py-1">
            <StatusIndicator
              status="operational"
              label="SYSTEM OPERATIONAL"
              sublabel="FEEDS CONNECTED"
              size="sm"
            />
          </div>

          <a
            href="#visual-demo"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-mono-tech font-bold text-xs px-4 py-2 rounded shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02]"
          >
            <span>ENTER OPERATIONS</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
};
