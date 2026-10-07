'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  Plane,
  Target,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function Slide1Overview() {
  const pillars = [
    {
      id: 1,
      title: 'Tiket Pesawat',
      tag: 'Airline Ticketing (B2B & B2C)',
      status: 'Testing & Rekonsiliasi',
      statusBadgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      statusDotClass: 'bg-amber-500',
      icon: Plane,
      points: [
        'Mesin booking tiket untuk Agent Portal & Mobile Apps selesai dibuat.',
        'Fokus saat ini: Uji akurasi harga live maskapai & pencocokan pembayaran otomatis tanpa selisih.',
      ],
      impact: 'Nol Selisih Transaksi',
    },
    {
      id: 2,
      title: 'Distribusi Leads Termonitor',
      tag: 'Operasional Private Trip',
      status: 'Selesai & Live',
      statusBadgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      statusDotClass: 'bg-emerald-500',
      icon: Target,
      points: [
        'Prospek tamu Private Trip dialokasikan secara terstruktur dan termonitor ke Travel Consultant.',
        'Respon ke pelanggan terpantau rapi, penugasan terkendali, dan riwayat follow-up tercatat penuh.',
      ],
      impact: 'Alur Kerja Terkontrol & Terukur',
    },
    {
      id: 3,
      title: 'Ekspansi Pengembangan CMS',
      tag: 'Internal Tools & RBAC',
      status: 'Rilis Bertahap (Live)',
      statusBadgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
      statusDotClass: 'bg-sky-500',
      icon: ShieldCheck,
      points: [
        'Ruang kerja digital untuk tim Desain, Operasional, Business Trip, dan Partner Leads.',
        'Data terlindungi dengan sistem Role-Based Access Control (RBAC): setiap divisi hanya membuka data miliknya.',
      ],
      impact: 'Keamanan Data & Kontrol Rapi',
    },
    {
      id: 4,
      title: 'Pantau Bisnis Real-Time',
      tag: 'Dashboard & Reporting',
      status: 'Selesai & Aktif',
      statusBadgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      statusDotClass: 'bg-emerald-500',
      icon: LayoutDashboard,
      points: [
        'Dashboard analitik live untuk memonitor performa Business Trip dan kategori trip terlaris.',
        'Pelacakan efektivitas pemakaian voucher promo agar keputusan bisnis cepat dan tepat sasaran.',
      ],
      impact: 'Keputusan Cepat Berbasis Data',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-6 md:px-[7.5%] min-h-0 slide-fade-in">
      <SlideHeader
        badge="Executive Overview"
        title="Ringkasan Capaian Tim Teknologi (Q3)"
        subtitle="Periode Kuartal 3 (Hingga Oktober 2026)"
      />

      {/* 4 Kartu Infografis Terbuka Bersih (Grid 2x2 yang Luas di Desktop & Scroll Nyaman di Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 flex-1 min-h-0 mb-3 items-stretch">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="slide-card p-3.5 sm:p-5 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-sm hover:shadow-md transition-all"
            >
              <div>
                {/* Header Kartu: Judul + Status Dev Simple & Responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 pb-2.5 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066d6] shrink-0 shadow-2xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-[11px] sm:text-xs font-semibold text-[#0066d6] block mt-0.5">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Status Development: Simple, Clean & Distinct Colors */}
                  <div className="shrink-0 self-start sm:self-auto">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border shadow-2xs ${item.statusBadgeClass}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${item.statusDotClass}`}></span>
                      Status: <strong className="font-extrabold">{item.status}</strong>
                    </span>
                  </div>
                </div>

                {/* Poin Penjelasan yang Mudah Dipahami */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dampak Hasil di Bagian Bawah Kartu */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold">
                  Manfaat: <strong className="text-slate-800">{item.impact}</strong>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
