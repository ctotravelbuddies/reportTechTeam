'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';

export default function Slide9CriticalPath() {
  const dependencies = [
    {
      vendor: '1. ATA (Pesawat)',
      key: 'Credential Produksi',
      desc: 'Kunci validasi harga asli penerbangan secara live sebelum rilis B2B & B2C.',
    },
    {
      vendor: '2. WebBeds (Hotel)',
      key: 'Akun & Dokumen API',
      desc: 'Kunci kepastian struktur kamar, availability, dan booking flow hotel global.',
    },
    {
      vendor: '3. DOKU (Payment)',
      key: 'Sandbox & Verifikasi',
      desc: 'Kunci integrasi secondary payment gateway sebagai backup checkout live.',
    },
    {
      vendor: '4. Mitra KAI',
      key: 'Pilih Maks Okt 2026',
      desc: 'Kunci mutlak untuk mengejar target rilis publik pada Januari 2027.',
    },
  ];

  const pipeline = [
    { title: 'ATA Live', note: 'Credential Akses' },
    { title: 'Flight Agent', note: 'Mid-Sep' },
    { title: 'Flight B2C', note: 'End-Sep' },
    { title: 'Hotel & DOKU', note: 'Okt–Nov' },
    { title: 'Mitra KAI', note: 'Maks Okt!' },
    { title: 'Dev KAI', note: 'Desember' },
    { title: 'Prod Live', note: 'Jan 2027' },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-1 min-h-0 slide-fade-in">
      <SlideHeader
        badge="Dependensi Eksternal"
        title="Critical Path & External Dependency Map"
        subtitle="Jalur Kritis di Luar Kendali Langsung Tim Teknologi"
        rightNote="4 Kunci Eksternal"
      />

      {/* 4 External Dependencies Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3 shrink-0">
        {dependencies.map((d, idx) => (
          <div key={idx} className="slide-card p-3.5 text-center border-t-4 border-t-[#0066d6]">
            <span className="text-[10px] font-bold text-[#0066d6] block uppercase">{d.vendor}</span>
            <span className="text-xs font-bold text-slate-900 mt-1 block">{d.key}</span>
            <span className="text-[11px] text-slate-500 block mt-1 leading-snug">{d.desc}</span>
          </div>
        ))}
      </div>

      {/* Linear Pipeline Flow */}
      <div className="slide-card p-5 mb-3 flex-1 min-h-0 flex flex-col justify-center">
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block mb-3">
          Alur Pipeline Jalur Kritis (Pipeline Dependency):
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-2.5 text-center text-xs">
          {pipeline.map((p, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border flex flex-col justify-center transition ${
                idx === pipeline.length - 1
                  ? 'bg-[#0066d6] text-white border-[#0066d6] font-bold shadow-sm'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="font-bold">{p.title}</span>
              <span className={`text-[10px] mt-0.5 ${idx === pipeline.length - 1 ? 'text-blue-100 font-semibold' : 'text-[#0066d6] font-semibold'}`}>
                {p.note}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote Bar */}
      <div className="slide-subcard p-3 flex items-center justify-between text-xs shrink-0 border border-slate-200">
        <span className="text-slate-700">
          📌 <strong>Pesan Manajemen:</strong> Kesiapan API eksternal menentukan ketepatan jadwal. Jika akses vendor terlambat, timeline otomatis bergeser.
        </span>
        <span className="text-[#0066d6] font-bold">External Dependency Alert</span>
      </div>
    </div>
  );
}
