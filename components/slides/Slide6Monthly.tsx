'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide6Monthly() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      phase: 'Fase 1 • Sep 2026',
      badge: 'DELIVERY',
      title: 'Tuntaskan Flight & Kunci Dependensi',
      points: [
        'Flight Agent: Pengujian harga riil live ATA (Mid-Sep).',
        'Flight B2C: Pemisahan markup & rilis Flutter (End-Sep).',
        'Amankan registrasi akun WebBeds & DOKU.',
        'Mulai riset dan seleksi awal mitra KAI.',
      ],
      goal: 'Bersihkan backlog sebelum inisiatif baru dibuka.',
    },
    {
      phase: 'Fase 2 • Okt 2026',
      badge: 'PEAK LOAD',
      title: 'Paralel Hotel & Payment Integration',
      points: [
        'WebBeds: Integrasi modul search & booking kamar (Adrian).',
        'DOKU: Webhook callback & proteksi double-deduction (Setra).',
        'Luthfy merancang flow antarmuka mobile.',
        'Wajib Kunci: Finalisasi kontrak mitra KAI!',
      ],
      goal: 'Eksekusi paralel terpisah tanpa saling tunggu.',
    },
    {
      phase: 'Fase 3 • Nov 2026',
      badge: 'TRANSISI',
      title: 'Stabilisasi & Kick-Off KAI',
      points: [
        'WebBeds: UAT transaksi nyata & penutupan bug (Nov).',
        'DOKU: QA notifikasi bayar & siap rilis produksi.',
        'Akses sandbox & kontrak API KAI aktif.',
        'Adrian & Setra mulai sambung rute & jadwal KAI.',
      ],
      goal: 'Transisi mulus dari Hotel/PG ke Kereta Api.',
    },
    {
      phase: 'Fase 4 • Des–Jan',
      badge: 'GO-LIVE',
      title: 'Full KAI Dev → Rilis Produksi',
      points: [
        'Desember: Fokus modul rute, seat map & tiket KAI.',
        'Januari: UAT transaksi nyata & penanganan edge cases.',
        'Rilis aplikasi publik ke Google Play & App Store (Jan 2027).',
        'Monitoring stabilitas pasca rilis publik.',
      ],
      goal: 'Peluncuran publik tepat waktu tanpa penambahan scope.',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Perjalanan Eksekusi"
        title="Monthly Focus & Milestone Journey"
        subtitle="Tahapan Eksekusi Bulan per Bulan Menuju Rilis"
        rightNote="4 Fase Eksekusi"
      />

      {/* 4 Phase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 flex-1 min-h-0 mb-3 items-stretch">
        {phases.map((p, idx) => {
          const isActive = activePhase === idx;
          return (
            <div
              key={idx}
              onClick={() => setActivePhase(isActive ? null : idx)}
              className={`slide-card p-5 flex flex-col justify-between cursor-pointer border-t-4 transition-all ${
                isActive
                  ? 'border-t-[#0066d6] ring-2 ring-[#0066d6] shadow-md bg-blue-50/20'
                  : 'border-t-[#0066d6] hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">{p.phase}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                    {p.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-3">{p.title}</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#0066d6] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <em>Target:</em> {p.goal}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-3 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          💡 <strong>Prinsip Utama:</strong> Beban kerja puncak terjadi di Oktober (paralel WebBeds & DOKU). Dengan memisahkan lead (Adrian di Hotel, Setra di Payment), kedua pekerjaan berjalan tanpa saling memblokir.
        </span>
        <span className="text-[#0066d6] font-bold">Parallel Execution</span>
      </div>
    </div>
  );
}
