'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  LayoutDashboard,
  Briefcase,
  Layers,
  Percent,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function Slide6ReportingDashboard() {
  const dashboards = [
    {
      id: 1,
      title: 'Dashboard Bisnis Trip',
      category: 'Corporate & Revenue Tracking',
      icon: Briefcase,
      badge: 'Corporate Module',
      points: [
        'Memantau volume order, status persetujuan Finance, dan pemetaan revenue riil korporat.',
        'Visibilitas jadwal keberangkatan, rincian termin pembayaran (invoicing), dan performa per klien.',
      ],
      metrics: ['Volume Order Bisnis', 'Approval Status', 'Mapping Revenue Riil'],
      impact: 'Transparansi Finansial Korporat',
    },
    {
      id: 2,
      title: 'Dashboard Kategori Trip',
      category: 'Trip Performance & Okupansi',
      icon: Layers,
      badge: 'Category Analytics',
      points: [
        'Komparasi performa kontribusi trip: Open Trip, Private Trip, dan Business Trip.',
        'Monitoring tingkat keterisian peserta (okupansi kuota), rute terlaris, dan tren musiman.',
      ],
      metrics: ['Rasio Okupansi Kuota', 'Top Destinasi', 'Pertumbuhan Kategori'],
      impact: 'Optimalisasi Kuota & Rute Trip',
    },
    {
      id: 3,
      title: 'Dashboard Penggunaan Promo',
      category: 'Voucher & Marketing Impact',
      icon: Percent,
      badge: 'Campaign ROI',
      points: [
        'Tracking utilisasi kode promo dan voucher diskon yang digunakan pelanggan di web & app.',
        'Evaluasi efektivitas kampanye promosi terhadap lonjakan transaksi vs margin keuntungan.',
      ],
      metrics: ['Frekuensi Klaim Voucher', 'Conversion Rate', 'Kontrol Budget Promo'],
      impact: 'Efektivitas Budget Marketing Terukur',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[6%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Reporting & Analytics"
        title="Dashboard Reporting di CMS Travel Buddies"
        subtitle="Sentralisasi Pelaporan Bisnis Trip, Kategori Perjalanan, dan Penggunaan Promo"
        rightNote="Akses General di CMS"
      />

      {/* 1. Header Banner: Akses General di CMS */}
      <div className="slide-card p-3 sm:p-3.5 mb-3 border-l-4 border-l-[#0066d6] shadow-xs shrink-0 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
            <LayoutDashboard className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
              Seluruh Reporting Dapat Diakses Secara General di CMS
            </h4>
            <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
              Menghilangkan rekap data terpisah; manajemen dan divisi operasional memperoleh visibilitas data riil langsung dari satu antarmuka terpusat.
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
          Akses General • Realtime Data
        </span>
      </div>

      {/* 2. Grid 3 Dashboard Utama (Desktop: 3 Kolom Sejajar, Mobile: Stack Rapi) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 flex-1 min-h-0 mb-3 items-stretch">
        {dashboards.map((dash) => {
          const Icon = dash.icon;
          return (
            <div
              key={dash.id}
              className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Header Kartu Dashboard */}
                <div className="flex items-start justify-between pb-2.5 mb-2.5 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                        {dash.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                        {dash.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0 shadow-2xs">
                    {dash.badge}
                  </span>
                </div>

                {/* 2 Poin Summarize */}
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed mb-3">
                  {dash.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066d6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Indikator Metrik Kunci */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Fokus Metrik Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dash.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dampak Bisnis di Bawah */}
              <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>
                  Hasil: <strong className="text-slate-800">{dash.impact}</strong>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Kesimpulan di Footer */}
      <div className="slide-subcard p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs shrink-0 border border-slate-200">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-[#0066d6] shrink-0" />
          <span className="font-bold text-slate-900">Nilai Strategis:</span>
          <span>
            Sentralisasi reporting di CMS menghadirkan Single Source of Truth bagi manajemen untuk mengevaluasi kesehatan operasional dan laju bisnis secara akurat dan transparan.
          </span>
        </div>
        <span className="text-[#0066d6] font-extrabold hidden sm:inline shrink-0">
          Akurat &amp; Siap Dipantau ✓
        </span>
      </div>
    </div>
  );
}
