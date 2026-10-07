'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide4Roadmap() {
  const [highlightMonth, setHighlightMonth] = useState<number | null>(null);

  const months = [
    { id: 1, name: 'SEP 2026' },
    { id: 2, name: 'OCT 2026' },
    { id: 3, name: 'NOV 2026' },
    { id: 4, name: 'DEC 2026' },
    { id: 5, name: 'JAN 2027' },
  ];

  const rows = [
    {
      name: '1. Flight Agent (B2B)',
      sub: 'Validasi live price ATA & rilis agent',
      m1: { w: '70%', text: 'Mid-Sep (Live)' },
      m2: null,
      m3: null,
      m4: null,
      m5: null,
    },
    {
      name: '2. Flight B2C (Mobile/Web)',
      sub: 'Pemisahan logic tarif & update app',
      m1: { w: '100%', text: 'End-Sep (Rilis)' },
      m2: null,
      m3: null,
      m4: null,
      m5: null,
    },
    {
      name: '3. Hotel WebBeds',
      sub: 'Lead: Adrian (~1.5 Bln integrasi)',
      m1: { w: '55%', text: 'Prep Doc', isPrep: true },
      m2: { w: '100%', text: 'Discovery & Dev' },
      m3: { w: '85%', text: 'UAT Mid/End Nov' },
      m4: null,
      m5: null,
    },
    {
      name: '4. DOKU Payment',
      sub: 'Lead: Setra (Secondary PG backup)',
      m1: { w: '45%', text: 'Sandbox', isPrep: true },
      m2: { w: '100%', text: 'Integration & Callback' },
      m3: { w: '75%', text: 'Go-Live Nov' },
      m4: null,
      m5: null,
    },
    {
      name: '5. KAI Train API',
      sub: 'Joint Lead: Adrian & Setra',
      m1: { w: '100%', text: 'Riset Mitra', isPrep: true },
      m2: { w: '100%', text: 'Pilih Maks Okt!', isHighlight: true },
      m3: { w: '50%', text: 'Start Dev' },
      m4: { w: '100%', text: 'Full Dev KAI' },
      m5: { w: '100%', text: 'Live Jan 2027' },
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Master Visual Schedule"
        title="Project Gantt Roadmap (Sep 2026 – Jan 2027)"
        subtitle="Visual Jadwal Pelaksanaan 5 Inisiatif Utama"
        rightNote="Timeline 5 Bulan"
      />

      {/* Interactive Filter Pills */}
      <div className="flex items-center gap-2 mb-2 shrink-0">
        <span className="text-xs font-bold text-slate-500">Sorot Bulan:</span>
        <button
          onClick={() => setHighlightMonth(null)}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
            highlightMonth === null
              ? 'bg-[#0066d6] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Semua Bulan
        </button>
        {months.map((m) => (
          <button
            key={m.id}
            onClick={() => setHighlightMonth(highlightMonth === m.id ? null : m.id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
              highlightMonth === m.id
                ? 'bg-[#0066d6] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Gantt Container */}
      <div className="slide-card p-4 flex-1 min-h-0 mb-3 flex flex-col justify-between overflow-x-auto">
        {/* Month Columns Header */}
        <div className="grid grid-cols-12 gap-2 text-xs font-bold text-slate-500 uppercase pb-2.5 border-b border-slate-200 text-center shrink-0">
          <div className="col-span-3 text-left pl-2 text-slate-900 font-extrabold">Inisiatif Proyek</div>
          <div className={`col-span-2 rounded py-0.5 ${highlightMonth === 1 ? 'bg-blue-100/60 font-black text-[#0066d6]' : ''}`}>SEP 2026</div>
          <div className={`col-span-2 rounded py-0.5 ${highlightMonth === 2 ? 'bg-blue-100/60 font-black text-[#0066d6]' : ''}`}>OCT 2026</div>
          <div className={`col-span-2 rounded py-0.5 ${highlightMonth === 3 ? 'bg-blue-100/60 font-black text-[#0066d6]' : ''}`}>NOV 2026</div>
          <div className={`col-span-2 rounded py-0.5 ${highlightMonth === 4 ? 'bg-blue-100/60 font-black text-[#0066d6]' : ''}`}>DEC 2026</div>
          <div className={`col-span-1 rounded py-0.5 ${highlightMonth === 5 ? 'bg-blue-100/60 font-black text-[#0066d6]' : ''}`}>JAN '27</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-around py-1">
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 items-center py-2 text-xs">
              <div className="col-span-3 pl-2">
                <span className="font-bold text-slate-900 block truncate">{row.name}</span>
                <span className="text-[11px] text-slate-500 block truncate">{row.sub}</span>
              </div>

              {/* Month 1: Sep */}
              <div className={`col-span-2 flex items-center justify-center p-1 rounded ${highlightMonth === 1 ? 'bg-blue-50/50' : ''}`}>
                {row.m1 && (
                  <div
                    style={{ width: row.m1.w }}
                    className={`h-6 rounded-md flex items-center justify-center text-[10px] font-bold transition ${
                      row.m1.isPrep
                        ? 'border border-slate-300 text-slate-700 bg-slate-100'
                        : 'bg-[#0066d6] text-white shadow-sm'
                    }`}
                  >
                    {row.m1.text}
                  </div>
                )}
              </div>

              {/* Month 2: Oct */}
              <div className={`col-span-2 flex items-center justify-center p-1 rounded ${highlightMonth === 2 ? 'bg-blue-50/50' : ''}`}>
                {row.m2 ? (
                  <div
                    style={{ width: row.m2.w }}
                    className={`h-6 rounded-md flex items-center justify-center text-[10px] font-bold transition ${
                      row.m2.isHighlight
                        ? 'border-2 border-[#0066d6] text-[#0066d6] bg-blue-50 font-black'
                        : 'bg-[#0052b3] text-white shadow-sm'
                    }`}
                  >
                    {row.m2.text}
                  </div>
                ) : (
                  <div className="w-full bg-slate-100/60 h-6 rounded-md"></div>
                )}
              </div>

              {/* Month 3: Nov */}
              <div className={`col-span-2 flex items-center justify-center p-1 rounded ${highlightMonth === 3 ? 'bg-blue-50/50' : ''}`}>
                {row.m3 ? (
                  <div
                    style={{ width: row.m3.w }}
                    className="h-6 rounded-md flex items-center justify-center text-[10px] font-bold bg-[#0066d6] text-white shadow-sm"
                  >
                    {row.m3.text}
                  </div>
                ) : (
                  <div className="w-full bg-slate-100/60 h-6 rounded-md"></div>
                )}
              </div>

              {/* Month 4: Dec */}
              <div className={`col-span-2 flex items-center justify-center p-1 rounded ${highlightMonth === 4 ? 'bg-blue-50/50' : ''}`}>
                {row.m4 ? (
                  <div
                    style={{ width: row.m4.w }}
                    className="h-6 rounded-md flex items-center justify-center text-[10px] font-bold bg-[#0052b3] text-white shadow-sm"
                  >
                    {row.m4.text}
                  </div>
                ) : (
                  <div className="w-full bg-slate-100/60 h-6 rounded-md"></div>
                )}
              </div>

              {/* Month 5: Jan */}
              <div className={`col-span-1 flex items-center justify-center p-1 rounded ${highlightMonth === 5 ? 'bg-blue-50/50' : ''}`}>
                {row.m5 ? (
                  <div
                    style={{ width: row.m5.w }}
                    className="h-6 rounded-md flex items-center justify-center text-[10px] font-black bg-[#0066d6] text-white shadow-sm"
                  >
                    {row.m5.text}
                  </div>
                ) : (
                  <div className="w-full bg-slate-100/60 h-6 rounded-md"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-3 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          <strong>Poin Kritis:</strong> Beban kerja puncak terjadi di Oktober (paralel WebBeds & DOKU). Keputusan mitra KAI wajib dikunci Oktober agar rilis Januari aman.
        </span>
        <div className="flex items-center gap-3 text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-[#0066d6]"></span> Dev / UAT</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded border border-slate-300 bg-slate-100"></span> Persiapan / Dokumen</span>
        </div>
      </div>
    </div>
  );
}
