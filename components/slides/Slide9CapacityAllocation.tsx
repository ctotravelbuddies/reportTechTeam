'use client';

import React from 'react';
import SlideHeader from '../SlideHeader';
import {
  Wrench,
  Megaphone,
  Database,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Award,
  BarChart3,
  RefreshCw,
  Clock,
} from 'lucide-react';

export default function Slide9CapacityAllocation() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[5%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Alokasi Waktu & Kapasitas Q4"
        title="Kenapa Ada Alokasi Waktu di Q4? Menjawab Kebutuhan Divisi Lain & Stop Tambal Sulam"
        subtitle="Transparansi Kapasitas: Alokasi untuk Inisiatif Bisnis Baru & Memperbaiki Sistem secara Fundamental"
        rightNote="Transparansi Kapasitas Q4"
      />

      {/* 1. Header Banner: Jawaban Strategis terhadap Space Waktu di Q4 */}
      <div className="slide-card p-3 sm:p-3.5 mb-2.5 border-l-4 border-l-[#0066d6] shadow-xs shrink-0 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              Bukan Waktu Kosong, Tapi Alokasi Strategis Tim Teknologi
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-0.5">
              Timeline Q4 sengaja dialokasikan untuk 2 hal penting: <strong>mengeksekusi strategi baru divisi Marketing &amp; Operasional</strong>, serta <strong>merapikan sistem dari akar</strong> agar tidak ada lagi perbaikan tambal sulam menjelang peak season.
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#0066d6] animate-pulse"></span>
          Kapasitas Terukur &amp; Terarah
        </span>
      </div>

      {/* 2. Grid 2 Pilar Utama (Permintaan Divisi Lain vs Refactoring Proper) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 flex-1 min-h-0 mb-2.5 items-stretch">

        {/* PILAR KIRI: Permintaan Strategi Baru dari Divisi Lain */}
        <div className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-xs hover:shadow-md transition-all">
          <div>
            {/* Header Pilar */}
            <div className="flex items-start justify-between pb-2 mb-2.5 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0 shadow-2xs">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    1. Permintaan Strategi Baru Lintas Divisi
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    Marketing, Operasional, &amp; Tata Kelola Data
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066d6] border border-blue-200 shrink-0">
                4 Inisiatif Baru
              </span>
            </div>

            {/* List Inisiatif Divisi (Poin-Poin Terbaca Cepat) */}
            <div className="space-y-2">
              {/* Marketing: Loyal Buddies */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#0066d6]" />
                    <span>Loyal Buddies Program (Marketing)</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-[#0066d6]">
                    Retensi Tamu
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Modul loyalitas pelanggan dengan sistem poin reward dan apresiasi tamu untuk mendorong repeat booking perjalanan.
                </p>
              </div>

              {/* Marketing: Ads & ROAS Tracker */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#0066d6]" />
                    <span>Ads Tracker &amp; Dashboard ROAS (Marketing)</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-[#0066d6]">
                    Efisiensi Iklan
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Pelacakan hasil iklan (Meta &amp; Google Ads) secara real-time untuk memantau ROAS agar budget promosi tepat sasaran.
                </p>
              </div>

              {/* Operasional: Bank Data */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#0066d6]" />
                    <span>Bank Data Operasional (Divisi Operasional)</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-[#0066d6]">
                    Sentralisasi Arsip
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Penyimpanan terpusat di CMS untuk dokumen peserta, manifest trip, data vendor armada, dan aset operasional tanpa tercecer.
                </p>
              </div>

              {/* Single Source of Truth / Harmonisasi Data */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 ring-1 ring-blue-300/40">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0066d6]" />
                    <span>Single Source of Truth (Pusat Acuan Data)</span>
                  </div>
                  <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#0066d6] text-white">
                    Pusat Acuan Valid
                  </span>
                </div>
                <p className="text-xs text-slate-700 pl-5">
                  Tiap divisi tetap leluasa mengelola data operasionalnya sendiri, namun bermuara pada 1 pusat data acuan utama yang valid &amp; sinkron.
                </p>
              </div>
            </div>
          </div>

          {/* Dampak Pilar Kiri */}
          <div className="pt-2 mt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Tujuan: <strong className="text-slate-900">Mendukung Ekspansi Bisnis &amp; Harmonisasi Data</strong></span>
            <span className="w-2 h-2 rounded-full bg-[#0066d6]"></span>
          </div>
        </div>

        {/* PILAR KANAN: Refactoring Menyeluruh & Stop Tambal Sulam */}
        <div className="slide-card p-3.5 sm:p-4 flex flex-col justify-between border-t-4 border-t-amber-500 shadow-xs hover:shadow-md transition-all">
          <div>
            {/* Header Pilar */}
            <div className="flex items-start justify-between pb-2 mb-2.5 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    2. Refactoring Proper &amp; Stop Tambal Sulam
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 block mt-0.5">
                    Kestabilan Sistem &amp; Fondasi Skalabel
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                Pondasi Jangka Panjang
              </span>
            </div>

            {/* List Masalah & Solusi Proper (Poin-Poin Terbaca Cepat) */}
            <div className="space-y-2">
              {/* Masalah Tambal Sulam Saat Ini */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50/50 border border-amber-200">
                <div className="text-xs sm:text-[13px] font-bold text-amber-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
                    <span>Kondisi Sebelumnya: Sering 'Tambal Sulam'</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                    Masalah
                  </span>
                </div>
                <p className="text-xs text-slate-700 pl-5">
                  Perbaikan bug kerap dilakukan secara cepat (*quick patch*) demi kejar jadwal, yang berisiko memunculkan bug baru di fitur lain.
                </p>
              </div>

              {/* Eksekusi Perbaikan Proper di Q4 */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Solusi Q4: Dibenahi dari Akar (Proper Refactor)</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                    Solusi Inti
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Membongkar struktur kode yang berantakan: hapus kode redundan, optimasi query database, dan rapikan alur data secara menyeluruh.
                </p>
              </div>

              {/* Standarisasi Arsitektur Bersih */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#0066d6]" />
                    <span>Standardisasi Arsitektur &amp; Kontrak Data</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-[#0066d6]">
                    Standarisasi
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Menyeragamkan struktur database dan API contract agar modul-modul produk terhubung rapi dan tidak mudah error saat ada update baru.
                </p>
              </div>

              {/* Target Kesiapan Peak Season */}
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-0.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Kesiapan Puncak Liburan (Peak Season 99.9% Uptime)</span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                    Jaminan Akhir Tahun
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-5">
                  Menjamin saat lonjakan booking liburan akhir tahun tiba, sistem berjalan lancar tanpa insiden server down atau transaksi gantung.
                </p>
              </div>
            </div>
          </div>

          {/* Dampak Pilar Kanan */}
          <div className="pt-2 mt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>Tujuan: <strong className="text-slate-900">Zero Tambal Sulam &amp; Sistem Siap Skala</strong></span>
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </div>
        </div>

      </div>
    </div>
  );
}
