'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  UserX,
  Bot,
  Smartphone,
  Wifi,
  Sparkles,
  ShieldAlert,
  Layers,
  Cpu,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Activity,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

export default function Slide10QualityChallenges() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[5%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Kualitas Sistem & Pengujian Produk"
        title="Tantangan Kualitas Sistem: Ketiadaan Dedicated QA & Kompleksitas Lapangan"
        subtitle="Evaluasi Pengujian: Mengapa Bug Masih Terjadi di Lapangan Meski Telah Mengadopsi AI Automation Testing"
        rightNote="Transparansi QA & Solusi"
      />

      {/* 1. Executive Summary Banner (Profesional & Lugas) */}
      <div className="slide-card p-3 sm:p-3.5 mb-2.5 border-l-4 border-l-amber-500 shadow-xs shrink-0 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Kondisi Saat Ini: Ketiadaan Dedicated QA (Tester Khusus)
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-0.5">
              Saat ini tim developer masih menguji fiturnya secara mandiri. Sebagai solusi saat ini, kami berlangganan <strong>AI Automation Testing bulanan</strong>. Namun di dunia nyata, variasi perangkat, fluktuasi sinyal di lokasi user, dan skenario penggunaan riil memunculkan kemungkinan error yang belum sepenuhnya ter-handle.
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-50 text-amber-800 border border-amber-200 shrink-0 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Transparansi Lapangan
        </span>
      </div>

      {/* 2. Grid 3 Pilar Analisis (Profesional, Ringkas, Mudah Dipahami) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 flex-1 min-h-0 mb-2.5 items-stretch">
        
        {/* PILAR 1: KONDISI TIM (Developer Menguji Mandiri) */}
        <div className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-rose-500 shadow-xs hover:shadow-md transition-all">
          <div>
            {/* Header Pilar */}
            <div className="flex items-start justify-between pb-2 mb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <UserX className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    1. Belum Ada Dedicated QA
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    Developer Menguji Fitur Mandiri
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                Keterbatasan Tim
              </span>
            </div>

            {/* Poin-Poin Ringkas */}
            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Developer Menguji Kodenya Sendiri</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Developer cenderung memverifikasi alur standar (*happy path*) yang dipahami aman, sehingga skenario di luar alur normal berisiko terlewat.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Kapasitas Terserap Target Rilis</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Fokus tim tersita untuk mengejar deadline rilis fitur baru, sehingga waktu untuk uji regresi manual mendalam menjadi sangat terbatas.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Ketiadaan Pengujian Skenario Ekstrem</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Belum ada personel khusus yang bertugas mengeksplorasi skenario error dan mencari celah sistem sebelum rilis ke staging.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Dampak: <strong className="text-rose-700">Skenario Tak Terduga Rentan Terlewat</strong></span>
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          </div>
        </div>

        {/* PILAR 2: SOLUSI BERJALAN (AI Automation Testing) */}
        <div className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-xs hover:shadow-md transition-all">
          <div>
            {/* Header Pilar */}
            <div className="flex items-start justify-between pb-2 mb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0 shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    2. AI Automation Testing
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    Langganan Tool Otomasi Bulanan
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200">
                Mitigasi Saat Ini
              </span>
            </div>

            {/* Poin-Poin Ringkas */}
            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
                  <span>Investasi Tool Otomasi AI</span>
                </div>
                <p className="text-xs text-slate-700 pl-3">
                  Berlangganan tools AI automation bulanan untuk memverifikasi alur aplikasi secara otomatis di setiap pembaruan kode.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
                  <span>Efektif Memvalidasi Alur Utama</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Sangat cepat memastikan validasi form, tombol transaksi, dan integrasi API berjalan tanpa error fatal.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
                  <span>Keterbatasan Simulasi Otomasi</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  AI automation hanya menguji skenario terprogram, tidak dapat merefleksikan kondisi perangkat dan kendala riil di tangan user.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Peran: <strong className="text-[#0066d6]">Penyaring Awal Alur Standar</strong></span>
            <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
          </div>
        </div>

        {/* PILAR 3: REALITA LAPANGAN (Perangkat & Lokasi Pengguna) */}
        <div className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-amber-500 shadow-xs hover:shadow-md transition-all">
          <div>
            {/* Header Pilar */}
            <div className="flex items-start justify-between pb-2 mb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    3. Kompleksitas Lapangan &amp; User
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    Muncul dari Penggunaan Langsung
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Faktor Eksternal
              </span>
            </div>

            {/* Poin-Poin Ringkas */}
            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Keberagaman Device &amp; Browser</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Ratusan variasi tipe ponsel (Android versi lama, iOS, ukuran layar) dan in-app browser (Instagram/TikTok) yang merender tampilan secara berbeda.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Sinyal Fluktuatif di Lokasi Pengguna</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Koneksi internet setiap user berbeda dan fluktuatif tergantung lokasinya, dan tim tech belum meng-handle seluruh kemungkinan error saat jaringan drop atau tidak stabil.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Skenario Penggunaan Riil di Lapangan</span>
                </div>
                <p className="text-xs text-slate-600 pl-3">
                  Aksi tak terduga seperti double-click saat halaman loading atau tombol back saat proses checkout baru terdeteksi saat digunakan langsung oleh pengguna.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2.5 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Karakteristik: <strong className="text-amber-700">Baru Teridentifikasi Saat Live</strong></span>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </div>
        </div>

      </div>

      {/* 3. Strategic Action & Conclusion Footer (Profesional & Terarah) */}
      <div className="slide-subcard p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] shrink-0 border border-slate-200">
        <div className="flex items-center gap-2.5 text-slate-700">
          <Sparkles className="w-4 h-4 text-[#0066d6] shrink-0" />
          <span className="font-black text-slate-900 shrink-0">Langkah Penyelesaian:</span>
          <span className="leading-snug">
            Mengoptimalkan <strong>AI Automation</strong> untuk menjaga alur utama + Menerapkan <strong>live error tracking</strong> untuk memantau error di perangkat user secara real-time + Merencanakan <strong>Dedicated QA</strong> saat volume transaksi terus bertambah.
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[#0066d6] font-black text-xs shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Solusi Bertahap &amp; Terukur ✓
        </span>
      </div>
    </div>
  );
}
