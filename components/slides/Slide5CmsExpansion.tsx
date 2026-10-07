'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  ShieldCheck,
  Palette,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Lock,
  LayoutGrid,
} from 'lucide-react';

export default function Slide5CmsExpansion() {
  const modules = [
    {
      id: 1,
      title: 'Role-Based Access Control (RBAC)',
      category: 'Keamanan & Tata Kelola',
      icon: ShieldCheck,
      badge: 'Security Core',
      points: [
        'Hak akses terkunci per divisi: Sales, Desain, Operasional, & Finance.',
        'Meniadakan risiko kebocoran data sensitif antar departemen.',
      ],
      impact: 'Data Terlindungi & Hak Akses Ketat',
    },
    {
      id: 2,
      title: 'Content Production & Design Workflow',
      category: 'Tim Desain & Kreatif',
      icon: Palette,
      badge: 'Production Hub',
      points: [
        'Ruang kerja digital untuk tim Desain kelola aset banner dan konten promo.',
        'Alur persetujuan terpusat sebelum materi dipublikasikan ke publik.',
      ],
      impact: 'Produksi Aset Cepat & Standar',
    },
    {
      id: 3,
      title: 'Integrasi Order Business Trip & Finance',
      category: 'Order Input, Approval, & Revenue Sync',
      icon: Briefcase,
      badge: 'Finance Sync',
      points: [
        'Input order Business Trip tersinkronisasi langsung dengan modul Finance.',
        'Recheck & approval tim Finance menghasilkan pemetaan (mapping) revenue riil.',
      ],
      impact: 'Mapping Revenue Akurat & Kontrol Budget',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[6%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Internal Tools & RBAC"
        title="Ekspansi Pengembangan CMS Internal Travel Buddies"
        subtitle="Ringkasan 3 Modul Ruang Kerja Digital Multi-Divisi dengan Kontrol Akses Terpadu"
        rightNote="Status: Rilis Bertahap (Live)"
      />

      {/* 1. Header Banner: Arsitektur Ekosistem CMS Terpadu */}
      <div className="slide-card p-3 sm:p-3.5 mb-2.5 border-l-4 border-l-[#0066d6] shadow-xs shrink-0 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Satu Ekosistem CMS Terpusat untuk Seluruh Divisi Internal
            </h4>
            <span className="text-xs sm:text-[13px] text-slate-600 font-medium block mt-0.5">
              Menggantikan pencatatan terpisah menjadi satu platform digital dengan proteksi keamanan Role-Based Access Control.
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
          Rilis Bertahap (Aktif Digunakan)
        </span>
      </div>

      {/* 2. Grid 3 Modul Utama (1x3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 flex-1 min-h-0 mb-2.5 items-stretch">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.id}
              className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Header Modul */}
                <div className="flex items-start justify-between pb-2 mb-2 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                        {mod.title}
                      </h3>
                      <span className="text-xs font-bold text-slate-500 block mt-0.5">
                        {mod.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0 shadow-2xs">
                    {mod.badge}
                  </span>
                </div>

                {/* 2 Poin Summarize */}
                <ul className="space-y-2 text-[13px] sm:text-[14.5px] text-slate-700 leading-snug">
                  {mod.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dampak di Bawah */}
              <div className="pt-2 mt-2.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-[13px] text-slate-500">
                <span>
                  Hasil: <strong className="text-slate-900 font-extrabold">{mod.impact}</strong>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Kesimpulan di Footer */}
      <div className="slide-subcard p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm shrink-0 border border-slate-200">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-[#0066d6] shrink-0" />
          <span className="font-extrabold text-slate-900">Nilai Bisnis:</span>
          <span>
            Setiap departemen memiliki modul kerja mandiri tanpa tumpang tindih wewenang, menjaga integritas data dan meningkatkan efisiensi harian.
          </span>
        </div>
        <span className="text-[#0066d6] font-black hidden sm:inline shrink-0">
          Efisien &amp; Terproteksi ✓
        </span>
      </div>
    </div>
  );
}
