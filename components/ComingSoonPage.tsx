'use client';

import React from 'react';

interface ComingSoonPageProps {
  onUnlockSlides?: () => void;
}

export default function ComingSoonPage({ onUnlockSlides }: ComingSoonPageProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white flex flex-col items-center justify-center p-6 select-none">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-[#0066d6]/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Official Logo */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <img
          src="/travelbuddies-logo.webp"
          alt="Travel Buddies Logo"
          className="h-9 sm:h-12 w-auto object-contain cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
          onClick={onUnlockSlides}
          title="Travel Buddies"
        />
      </div>

      {/* Hanya Kalimat yang Diinginkan User */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
          dah kelar... tunggu abis Q4 selesai ya
        </h1>
      </div>
    </div>
  );
}
