'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

type MonthKey = 'sep' | 'oct' | 'nov' | 'dec' | 'jan';

export default function Slide8Manpower() {
  const [selectedMonth, setSelectedMonth] = useState<MonthKey>('sep');

  const allocationData: Record<
    MonthKey,
    {
      title: string;
      rows: {
        name: string;
        flightAgent: string;
        flightB2C: string;
        webbeds: string;
        doku: string;
        kai: string;
        remaining: string;
      }[];
    }
  > = {
    sep: {
      title: 'September 2026 — Finish Flight & Prepare Dependencies',
      rows: [
        { name: 'Anggara (CTO)', flightAgent: '15%', flightB2C: '15%', webbeds: '10%', doku: '10%', kai: '10%', remaining: '40% (Arch & Vendor)' },
        { name: 'Adrian (Sr. Fullstack)', flightAgent: '40%', flightB2C: '20%', webbeds: '20%', doku: '10%', kai: '10%', remaining: '— (Full Dev)' },
        { name: 'Setra (Fullstack)', flightAgent: '20%', flightB2C: '35%', webbeds: '20%', doku: '15%', kai: '10%', remaining: '— (Full Dev)' },
        { name: 'Luthfy (Mobile)', flightAgent: '5%', flightB2C: '60%', webbeds: '10%', doku: '5%', kai: '5%', remaining: '15% (Mobile Support)' },
      ],
    },
    oct: {
      title: 'October 2026 — Parallel Hotel & Payment Integration',
      rows: [
        { name: 'Anggara (CTO)', flightAgent: '—', flightB2C: '—', webbeds: '20%', doku: '20%', kai: '15%', remaining: '45% (Arch / Maint)' },
        { name: 'Adrian (Sr. Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '50%', doku: '15%', kai: '15%', remaining: '20% (Maintenance)' },
        { name: 'Setra (Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '15%', doku: '50%', kai: '15%', remaining: '20% (Maintenance)' },
        { name: 'Luthfy (Mobile)', flightAgent: '—', flightB2C: '—', webbeds: '25%', doku: '15%', kai: '5%', remaining: '55% (Mobile Support)' },
      ],
    },
    nov: {
      title: 'November 2026 — Stabilization & KAI Kickoff',
      rows: [
        { name: 'Anggara (CTO)', flightAgent: '—', flightB2C: '—', webbeds: '15%', doku: '15%', kai: '25%', remaining: '45% (UAT / Arch)' },
        { name: 'Adrian (Sr. Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '30%', doku: '10%', kai: '45%', remaining: '15% (Maintenance)' },
        { name: 'Setra (Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '20%', doku: '25%', kai: '40%', remaining: '15% (Maintenance)' },
        { name: 'Luthfy (Mobile)', flightAgent: '—', flightB2C: '—', webbeds: '25%', doku: '20%', kai: '20%', remaining: '35% (Mobile Support)' },
      ],
    },
    dec: {
      title: 'December 2026 — Full KAI Integration Focus',
      rows: [
        { name: 'Anggara (CTO)', flightAgent: '—', flightB2C: '—', webbeds: '10%', doku: '10%', kai: '30%', remaining: '50% (Maint / Gov)' },
        { name: 'Adrian (Sr. Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '7.5%', doku: '7.5%', kai: '60%', remaining: '25% (Maintenance)' },
        { name: 'Setra (Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '10%', doku: '10%', kai: '55%', remaining: '25% (Maintenance)' },
        { name: 'Luthfy (Mobile)', flightAgent: '—', flightB2C: '—', webbeds: '7.5%', doku: '7.5%', kai: '50%', remaining: '35% (Mobile Maint)' },
      ],
    },
    jan: {
      title: 'January 2027 — KAI UAT, Bug Fixing & Production Go-Live',
      rows: [
        { name: 'Anggara (CTO)', flightAgent: '—', flightB2C: '—', webbeds: '10%', doku: '10%', kai: '30%', remaining: '50% (Maintenance / BAU)' },
        { name: 'Adrian (Sr. Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '7.5%', doku: '7.5%', kai: '50%', remaining: '35% (Maintenance)' },
        { name: 'Setra (Fullstack)', flightAgent: '—', flightB2C: '—', webbeds: '10%', doku: '10%', kai: '45%', remaining: '35% (Maintenance)' },
        { name: 'Luthfy (Mobile)', flightAgent: '—', flightB2C: '—', webbeds: '7.5%', doku: '7.5%', kai: '45%', remaining: '40% (Maintenance)' },
      ],
    },
  };

  const current = allocationData[selectedMonth];
  const months: { key: MonthKey; label: string }[] = [
    { key: 'sep', label: 'SEP 2026' },
    { key: 'oct', label: 'OCT 2026' },
    { key: 'nov', label: 'NOV 2026' },
    { key: 'dec', label: 'DEC 2026' },
    { key: 'jan', label: 'JAN 2027' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Alokasi Bulanan"
        title="Indicative Manpower Allocation Heatmap"
        subtitle="Distribusi Estimasi Kapasitas Kerja per Bulan"
        rightNote="Pilih Tab Bulan"
      />

      {/* Month Tabs */}
      <div className="flex items-center gap-2 mb-2.5 shrink-0">
        {months.map((m) => (
          <button
            key={m.key}
            onClick={() => setSelectedMonth(m.key)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedMonth === m.key
                ? 'bg-[#0066d6] text-white shadow-sm'
                : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Allocation Table */}
      <div className="slide-card p-4 mb-3 flex-1 min-h-0 flex flex-col justify-between overflow-x-auto">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-900">{current.title}</span>
          <span className="text-[11px] font-medium text-slate-500">Target Kapasitas per Orang</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px]">
              <th className="p-2.5 pl-3">Team Member</th>
              <th className="p-2.5 text-center">Flight Agent</th>
              <th className="p-2.5 text-center">Flight B2C</th>
              <th className="p-2.5 text-center">Hotel WebBeds</th>
              <th className="p-2.5 text-center">DOKU</th>
              <th className="p-2.5 text-center">KAI Train</th>
              <th className="p-2.5">Reserve / BAU</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {current.rows.map((r, idx) => (
              <tr key={idx} className="hover:bg-slate-50/70 transition">
                <td className="p-2.5 pl-3 font-bold text-slate-900 whitespace-nowrap">{r.name}</td>
                <td className={`p-2.5 text-center ${r.flightAgent !== '—' ? 'text-[#0066d6] font-bold' : 'text-slate-400'}`}>{r.flightAgent}</td>
                <td className={`p-2.5 text-center ${r.flightB2C !== '—' ? 'text-[#0066d6] font-bold' : 'text-slate-400'}`}>{r.flightB2C}</td>
                <td className={`p-2.5 text-center ${r.webbeds !== '—' ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>{r.webbeds}</td>
                <td className={`p-2.5 text-center ${r.doku !== '—' ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>{r.doku}</td>
                <td className={`p-2.5 text-center ${r.kai !== '—' ? 'text-[#0066d6] font-bold' : 'text-slate-400'}`}>{r.kai}</td>
                <td className="p-2.5 text-slate-500 text-[11px]">{r.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-2.5 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-600">
          * Catatan: Persentase adalah <em>planning baseline</em>. Sisa alokasi otomatis dialokasikan untuk maintenance sistem live harian & penanganan insiden.
        </span>
        <span className="text-[#0066d6] font-bold">Baseline Planning</span>
      </div>
    </div>
  );
}
