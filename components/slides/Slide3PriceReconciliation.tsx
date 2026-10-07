'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';
import {
  Percent,
  SearchCheck,
  ShieldCheck,
  Scale,
  ExternalLink,
  Maximize2,
  Minimize2,
  RefreshCw,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export default function Slide3PriceReconciliation() {
  const monitoringUrl = 'https://monitoring.travelbuddies.co.id/';

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  const reloadIframe = () => {
    setIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[5%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Audit & Transparansi"
        title="Rekonsiliasi & Monitoring Harga Tiket dengan Partner"
        subtitle="Validasi Otomatis Kesesuaian Persentase Margin Kesepakatan Awal"
        rightNote="Live Price Comparator Aktif"
      />

      {/* Konten Utama: 2 Kolom (Kiri Penjelasan Bisnis & Logika, Kanan Live Iframe Comparator) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4.5 flex-1 min-h-0 mb-3 items-stretch">
        {/* ================= KOLOM KIRI (5 Kolom): DEFINISI & LOGIKA REKONSILIASI ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 min-h-0">
          {/* Card 1: Definisi Inti Rekonsiliasi Harga */}
          <div className="slide-card p-3.5 sm:p-4.5 border-l-4 border-l-[#0066d6] shadow-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                    Apa itu Rekonsiliasi Harga?
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Sesuai Kontrak
                </span>
              </div>

              <p className="text-[13px] sm:text-[14.5px] text-slate-700 leading-relaxed mb-3">
                Proses pengawasan dan pencocokan harga tiket pesawat secara otomatis untuk{' '}
                <strong className="text-slate-900">
                  memastikan harga yang terbit dan ditagihkan 100% konsisten dengan persentase margin/komisi
                </strong>{' '}
                yang telah disepakati bersama sejak awal perjanjian kerja sama dengan partner maskapai.
              </p>

              {/* 3 Manfaat Kunci */}
              <div className="space-y-2 text-xs sm:text-[13.5px] text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-lg border border-slate-100">
                  <Percent className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-extrabold text-xs sm:text-[13.5px]">Validasi Persentase Margin</strong>
                    <span className="text-slate-600 text-xs sm:text-[12.5px] leading-snug block">Menjamin selisih harga dasar (base fare) vs harga jual tidak melebihi atau kurang dari kesepakatan.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-lg border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-extrabold text-xs sm:text-[13.5px]">Mencegah Kebocoran Pendapatan</strong>
                    <span className="text-slate-600 text-xs sm:text-[12.5px] leading-snug block">Mendeteksi dini jika ada anomali tarif API partner sebelum issued tiket, mencegah kerugian transaksi.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-lg border border-slate-100">
                  <SearchCheck className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-extrabold text-xs sm:text-[13.5px]">Audit Otomatis &amp; Transparan</strong>
                    <span className="text-slate-600 text-xs sm:text-[12.5px] leading-snug block">Kedua belah pihak memiliki data referensi yang sama saat rekonsiliasi bulanan tanpa hitungan manual.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Aksi Buka Website Monitoring */}
            <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-xs text-slate-500 font-semibold truncate">
                Domain: <strong className="text-slate-800">monitoring.travelbuddies.co.id</strong>
              </span>
              <a
                href={monitoringUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066d6] hover:bg-[#0052b3] text-white text-xs sm:text-sm font-extrabold shadow-2xs hover:shadow transition-all shrink-0 cursor-pointer"
              >
                <span>Buka di Tab Baru</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= KOLOM KANAN (7 Kolom): LIVE IFRAME MONITORING & COMPARATOR ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between min-h-0">
          <div className="slide-card p-3 sm:p-4 border-t-4 border-t-[#0066d6] shadow-sm flex flex-col justify-between h-full min-h-[360px] sm:min-h-[420px]">
            {/* Header Window Bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                    Flight Price Monitoring &amp; Margin Comparator
                  </h3>
                  <span className="text-xs text-[#0066d6] font-bold block">
                    Dashboard Komparasi Live Travel Buddies
                  </span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={reloadIframe}
                  title="Reload Data Monitoring"
                  className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-[#0066d6]" />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  title="Perbesar Layar Penuh"
                  className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0066d6] text-[11px] font-bold flex items-center gap-1 transition cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Perbesar</span>
                </button>
              </div>
            </div>

            {/* Iframe Window Mockup */}
            <div className="rounded-xl border border-slate-200 bg-slate-900 overflow-hidden shadow-xs flex-1 flex flex-col min-h-0">
              {/* Browser Header Bar */}
              <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between border-b border-slate-700 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="ml-1.5 font-mono text-[10px] text-slate-400 truncate max-w-[220px]">
                    monitoring.travelbuddies.co.id
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Live System</span>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[340px] bg-white">
                {iframeLoading && (
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xs flex flex-col items-center justify-center text-white z-10 pointer-events-none">
                    <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2"></div>
                    <span className="text-xs font-bold">Memuat Price Comparator...</span>
                  </div>
                )}
                <iframe
                  key={iframeKey}
                  src={monitoringUrl}
                  title="Flight Price Monitoring & Margin Comparator Travel Buddies"
                  className="w-full h-full border-0 bg-white"
                  onLoad={() => setIframeLoading(false)}
                  allow="clipboard-read; clipboard-write;"
                />
              </div>
            </div>

            {/* Sub-bar keterangan */}
            <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="truncate">
                Fitur: <strong className="text-slate-700">Analisis Deviasi Harga &amp; Margin Matcher</strong>
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="text-[#0066d6] font-bold hover:underline cursor-pointer shrink-0"
              >
                Tampilkan Layar Penuh ➔
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL FULLSCREEN MONITORING IFRAME ================= */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col p-2 sm:p-6 lg:p-8 slide-fade-in">
          <div className="w-full h-full max-w-7xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="min-h-12 py-2 sm:py-0 bg-slate-900 px-3 sm:px-4 flex flex-wrap items-center justify-between text-white border-b border-slate-800 shrink-0 gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="font-extrabold text-xs sm:text-sm tracking-wide truncate">
                  Live Price Monitoring &amp; Margin Comparator: Travel Buddies
                </span>
                <span className="hidden md:inline text-xs text-slate-400 font-mono">
                  ({monitoringUrl})
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={reloadIframe}
                  title="Reload"
                  className="px-2 sm:px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] sm:text-xs font-semibold flex items-center gap-1 transition text-slate-200 cursor-pointer"
                >
                  <RefreshCw className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span className="hidden sm:inline">Reload</span>
                </button>
                <a
                  href={monitoringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-2.5 py-1 rounded-lg bg-[#0066d6] hover:bg-[#0052b3] text-[11px] sm:text-xs font-semibold flex items-center gap-1 transition text-white cursor-pointer"
                >
                  <span>Tab Baru</span>
                  <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="px-2.5 sm:px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-[11px] sm:text-xs font-bold text-white flex items-center gap-1 transition cursor-pointer"
                >
                  <Minimize2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>Tutup</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 w-full h-full relative bg-slate-100">
              <iframe
                key={`modal-${iframeKey}`}
                src={monitoringUrl}
                title="Fullscreen Price Monitoring & Margin Comparator"
                className="w-full h-full border-0"
                allow="clipboard-read; clipboard-write;"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
