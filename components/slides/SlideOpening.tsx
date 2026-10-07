'use client';

import React from 'react';
import { ArrowRight, Calendar, Users, Sparkles } from 'lucide-react';

interface SlideOpeningProps {
  onNext?: () => void;
  goToSlide?: (idx: number) => void;
}

export default function SlideOpening({ onNext, goToSlide }: SlideOpeningProps) {
  const handleNext = () => {
    if (goToSlide) {
      goToSlide(1);
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-center py-1 sm:py-3 px-2 sm:px-[4%] md:px-[6%] min-h-0 slide-fade-in">
      <div className="relative w-full h-full min-h-[460px] sm:min-h-0 max-h-[720px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 flex flex-col justify-between">
        {/* Background Image: High-res Indonesian travel & mountain panorama */}
        <img
          src="/opening-cover.png"
          alt="Travel Buddies Tech Team Opening"
          className="absolute inset-0 w-full h-full object-cover object-bottom sm:object-center select-none pointer-events-none"
        />

        {/* Content Overlay: Centered in the open sky area between the travelers and above Mount Bromo */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-3.5 sm:p-7 lg:p-10">
          {/* Top Center: Brand Logo & Pill Badge */}
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="/travelbuddies-logo.webp"
              alt="Travel Buddies Logo"
              className="h-8 sm:h-11 md:h-13 w-auto object-contain drop-shadow-lg"
            />
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-black tracking-wider uppercase border border-white/30 shadow-md">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white animate-pulse"></span>
              Travel Buddies Indonesia • Tech &amp; Product Team
            </div>
          </div>

          {/* Upper-Center Title & Narrative (Aligned with the sky, right above Mount Bromo horizon) */}
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl lg:max-w-4xl pt-1.5 sm:pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/40 backdrop-blur-md text-blue-100 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider mb-2.5 border border-white/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              Executive Technology Report • Q3 2026
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-tight tracking-tight drop-shadow-lg mb-2.5 sm:mb-3">
              Laporan Capaian &amp; Inisiatif Tim Teknologi
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-md mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
              Penyelesaian Airline Ticketing B2B &amp; B2C, Distribusi Leads Termonitor, Ekspansi Modul CMS (RBAC), serta Sentralisasi Dashboard Reporting Bisnis.
            </p>

            {/* Meta Information Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 text-xs sm:text-sm md:text-base text-white">
              <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/25 shadow-sm font-semibold">
                <Users className="w-4 h-4 text-white shrink-0" />
                <span>
                  Divisi: <strong className="font-extrabold text-white">Technology &amp; Engineering</strong>
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/25 shadow-sm font-semibold">
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span>
                  Periode: <strong className="font-extrabold text-white">Kuartal 3 (Q3) 2026</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
