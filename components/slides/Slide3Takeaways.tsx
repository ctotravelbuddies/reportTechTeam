'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide3Takeaways() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      title: '1. Kecepatan & Responsivitas Transaksi',
      desc: 'Optimasi query dan integrasi API langsung memangkas latensi pencarian tiket dan proses checkout hingga di bawah 2 detik.',
      metric: '< 2 Detik',
      impact: 'Peningkatan Conversion Rate',
    },
    {
      title: '2. Pengurangan Risiko Downtime Pembayaran',
      desc: 'Penyediaan gateway cadangan menjamin kegagalan dari salah satu provider tidak menghentikan arus transaksi customer.',
      metric: '99.9% Uptime',
      impact: 'Mitigasi Kegagalan Checkout',
    },
    {
      title: '3. Efisiensi Biaya & Manpower Terukur',
      desc: 'Dengan alokasi 4 orang tanpa redundansi, sistem dibangun secara mandiri tanpa pembengkakan biaya konsultan pihak ketiga.',
      metric: 'Output 4 Orang',
      impact: 'Output Maksimal 4 Personil',
    },
    {
      title: '4. Diversifikasi Pendapatan Bisnis',
      desc: 'Ekspansi ke Hotel WebBeds dan Tiket Kereta Api KAI melipatgandakan peluang cross-selling dalam satu aplikasi mobile.',
      metric: 'Multi-Product',
      impact: 'Revenue Stream Baru',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Dampak Bisnis"
        title="Key Takeaways & Nilai Tambah bagi Perusahaan"
        subtitle="Dampak Nyata Pengembangan Teknologi terhadap Bisnis"
        rightNote="4 Pilar Nilai"
      />

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 mb-3 items-stretch">
        {pillars.map((p, idx) => {
          const isActive = activePillar === idx;
          return (
            <div
              key={idx}
              onClick={() => setActivePillar(isActive ? null : idx)}
              className={`slide-card p-5 flex flex-col justify-between cursor-pointer border-t-4 transition-all ${
                isActive
                  ? 'border-t-[#0066d6] ring-2 ring-[#0066d6] shadow-md bg-blue-50/20'
                  : 'border-t-[#0066d6] hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{p.title}</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                    {p.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">{p.impact}</span>
                <span className="text-[#0066d6] font-bold text-[11px]">
                  {isActive ? '✓ Dipilih' : 'Klik Sorot →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="slide-subcard p-3 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          <strong>Kesimpulan:</strong> Teknologi di Travel Buddies bukan sekadar operasional pendukung, melainkan motor utama akselerasi pendapatan dan diversifikasi produk.
        </span>
        <span className="text-[#0066d6] font-bold">Business-Driven Engineering</span>
      </div>
    </div>
  );
}
