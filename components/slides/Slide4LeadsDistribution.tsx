'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  Clock,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Inbox,
  Award,
  ShieldCheck,
  UserCheck,
  Eye,
} from 'lucide-react';

export default function Slide4LeadsDistribution() {
  const steps = [
    { num: '1', title: 'Leads Masuk', sub: 'Pusat Data', icon: Inbox },
    { num: '2', title: 'Penugasan Terkontrol', sub: 'Assignment Terstruktur', icon: UserCheck },
    { num: '3', title: 'Monitoring Respon', sub: 'Pengawasan SLA Live', icon: Clock },
    { num: '4', title: 'Closing & Arsip', sub: 'Riwayat Riil di CMS', icon: Award },
  ];

  const highlights = [
    {
      title: 'Penugasan Terkontrol & Akuntabel',
      icon: ShieldCheck,
      tag: 'Controlled Assignment',
      points: [
        'Setiap leads memiliki penanggung jawab (PIC) yang jelas dan terkendali.',
        'Meniadakan penugasan tumpang tindih atau salah alokasi di tim operasional.',
      ],
      impact: 'Tanggung Jawab Jelas & Terkendali',
    },
    {
      title: 'Monitoring Kecepatan & Progres (SLA)',
      icon: Eye,
      tag: 'Live Monitoring',
      points: [
        'Memantau status respon tiap konsultan secara real-time dari satu dashboard.',
        'Notifikasi pengawasan jika ada leads yang belum di-follow up tepat waktu.',
      ],
      impact: 'Pengawasan Ketat, Nol Leads Tercecer',
    },
    {
      title: 'Kontrol Pipeline & Evaluasi Riil',
      icon: TrendingUp,
      tag: 'Full Visibility',
      points: [
        'Kendali penuh status prospek: Tahap Kontak → Negosiasi → Won / Lost.',
        'Dokumentasi riwayat interaksi dan alasan batal tercatat untuk evaluasi.',
      ],
      impact: 'Keputusan Berbasis Data Teruji',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[6%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Operasional Private Trip"
        title="Distribusi Leads Termonitor & Terkontrol (Leads Management)"
        subtitle="Sistem Pengawasan, Kontrol Penugasan, & Monitoring Progres Konsultan"
        rightNote="Status: Selesai & Live"
      />

      {/* 1. Visual Pipeline Horizontal: Alur Pengawasan & Kontrol */}
      <div className="slide-card p-3 sm:p-4 mb-3 border-l-4 border-l-[#0066d6] shadow-xs shrink-0">
        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 flex-wrap gap-2">
          <span className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
            Alur Pengawasan &amp; Kontrol Leads Terpadu
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Termonitoring &amp; Terkontrol Penuh
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-slate-50 hover:bg-blue-50/50 p-2.5 sm:p-3 rounded-xl border border-slate-200 flex items-center gap-3 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-blue-200 text-[#0066d6] flex items-center justify-center font-black text-sm shrink-0 shadow-2xs">
                  {st.num}
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-extrabold text-slate-900 truncate">
                    {st.title}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 truncate">
                    {st.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Tiga Pilar: Kontrol Penugasan, Live Monitoring, dan Visibilitas Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 flex-1 min-h-0 mb-3 items-stretch">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="slide-card p-3.5 sm:p-4.5 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#0066d6]">{item.tag}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Aktif"></span>
                </div>

                <h3 className="text-sm font-black text-slate-900 mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066d6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>
                  Manfaat: <strong className="text-slate-800">{item.impact}</strong>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Footer Bar Kesimpulan: Fokus Pengawasan & Kendali Mutu */}
      <div className="slide-subcard p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs shrink-0 border border-slate-200">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-[#0066d6] shrink-0" />
          <span className="font-bold text-slate-900">Kendali Manajemen:</span>
          <span>
            Setiap prospek Private Trip kini terkontrol secara terstruktur dan termonitor 100%, menghilangkan risiko leads tercecer dan menjaga akuntabilitas tim.
          </span>
        </div>
        <span className="text-[#0066d6] font-extrabold hidden sm:inline shrink-0">
          Kendali &amp; Visibilitas 100% ✓
        </span>
      </div>
    </div>
  );
}
