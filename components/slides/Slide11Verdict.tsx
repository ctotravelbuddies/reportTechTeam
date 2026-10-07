'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide11Verdict() {
  const actions = [
    {
      num: '1',
      target: 'ATA (Pesawat)',
      action: 'Percepat Akses Akun Live',
      detail: 'Dorong rilis credential akun live secepatnya di September.',
    },
    {
      num: '2',
      target: 'WebBeds (Hotel)',
      action: 'Bereskan Akun & Dokumen',
      detail: 'Amankan registrasi & panduan teknis API sebelum Oktober.',
    },
    {
      num: '3',
      target: 'DOKU (Payment)',
      action: 'Selesaikan Verifikasi',
      detail: 'Tuntaskan pendaftaran merchant & akses sandbox payment.',
    },
    {
      num: '4',
      target: 'Mitra KAI',
      action: 'Pilih Maksimal Okt 2026',
      detail: 'Kunci pilihan vendor sebelum Oktober berakhir tanpa kompromi.',
    },
  ];

  const pillars = [
    { title: '1. Delivery Flight', desc: 'Flight Agent & B2C selesai Sep 2026.' },
    { title: '2. Eksekusi Paralel', desc: 'Hotel & DOKU dipisah lead di Okt–Nov.' },
    { title: '3. Kunci Mitra KAI', desc: 'Seleksi tuntas Okt demi rilis Jan 2027.' },
    { title: '4. Buffer 20%', desc: 'Menjamin sistem live tetap andal harian.' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Keputusan Manajemen"
        title="Management Action Required & Final Verdict"
        subtitle="Dukungan Manajemen & Kesimpulan Akhir Tim Teknologi"
        rightNote="Roadmap FEASIBLE ✓"
      />

      {/* 4 Immediate Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3 shrink-0">
        {actions.map((a) => (
          <div key={a.num} className="slide-card p-3.5 border-t-4 border-t-[#0066d6]">
            <span className="text-[10px] font-bold text-[#0066d6] block uppercase">{a.num}. {a.target}</span>
            <span className="text-xs font-bold text-slate-900 mt-0.5 block">{a.action}</span>
            <span className="text-[11px] text-slate-500 block mt-1 leading-snug">{a.detail}</span>
          </div>
        ))}
      </div>

      {/* Prominent Statement Box */}
      <div className="slide-card p-5 mb-3 border-l-4 border-l-[#0066d6] flex-1 min-h-0 flex flex-col justify-center bg-blue-50/20">
        <span className="text-xs font-bold text-[#0066d6] uppercase tracking-wider block mb-1.5">
          Kesimpulan Akhir Tim Teknologi
        </span>
        <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
          &ldquo;Dengan 4 personil Tech, roadmap September 2026 – January 2027 ini <span className="text-[#0066d6] underline decoration-2 decoration-[#0066d6]">FEASIBLE</span> melalui eksekusi paralel terencana, asalkan kebutuhan API vendor eksternal diamankan tepat waktu dan tidak ada penambahan scope mendadak.&rdquo;
        </p>
      </div>

      {/* 4 Final Pillars */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs shrink-0">
        {pillars.map((p, idx) => (
          <div key={idx} className="slide-card p-3 border-slate-200">
            <strong className="text-slate-900 block text-xs mb-0.5">{p.title}</strong>
            <span className="text-slate-500 text-[11px]">{p.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
