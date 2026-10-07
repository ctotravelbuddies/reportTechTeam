'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide5Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const members = [
    {
      name: 'Anggara Jeinar M',
      role: 'Chief Technology Officer (Lead)',
      desc: 'Arsitektur sistem, strategi teknis, evaluasi mitra vendor, rilis, dan penanganan insiden.',
      alloc: '65% Proyek / 35% BAU & Insiden',
      projectPct: 65,
    },
    {
      name: 'Adrian Rivaldy',
      role: 'Sr. Fullstack Developer',
      desc: 'Lead integrasi Hotel WebBeds, arsitektur backend, mentoring kode, dan Lead modul KAI.',
      alloc: '80% Proyek / 20% Maintenance',
      projectPct: 80,
    },
    {
      name: 'Setra Nugraha',
      role: 'Fullstack Developer',
      desc: 'Lead Payment DOKU, backend Flight B2C, integrasi CMS & database, dan Lead modul KAI.',
      alloc: '80% Proyek / 20% Maintenance',
      projectPct: 80,
    },
    {
      name: 'Luthfy',
      role: 'Mobile Engineer (Flutter)',
      desc: 'Pengembangan Flutter Android & iOS seluruh lini (Flight, Hotel, Payment, KAI).',
      alloc: '80% Proyek / 20% Store & Support',
      projectPct: 80,
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Sumber Daya & Kapasitas"
        title="Technology Team Structure & Real Capacity"
        subtitle="Analisis Kapasitas 4 Personil Tanpa Redundansi"
        rightNote="Total 4 Orang"
      />

      {/* 4 Member Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3 shrink-0">
        {members.map((m, idx) => {
          const isSelected = selectedMember === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedMember(isSelected ? null : idx)}
              className={`slide-card p-4 flex flex-col justify-between cursor-pointer border-t-4 transition-all ${
                isSelected
                  ? 'border-t-[#0066d6] ring-2 ring-[#0066d6] shadow-md bg-blue-50/20'
                  : 'border-t-[#0066d6] hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate">{m.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                    {idx === 0 ? 'LEAD' : idx === 3 ? 'MOBILE' : 'DEV'}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#0066d6] block mb-1.5">{m.role}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>{m.alloc}</span>
                <span className="text-[#0066d6] text-[10px] font-bold">{isSelected ? '✓' : ''}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Capacity & Net Output Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0 mb-3 items-stretch">
        {/* Capacity Bar Charts */}
        <div className="slide-card p-4 lg:col-span-8 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-xs">Distribusi Kapasitas per Anggota Tim</span>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2 rounded bg-[#0066d6]"></span> Fitur Baru</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2 rounded bg-slate-400"></span> Operasional & Bugfix (20-35%)</span>
            </div>
          </div>

          <div className="space-y-3">
            {members.map((m, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span className="text-slate-900 font-semibold">{m.name}</span>
                  <span className="text-slate-500">{m.alloc}</span>
                </div>
                <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden flex border border-slate-200">
                  <div className="bg-[#0066d6] h-full" style={{ width: `${m.projectPct}%` }}></div>
                  <div className="bg-slate-300 h-full" style={{ width: `${100 - m.projectPct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Net Output Box */}
        <div className="slide-card p-4 lg:col-span-4 flex flex-col justify-between border-l-4 border-l-[#0066d6]">
          <div>
            <span className="text-[10px] font-bold text-[#0066d6] uppercase tracking-wider block">Output Bersih Tim</span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">~3 Developer Efektif</span>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Dari 4 orang total tim, setara <strong>1 developer penuh</strong> terserap setiap hari untuk menjaga stabilitas sistem live, bug fixing, dan respons insiden harian (BAU).
            </p>
          </div>
          <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-200 text-xs text-slate-700 mt-2">
            💡 <strong>Kaidah Eksekutif:</strong> Rencana kerja harus selalu menyisakan 20% buffer agar operasional live tidak terabaikan.
          </div>
        </div>
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-2.5 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-600">
          Catatan: Tim beroperasi dengan <em>zero redundancy</em> — tidak ada personel cadangan jika terjadi bottleneck.
        </span>
        <span className="text-[#0066d6] font-bold">High Efficiency Model</span>
      </div>
    </div>
  );
}
