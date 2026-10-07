'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide10Risks() {
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const risks = [
    {
      code: 'R1',
      title: 'Akun ATA Produksi Terlambat',
      level: 'High / Med',
      impact: 'Rilis Flight Agent B2B tertunda.',
      mitigation: 'Follow up aktif pihak ATA & siapkan konfigurasi uji harga langsung.',
    },
    {
      code: 'R2',
      title: 'Kompleksitas API WebBeds Tinggi',
      level: 'High / High',
      impact: 'Pengerjaan modul hotel meleset dari estimasi 1.5 bulan.',
      mitigation: 'Review dokumen seawal September & jadwalkan UAT bertahap tanpa komitmen kaku.',
    },
    {
      code: 'R3',
      title: 'Perbedaan Alur Webhook DOKU',
      level: 'Med / Med',
      impact: 'Penyesuaian logika notifikasi pembayaran.',
      mitigation: 'Bangun payment abstraction layer agar logika order independen dari provider.',
    },
    {
      code: 'R4',
      title: 'Mitra KAI Terlambat Dipilih',
      level: 'High / High',
      impact: 'Target peluncuran Januari 2027 gagal tercapai.',
      mitigation: 'Kunci keputusan vendor maksimal akhir Oktober & pastikan SLA sandbox stabil.',
    },
    {
      code: 'R5',
      title: 'Kapasitas Tim Terbatas (4 Orang)',
      level: 'High / High',
      impact: 'Bottleneck parah jika terjadi penambahan scope mendadak.',
      mitigation: 'Pisahkan lead per modul, kunci 20% kapasitas maintenance, stop scope creep.',
    },
    {
      code: 'R6',
      title: 'Insiden Sistem Live & Bottleneck Mobile',
      level: 'Med / High',
      impact: 'Luthfy memegang seluruh Flutter & server live butuh perbaikan cepat.',
      mitigation: 'CTO mengawal eskalasi insiden; backend matangkan API contract lebih awal.',
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Manajemen Risiko"
        title="Risk Assessment & Mitigation Strategy"
        subtitle="Analisis Risiko Lapangan & Langkah Preventif"
        rightNote="6 Skenario Kunci"
      />

      {/* Risks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 flex-1 min-h-0 mb-3 items-stretch">
        {risks.map((r) => {
          const isSelected = selectedRisk === r.code;
          return (
            <div
              key={r.code}
              onClick={() => setSelectedRisk(isSelected ? null : r.code)}
              className={`slide-card p-4 flex flex-col justify-between border-t-4 border-t-[#0066d6] cursor-pointer transition-all ${
                isSelected
                  ? 'ring-2 ring-[#0066d6] shadow-md bg-blue-50/20'
                  : 'hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{r.code}. {r.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                    {r.level}
                  </span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed mt-2">
                  <p className="text-slate-600">
                    <strong className="text-slate-900">Dampak:</strong> {r.impact}
                  </p>
                  <p className="text-slate-600">
                    <strong className="text-[#0066d6]">Mitigasi:</strong> {r.mitigation}
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                Tingkat Keparahan: {r.level}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-2.5 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          * <strong>Perhatian Khusus:</strong> R2 (WebBeds), R4 (Mitra KAI), dan R5 (Kapasitas 4 orang) merupakan risiko berkategori <em>High Impact</em> yang memerlukan mitigasi disiplin.
        </span>
        <span className="text-[#0066d6] font-bold">Proactive Risk Management</span>
      </div>
    </div>
  );
}
