'use client';

import React from 'react';

export default function Slide12Closing() {
  const team = [
    { name: 'Anggara Jeinar M', role: 'Chief Technology Officer' },
    { name: 'Adrian Rivaldy', role: 'Sr. Fullstack Dev' },
    { name: 'Setra Nugraha', role: 'Fullstack Dev' },
    { name: 'Luthfy', role: 'Mobile Engineer' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between items-center text-center py-4 min-h-0 slide-fade-in">
      <div className="my-auto flex flex-col items-center max-w-3xl">
        <div className="mb-4">
          <img
            src="https://travelbuddies.co.id/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=384&q=75"
            alt="Travel Buddies Logo"
            className="h-10 sm:h-12 w-auto object-contain mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/200x52/0066d6/ffffff?text=Travel+Buddies';
            }}
          />
        </div>

        <span className="text-xs px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066d6] font-bold uppercase tracking-wider mb-3">
          Sesi Diskusi & Tanya Jawab (Q&A)
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
          Terima Kasih
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
          Tim Teknologi berkomitmen menghadirkan platform travel yang andal, scalable, dan memberikan nilai bisnis nyata bagi Travel Buddies.
        </p>

        {/* 4 Team Credits Card */}
        <div className="slide-card p-5 w-full border-t-4 border-t-[#0066d6] shadow-sm">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Travel Buddies Technology Team
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {team.map((t, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 text-xs block truncate">{t.name}</span>
                <span className="text-[11px] text-[#0066d6] font-semibold block truncate mt-0.5">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Prompt */}
      <div className="w-full text-center text-xs text-slate-500 pt-2 shrink-0">
        Silakan sampaikan pertanyaan atau masukan untuk perencanaan langkah berikutnya.
      </div>
    </div>
  );
}
