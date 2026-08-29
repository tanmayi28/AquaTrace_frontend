"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StatusIndicator } from "../common/StatusIndicator";
import { Shield, ArrowRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Center: Navigation Links (Desktop) */}
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
        <div className="flex items-center gap-3">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-mono-tech font-bold text-xs px-3.5 sm:px-4 py-2 rounded shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02]"
          >
            <span className="hidden xs:inline">ENTER OPERATIONS</span>
            <span className="xs:hidden">OPERATIONS</span>
            <ArrowRight size={14} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 bg-[#0D1527] border border-[#16263D] rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14] border-b border-[#16263D] px-4 pt-3 pb-5 font-mono-tech space-y-3">
          <div className="flex items-center justify-between border-b border-[#16263D] pb-2">
            <StatusIndicator
              status="operational"
              label="SYSTEM OPERATIONAL"
              sublabel="FEEDS CONNECTED"
              size="sm"
            />
          </div>

          <div className="flex flex-col space-y-2 text-xs pt-1">
            <Link
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded font-medium text-left"
            >
              OVERVIEW
            </Link>
            <div className="px-3 py-2 text-slate-400 flex items-center justify-between border border-[#16263D] rounded bg-[#0D1527]">
              <span>AIS INTELLIGENCE</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#070B14] text-slate-500 rounded">
                PAGE 2 STUB
              </span>
            </div>
            <div className="px-3 py-2 text-slate-400 flex items-center justify-between border border-[#16263D] rounded bg-[#0D1527]">
              <span>SATELLITE ANALYSIS</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#070B14] text-slate-500 rounded">
                PAGE 3 STUB
              </span>
            </div>
            <div className="px-3 py-2 text-slate-400 flex items-center justify-between border border-[#16263D] rounded bg-[#0D1527]">
              <span>INCIDENTS</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#070B14] text-slate-500 rounded">
                PAGE 4 STUB
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
