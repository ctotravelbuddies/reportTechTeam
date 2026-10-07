'use client';

import React from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Plane,
  Building2,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Globe2,
} from 'lucide-react';

interface SlideSectionProps {
  onNext?: () => void;
  goToSlide?: (idx: number) => void;
}

export default function SlideSectionNextStrategy({ onNext }: SlideSectionProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-center py-2 sm:py-3 px-2 sm:px-4 md:px-[6%] min-h-0 slide-fade-in relative">
      <div className="relative w-full h-full min-h-[460px] sm:min-h-0 max-h-[720px] rounded-2xl overflow-hidden shadow-2xl bg-[#25a7dd] border border-white/30 flex flex-col justify-between text-white select-none">
        {/* Subtle Travel Background Pattern & SVG Illustrations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World Grid Latitude / Longitude lines */}
            <circle cx="600" cy="350" r="280" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="600" cy="350" r="190" stroke="white" strokeWidth="0.8" strokeDasharray="4 4" />
            <ellipse cx="600" cy="350" rx="280" ry="110" stroke="white" strokeWidth="0.8" />
            <ellipse cx="600" cy="350" rx="130" ry="280" stroke="white" strokeWidth="0.8" />
            <line x1="320" y1="350" x2="880" y2="350" stroke="white" strokeWidth="1" />
            <line x1="600" y1="70" x2="600" y2="630" stroke="white" strokeWidth="1" />

            {/* Flight Path 1: Top-Left to Bottom-Right */}
            <path
              d="M100 120 C 350 40, 750 200, 1100 160"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
            {/* Flight Path 2: Curved Arc through Center */}
            <path
              d="M150 580 C 450 480, 750 620, 1050 450"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />

            {/* Decorative Compass Lines in Top Right */}
            <g transform="translate(1000, 120)">
              <circle cx="0" cy="0" r="45" stroke="white" strokeWidth="1" />
              <line x1="0" y1="-55" x2="0" y2="55" stroke="white" strokeWidth="1.5" />
              <line x1="-55" y1="0" x2="55" y2="0" stroke="white" strokeWidth="1.5" />
              <polygon points="0,-45 6,-10 0,0 -6,-10" fill="white" opacity="0.6" />
              <polygon points="0,45 6,10 0,0 -6,10" fill="white" opacity="0.3" />
            </g>

            {/* Subtle Mountains Contour along the bottom */}
            <path
              d="M0 650 L 120 590 L 260 630 L 420 560 L 560 620 L 720 540 L 890 610 L 1040 550 L 1200 640 L 1200 700 L 0 700 Z"
              fill="white"
              opacity="0.06"
            />
          </svg>
        </div>

        {/* Floating Travel Icons (Subtle ambient travel graphics) */}
        <div className="absolute top-10 left-12 text-white/20 pointer-events-none hidden md:block animate-pulse">
          <Plane className="w-12 h-12 -rotate-12" />
        </div>
        <div className="absolute bottom-16 right-16 text-white/20 pointer-events-none hidden md:block">
          <Compass className="w-14 h-14" />
        </div>
        <div className="absolute top-20 right-28 text-white/15 pointer-events-none hidden lg:block">
          <Globe2 className="w-16 h-16" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-8 lg:p-12">
          {/* Top Bar: Brand Pill Badge */}
          <div className="flex justify-between items-center w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-[13px] font-black uppercase tracking-wider border border-white/25 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Travel Buddies Indonesia • Strategic Roadmap
            </div>

            <span className="text-white/90 text-xs sm:text-sm font-extrabold hidden sm:inline tracking-wide bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Rencana Eksekusi • Kuartal 4 (Q4) 2026
            </span>
          </div>

          {/* Center Stage: Logo, NEXT STRATEGY Headline, & Vision */}
          <div className="flex flex-col items-center text-center my-auto max-w-3xl mx-auto py-4 sm:py-6">
            {/* Travel Buddies White Logo */}
            <div className="mb-4 sm:mb-6">
              <img
                src="/travelbuddies-logo.webp"
                alt="Travel Buddies Logo"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Giant NEXT STRATEGY Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-white tracking-tight leading-none mb-3 sm:mb-4 drop-shadow-lg">
              NEXT STRATEGY
            </h1>
          </div>

          {/* Bottom Bar: Action Button to Continue */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-white/20">
            <span className="text-xs sm:text-sm text-white/90 font-semibold text-center sm:text-left">
              Menuju Pembahasan Detail: Tahapan Milestone &amp; Jadwal Eksekusi
            </span>

            <button
              type="button"
              onClick={onNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-black bg-white/20 hover:bg-white/35 active:scale-95 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/40 shadow-md transition-all cursor-pointer text-xs sm:text-sm md:text-base"
            >
              <span>Lanjut ke Roadmap Milestone</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
