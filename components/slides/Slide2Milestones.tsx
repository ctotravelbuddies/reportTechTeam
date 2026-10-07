'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';
import {
  Users2,
  Building2,
  ShieldCheck,
  HeartHandshake,
  Database,
  CheckCircle2,
  Sparkles,
  Calendar,
  Plane,
  Compass,
  ArrowRight,
  Flag,
  Globe2,
  MapPin,
} from 'lucide-react';

export default function Slide2Milestones() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const months = [
    {
      id: 'okt',
      name: 'OKTOBER 2026',
      sub: 'Bulan 1 • Rilis Komersial',
      milestone: 'Launch Affiliate 2.0',
    },
    {
      id: 'nov',
      name: 'NOVEMBER 2026',
      sub: 'Bulan 2 • Ekspansi Global',
      milestone: 'Go-Live Hotel WebBeds',
    },
    {
      id: 'des',
      name: 'DESEMBER 2026',
      sub: 'Bulan 3 • Peak Season Uptime',
      milestone: 'Live Backup Payment DOKU',
    },
  ];

  const milestones = [
    {
      id: 1,
      num: '01',
      title: 'Affiliate Program 2.0',
      category: 'Komersial & Mitra',
      icon: Users2,
      targetBadge: 'Rilis Oktober (Live)',
      deliverable: 'Pelacakan referral unik, otomasi komisi, & analitik performa mitra.',
      barLeft: '0%',
      barWidth: '33.3%',
      barColor: 'bg-emerald-600',
      barLabel: 'Rilis & Go-Live (Oktober)',
      flightIcon: true,
      tag: 'Kanal Mitra Aktif',
    },
    {
      id: 2,
      num: '02',
      title: 'Integrasi Hotel (WebBeds)',
      category: 'Akomodasi Global',
      icon: Building2,
      targetBadge: 'Rilis Akhir November',
      deliverable: 'Koneksi jutaan kamar global, standardisasi room mapping, & kuota live.',
      barLeft: '33.3%',
      barWidth: '33.3%',
      barColor: 'bg-[#0066d6]',
      barLabel: 'Dev, Room Mapping & Go-Live (November)',
      flightIcon: true,
      tag: 'Ekspansi Inventori',
    },
    {
      id: 3,
      num: '03',
      title: 'Backup Payment (DOKU)',
      category: 'Keandalan Transaksi',
      icon: ShieldCheck,
      targetBadge: 'Rilis Desember',
      deliverable: 'Secondary payment gateway untuk jaminan 99.9% uptime checkout liburan.',
      barLeft: '66.6%',
      barWidth: '33.4%',
      barColor: 'bg-[#25a7dd]',
      barLabel: 'Testing Failover & Go-Live (Desember)',
      flightIcon: true,
      tag: 'Ketahanan 99.9%',
    },
    {
      id: 4,
      num: '04',
      title: 'Support Program & Divisi Lain',
      category: 'Dukungan Lintas Divisi',
      icon: HeartHandshake,
      targetBadge: 'Sepanjang Q4',
      barLeft: '0%',
      barWidth: '100%',
      barColor: 'bg-slate-800',
      barLabel: 'Dukungan Operasional Berkelanjutan Seluruh Divisi (Okt – Des)',
      flightIcon: false,
      tag: 'Sinergi Lintas Divisi',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[5%] min-h-0 slide-fade-in relative">
      {/* Inline Keyframes for Travel Smooth Animations */}
      <style jsx>{`
        @keyframes flightGlideRoute {
          0% {
            left: 0%;
            opacity: 0;
            transform: translateY(-50%) rotate(0deg);
          }
          3% {
            opacity: 1;
            transform: translateY(-50%) rotate(2deg);
          }
          45% {
            transform: translateY(calc(-50% - 2px)) rotate(0deg);
          }
          85% {
            opacity: 1;
            transform: translateY(-50%) rotate(1deg);
          }
          92% {
            left: 92%;
            opacity: 0;
            transform: translateY(-50%) rotate(0deg);
          }
          100% {
            left: 0%;
            opacity: 0;
            transform: translateY(-50%) rotate(0deg);
          }
        }
        @keyframes radarPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-flight-glide {
          animation: flightGlideRoute 14s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-radar-pulse {
          animation: radarPulse 3s ease-in-out infinite;
        }
      `}</style>

      <SlideHeader
        badge="Gantt Chart Roadmap • Q4 2026"
        title="Gantt Chart Timeline Milestone Tim Teknologi (Q4 2026)"
        subtitle="Rencana Distribusi Jadwal Eksekusi 4 Inisiatif Utama: Terjadwal Rapi & Mudah Dibaca di Proyektor"
        rightNote="Target Eksekusi Q4 2026"
      />

      {/* Main Gantt Card */}
      <div className="slide-card p-3 sm:p-4 flex-1 min-h-0 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-sm mb-1 relative overflow-hidden">
        {/* Subtle Watermark Travel Compass in Background */}
        <div className="absolute -top-10 -right-10 pointer-events-none opacity-[0.03]">
          <Compass className="w-64 h-64 text-slate-900" />
        </div>

        <div>
          {/* 1. Timeline Months Header: Grid Presisi 3 Kolom yang Selaras dengan Gantt Bar */}
          <div className="grid grid-cols-12 gap-2.5 pb-2 mb-2 border-b border-slate-200 items-center">
            {/* Kolom Kiri: Label Inisiatif (4 Kolom) */}
            <div className="col-span-12 md:col-span-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066d6]"></span>
              <span className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                Inisiatif &amp; Target Q4
              </span>
            </div>

            {/* Kolom Kanan: 3 Kolom Bulan Terpadu (divide-x agar 100% presisi dengan bar) */}
            <div className="hidden md:grid md:col-span-8 grid-cols-3 border border-slate-200 rounded-xl overflow-hidden divide-x divide-slate-200 bg-slate-100/90 shadow-2xs text-center">
              {months.map((m) => (
                <div key={m.id} className="py-1.5 px-2">
                  <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-black text-slate-900">
                    <Calendar className="w-4 h-4 text-[#0066d6]" />
                    <span>{m.name}</span>
                  </div>
                  <span className="text-xs font-black text-[#0066d6] block mt-0.5">
                    {m.milestone}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Slim Flight Trajectory Line (Animasi Pesawat Travel Menghubungkan Okt → Nov → Des) */}
          <div className="hidden md:grid grid-cols-12 gap-2.5 mb-2.5 items-center">
            <div className="col-span-4 flex items-center gap-2 px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-black uppercase tracking-wider text-[#0066d6]">
                Rute Penerbangan Q4
              </span>
            </div>

            {/* Trajectory Track di atas 8 Kolom Timeline */}
            <div className="col-span-8">
              <div className="relative h-6 bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-blue-50/90 rounded-lg border border-blue-200/70 overflow-hidden flex items-center px-4">
                {/* Garis Putus-putus Rute Penerbangan */}
                <div className="w-full border-t-2 border-dashed border-[#0066d6]/35"></div>

                {/* 3 Waypoint Checkpoints (Tepat di Tengah Tiap Kolom Bulan: 16.6%, 50%, 83.3%) */}
                <div className="absolute inset-0 grid grid-cols-3 pointer-events-none items-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200"></span>
                    <span className="text-[10px] font-extrabold text-slate-600">Departure</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0066d6] ring-2 ring-blue-200"></span>
                    <span className="text-[10px] font-extrabold text-slate-600">Cruising</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#25a7dd] ring-2 ring-sky-200"></span>
                    <span className="text-[10px] font-extrabold text-slate-600">Arrival</span>
                  </div>
                </div>

                {/* Pesawat Meluncur Searah Tanpa Menabrak Teks */}
                <div className="absolute top-1/2 -translate-y-1/2 animate-flight-glide flex items-center gap-1 pointer-events-none z-20">
                  <div className="w-5 h-5 rounded-full bg-[#0066d6] text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                    <Plane className="w-3 h-3 -rotate-45" />
                  </div>
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-white text-[#0066d6] border border-blue-200 shadow-2xs whitespace-nowrap">
                    Flight TB-Q4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 4 Swimlane Gantt Rows: Grid Selaras, Terbaca Jelas, & Nyata */}
          <div className="space-y-2 sm:space-y-2.5">
            {milestones.map((m) => {
              const Icon = m.icon;
              const isSelected = activeItem === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setActiveItem(isSelected ? null : m.id)}
                  className={`p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer grid grid-cols-12 gap-2.5 items-center ${isSelected
                      ? 'bg-blue-50/70 border-[#0066d6] ring-2 ring-blue-200 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                    }`}
                >
                  {/* Kolom Kiri (4 Kolom): Informasi Inisiatif */}
                  <div className="col-span-12 md:col-span-4 pr-1">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs font-black text-sm">
                        {m.num}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                            {m.title}
                          </h4>
                          <span className="text-xs font-black px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                            {m.targetBadge}
                          </span>
                        </div>
                        {m.deliverable && (
                          <p className="text-xs sm:text-[13px] text-slate-600 font-semibold leading-snug mt-0.5 line-clamp-1 sm:line-clamp-none">
                            {m.deliverable}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Kolom Kanan (8 Kolom): Visual Timeline Gantt Bar dengan 3 Jalur Presisi */}
                  <div className="col-span-12 md:col-span-8 relative h-10 sm:h-11 flex items-center bg-slate-50 rounded-xl p-1 border border-slate-200/90 overflow-hidden">
                    {/* Garis Vertikal Penanda 3 Bulan (Persis dengan Header di Atas) */}
                    <div className="absolute inset-0 grid grid-cols-3 pointer-events-none divide-x divide-slate-200/80">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    {/* Gantt Bar Utama */}
                    <div
                      style={{
                        marginLeft: m.barLeft,
                        width: m.barWidth,
                      }}
                      className={`relative z-10 h-8 sm:h-8.5 ${m.barColor} rounded-lg shadow-xs flex items-center justify-between px-3 text-white transition-all`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {m.flightIcon ? (
                          <Plane className="w-3.5 h-3.5 text-white shrink-0 -rotate-45" />
                        ) : (
                          <HeartHandshake className="w-3.5 h-3.5 text-white shrink-0" />
                        )}
                        <span className="text-xs sm:text-[13px] font-black tracking-wide truncate">
                          {m.barLabel}
                        </span>
                      </div>
                      <span className="text-[11px] font-black px-2 py-0.5 rounded bg-white/20 text-white shrink-0 hidden sm:inline">
                        {m.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Legend & Indikator Status Warna */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-[13px] text-slate-600 mt-2">
          <div className="flex items-center gap-3.5 flex-wrap font-bold">
            <span className="text-slate-400">Status Timeline:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600"></span>
              <span>Rilis Awal (Oktober)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#0066d6]"></span>
              <span>Integrasi Utama (November)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#25a7dd]"></span>
              <span>Gateway Cadangan (Desember)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-800"></span>
              <span>Support Lintas Divisi (Sepanjang Q4)</span>
            </span>
          </div>

          <span className="text-[#0066d6] font-black hidden sm:inline">
            Klik baris untuk fokus inisiatif ✓
          </span>
        </div>
      </div>
    </div>
  );
}
