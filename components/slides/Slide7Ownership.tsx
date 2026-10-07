'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide7Ownership() {
  const tableRows = [
    {
      project: '1. Flight Agent (B2B)',
      lead: 'Adrian Rivaldy',
      support: 'Setra Nugraha',
      approval: 'Anggara Jeinar M',
    },
    {
      project: '2. Flight B2C (Mobile/Web)',
      lead: 'Luthfy (Mobile) + Setra (BE)',
      support: 'Adrian Rivaldy',
      approval: 'Anggara Jeinar M',
    },
    {
      project: '3. Hotel API WebBeds',
      lead: 'Adrian Rivaldy',
      support: 'Setra + Luthfy',
      approval: 'Anggara Jeinar M',
    },
    {
      project: '4. DOKU Payment',
      lead: 'Setra Nugraha',
      support: 'Adrian + Luthfy',
      approval: 'Anggara Jeinar M',
    },
    {
      project: '5. KAI Train API',
      lead: 'Adrian + Setra (Joint Lead)',
      support: 'Luthfy (Mobile)',
      approval: 'Anggara Jeinar M',
    },
    {
      project: '6. Maintenance & BAU',
      lead: 'Anggara (Oversight)',
      support: 'Seluruh Tim Tech',
      approval: 'Anggara Jeinar M',
    },
  ];

  const principles = [
    {
      title: '1. Hindari Paralel Berlebih',
      desc: 'Tuntaskan Flight sepenuhnya sebelum inisiatif baru dibuka.',
    },
    {
      title: '2. Pisahkan Lead Fullstack',
      desc: 'Adrian (Hotel) & Setra (Payment) bekerja mandiri tanpa bentrok.',
    },
    {
      title: '3. Stabilkan API Contract',
      desc: 'Format API matang lebih awal agar tim Mobile tidak bolak-balik revisi.',
    },
    {
      title: '4. Kunci Mitra KAI Lebih Awal',
      desc: 'Seleksi vendor tuntas Oktober demi mengejar target live Januari.',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Tata Kelola & Akuntabilitas"
        title="Project Ownership Matrix & Planning Principles"
        subtitle="Matriks Tanggung Jawab (RACI) & Kaidah Kerja Tim"
        rightNote="Tata Kelola 4 Orang"
      />

      {/* RACI Table */}
      <div className="slide-card overflow-hidden mb-3.5 shrink-0">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px]">
              <th className="p-3 pl-4">Inisiatif Proyek</th>
              <th className="p-3">Penanggung Jawab (Lead)</th>
              <th className="p-3">Dukungan Tim</th>
              <th className="p-3">Arsitektur & Approval</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {tableRows.map((r, idx) => (
              <tr key={idx} className="hover:bg-slate-50/70 transition">
                <td className="p-2.5 pl-4 font-bold text-slate-900">{r.project}</td>
                <td className="p-2.5 font-semibold text-slate-900">{r.lead}</td>
                <td className="p-2.5 text-slate-600">{r.support}</td>
                <td className="p-2.5 text-[#0066d6] font-bold">{r.approval}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4 Planning Principles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 min-h-0 mb-3 items-stretch">
        {principles.map((pr, idx) => (
          <div key={idx} className="slide-card p-3.5 flex flex-col justify-between border-t-4 border-t-[#0066d6]">
            <div>
              <strong className="text-slate-900 block text-xs mb-1.5">{pr.title}</strong>
              <span className="text-slate-600 text-xs leading-relaxed">{pr.desc}</span>
            </div>
            <div className="text-[10px] text-[#0066d6] font-bold mt-2.5 pt-1.5 border-t border-slate-100">
              Prinsip #{idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-2.5 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          Akuntabilitas tunggal menjamin setiap fitur memiliki pemilik yang jelas dan tidak saling lempar tanggung jawab.
        </span>
        <span className="text-[#0066d6] font-bold">Clear Accountability</span>
      </div>
    </div>
  );
}
