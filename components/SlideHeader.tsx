'use client';

import React from 'react';

interface SlideHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  rightNote?: string;
}

export default function SlideHeader({ badge, title, subtitle, rightNote }: SlideHeaderProps) {
  return (
    <div className="mb-3.5 pb-2.5 border-b border-slate-200 flex flex-wrap justify-between items-end gap-2 shrink-0">
      <div>
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <img
            src="https://travelbuddies.co.id/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=384&q=75"
            alt="Travel Buddies Logo"
            className="h-6 sm:h-7 w-auto object-contain mr-1.5"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/130x32/0066d6/ffffff?text=Travel+Buddies';
            }}
          />
          <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066d6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
            {badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">{subtitle}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">{title}</h2>
      </div>
      {rightNote && (
        <div className="text-right">
          <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-sm">
            {rightNote}
          </span>
        </div>
      )}
    </div>
  );
}
