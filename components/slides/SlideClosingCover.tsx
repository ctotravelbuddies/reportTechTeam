'use client';

import React from 'react';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

interface SlideClosingCoverProps {
  onNext?: () => void;
  goToSlide?: (idx: number) => void;
}

export default function SlideClosingCover({ goToSlide }: SlideClosingCoverProps) {
  const handleRestart = () => {
    if (goToSlide) {
      goToSlide(0);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-center py-1 sm:py-3 px-2 sm:px-[4%] md:px-[6%] min-h-0 slide-fade-in">
      <div className="relative w-full h-full min-h-[460px] sm:min-h-0 max-h-[720px] rounded-2xl overflow-hidden shadow-xl border border-sky-200 bg-[#2bace3] flex items-center justify-center group">
        {/* Full Closing Cover Image */}
        <img
          src="/closing-cover.png"
          alt="Travel Buddies - Thank You Closing Cover"
          className="w-full h-full object-contain select-none pointer-events-none"
        />

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-6 z-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold tracking-wider uppercase border border-white/30 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Presentasi Selesai • Sesi Diskusi &amp; Tanya Jawab</span>
          </div>
        </div>

        {/* Bottom Floating Action: Kembali ke Awal */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 z-20">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 text-white font-bold bg-white/25 hover:bg-white/40 active:scale-95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 shadow-md text-xs sm:text-sm transition-all cursor-pointer"
            title="Kembali ke Slide Cover Utama"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kembali ke Awal</span>
          </button>
        </div>
      </div>
    </div>
  );
}
