'use client';

import React, { useState } from 'react';
import SlideHeader from '../SlideHeader';
import {
  Globe,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  ImageIcon,
  Maximize2,
  Minimize2,
  RefreshCw,
  ShieldAlert,
  Play,
} from 'lucide-react';

export default function Slide2AirlineTicketing() {
  // URLs
  const agentPortalUrl = 'https://banana-agent.travelbuddies.co.id/';
  const mobileAppUrl = 'https://travelbuddies.co.id';

  // Agent Portal Display Mode: 'iframe' (Live Interactive Demo) vs 'screenshot'
  const [agentViewMode, setAgentViewMode] = useState<'iframe' | 'screenshot'>('iframe');
  const [isDemoExpanded, setIsDemoExpanded] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  // Mobile fallback state (default true to show dedicated native mobile placeholder)
  const [mobileImgError, setMobileImgError] = useState<boolean>(true);
  const [agentImgError, setAgentImgError] = useState<boolean>(false);

  const reloadIframe = () => {
    setIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-[6%] min-h-0 slide-fade-in relative">
      <SlideHeader
        badge="Inisiatif Utama"
        title="Kesiapan Sistem Tiket Pesawat: Portal Agent & Mobile Apps"
        subtitle="Penyelesaian Core Booking Engine & Rekonsiliasi Transaksi"
        rightNote="Live Demo & Testing Aktif"
      />

      {/* Grid 2 Kolom: Kiri Website Agent (B2B Live Iframe), Kanan Mobile Apps (B2C) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 flex-1 min-h-0 mb-3 items-stretch">
        {/* ================= CARD 1: WEBSITE AGENT TRAVEL BUDDIES (B2B LIVE IFRAME) ================= */}
        <div className="slide-card p-3.5 sm:p-5 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-sm hover:shadow-md transition-all">
          <div>
            {/* Header Card 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066d6] shrink-0 shadow-2xs">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    Website Agent Travel Buddies
                  </h3>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0066d6] block mt-0.5">
                    B2B Portal Ticketing &amp; Agent Management
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-[13px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Status: <strong className="font-extrabold">Testing &amp; Rekonsiliasi</strong>
                </span>
              </div>
            </div>

            {/* Browser Window / Iframe Frame */}
            <div className="rounded-xl border border-slate-200 bg-slate-900 overflow-hidden shadow-xs mb-3">
              {/* Browser Window Bar with Mode Switcher */}
              <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between border-b border-slate-700 text-[11px] text-slate-300 gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="ml-1.5 font-mono text-[10px] text-slate-400 truncate max-w-[170px] sm:max-w-[210px]">
                    banana-agent.travelbuddies.co.id
                  </span>
                </div>

                {/* Toolbar: Switcher & Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setAgentViewMode(agentViewMode === 'iframe' ? 'screenshot' : 'iframe')}
                    title="Ganti tampilan demo live / screenshot"
                    className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 flex items-center gap-1 cursor-pointer transition"
                  >
                    {agentViewMode === 'iframe' ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Mode Iframe Live</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 text-slate-400" />
                        <span>Mode Screenshot</span>
                      </>
                    )}
                  </button>

                  {agentViewMode === 'iframe' && (
                    <>
                      <button
                        type="button"
                        onClick={reloadIframe}
                        title="Reload Halaman Demo"
                        className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsDemoExpanded(true)}
                        title="Perbesar Layar Demo"
                        className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* View Content: Live Iframe vs Screenshot */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 bg-slate-100 flex items-center justify-center overflow-hidden">
                {agentViewMode === 'iframe' ? (
                  <>
                    {iframeLoading && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xs flex flex-col items-center justify-center text-white z-10 pointer-events-none">
                        <div className="w-7 h-7 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2"></div>
                        <span className="text-xs font-bold">Memuat Demo Agent Portal...</span>
                      </div>
                    )}
                    <iframe
                      key={iframeKey}
                      src={agentPortalUrl}
                      title="Demo Portal Agent Travel Buddies"
                      className="w-full h-full border-0 bg-white"
                      onLoad={() => setIframeLoading(false)}
                      allow="clipboard-read; clipboard-write;"
                    />
                  </>
                ) : !agentImgError ? (
                  <img
                    src="/images/preview-agent-portal.png"
                    alt="Screenshot Portal Agent Travel Buddies"
                    className="w-full h-full object-cover object-top"
                    onError={() => setAgentImgError(true)}
                  />
                ) : (
                  <div className="p-4 text-center flex flex-col items-center justify-center text-slate-400 bg-slate-50 w-full h-full border-2 border-dashed border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066d6] flex items-center justify-center mb-1.5 shadow-2xs">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      Placeholder Screenshot Portal Agent B2B
                    </span>
                    <span className="text-[10px] text-slate-500 mt-0.5 max-w-xs">
                      File: <code className="bg-white px-1 py-0.5 rounded border border-slate-200 text-[#0066d6] font-mono">/public/images/preview-agent-portal.png</code>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Poin Kapabilitas */}
            <ul className="space-y-2 text-[13px] sm:text-[14.5px] text-slate-800 leading-snug mb-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                <span>
                  <strong>Core Ticketing Engine:</strong> Pencarian rute maskapai, issued e-ticket, dan kalkulasi komisi otomatis.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                <span>
                  <strong>Fokus Pengujian:</strong> Rekonsiliasi mutasi tiket vs payment gateway agar pencatatan keuangan 100% klop.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Button: Direct URL Link & Expand */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setIsDemoExpanded(true)}
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0066d6] hover:text-[#004bb3] cursor-pointer py-1"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Perbesar Demo Layar Penuh</span>
            </button>

            <a
              href={agentPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066d6] hover:bg-[#0052b3] text-white text-xs sm:text-sm font-extrabold shadow-2xs hover:shadow transition-all shrink-0 cursor-pointer w-full sm:w-auto"
            >
              <span>Buka di Tab Baru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ================= CARD 2: MOBILE APPS TRAVEL BUDDIES (B2C) ================= */}
        <div className="slide-card p-3.5 sm:p-5 flex flex-col justify-between border-t-4 border-t-[#0066d6] shadow-sm hover:shadow-md transition-all">
          <div>
            {/* Header Card 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066d6] shrink-0 shadow-2xs">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    Mobile Apps Travel Buddies
                  </h3>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0066d6] block mt-0.5">
                    B2C Customer Mobile Booking Experience
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-[13px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Status: <strong className="font-extrabold">Testing &amp; Rekonsiliasi</strong>
                </span>
              </div>
            </div>

            {/* Screenshot Frame / Placeholder */}
            <div className="rounded-xl border border-slate-200 bg-slate-900 overflow-hidden shadow-xs mb-3">
              {/* Mobile Phone Mockup Bar */}
              <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between border-b border-slate-700 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="font-mono text-[10px] text-slate-300">Travel Buddies Mobile App</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400">
                  <span>iOS &amp; Android</span>
                </div>
              </div>

              {/* Image Area with Fallback Placeholder */}
              <div className="relative w-full h-44 sm:h-48 md:h-52 bg-slate-900/5 flex items-center justify-center overflow-hidden">
                {!mobileImgError ? (
                  <img
                    src="/images/preview-mobile-app.png"
                    alt="Screenshot Mobile App Travel Buddies"
                    className="w-full h-full object-cover object-top"
                    onError={() => setMobileImgError(true)}
                  />
                ) : (
                  <div className="p-3 text-center flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50/50 w-full h-full border-2 border-dashed border-blue-200/80">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0066d6] flex items-center justify-center mb-1.5 shadow-2xs">
                      <Smartphone className="w-5 h-5" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/60 text-[#0066d6] text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-1 border border-blue-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6] animate-pulse"></span>
                      Native Smartphone Application
                    </span>

                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug">
                      Preview Belum Tersedia di Browser (Khusus Mobile Apps)
                    </h4>

                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 max-w-md leading-snug px-2">
                      Fitur ini tidak dapat dipratinjau langsung di web slide karena berjalan pada sistem operasi native smartphone. Pengujian alur booking dilakukan langsung melalui perangkat fisik (Build Internal APK / TestFlight).
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-2 text-[10px] font-bold text-slate-600">
                      <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                        📱 Android &amp; iOS Native
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                        🔍 Pengujian di Device Fisik
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                        ⚙️ Internal Build / APK
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Poin Kapabilitas */}
            <ul className="space-y-2 text-[13px] sm:text-[14.5px] text-slate-800 leading-snug mb-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                <span>
                  <strong>E-Ticket Otomatis:</strong> Tiket terintegrasi ke profil akun, riwayat booking, dan barcode check-in siap pakai.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                <span>
                  <strong>Pembayaran Digital Fleksibel:</strong> Terhubung dengan QRIS, Virtual Account, &amp; Kartu Kredit dengan status update instan.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Button: Direct URL Link */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs sm:text-[13px] text-slate-500 font-semibold truncate text-center sm:text-left">
              Akses Aplikasi: <strong className="text-slate-800">{mobileAppUrl}</strong>
            </span>
            <a
              href={mobileAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#0066d6] text-[#0066d6] hover:bg-blue-50 text-xs sm:text-sm font-extrabold shadow-2xs hover:shadow transition-all shrink-0 cursor-pointer w-full sm:w-auto"
            >
              <span>Buka Tampilan Mobile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>


      {/* ================= MODAL FULLSCREEN DEMO IFRAME ================= */}
      {isDemoExpanded && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col p-2 sm:p-6 lg:p-8 slide-fade-in">
          <div className="w-full h-full max-w-7xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            {/* Modal Header */}
            <div className="min-h-12 py-2 sm:py-0 bg-slate-900 px-3 sm:px-4 flex flex-wrap items-center justify-between text-white border-b border-slate-800 shrink-0 gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="font-extrabold text-xs sm:text-sm tracking-wide truncate">
                  Live Interactive Demo: Agent Portal
                </span>
                <span className="hidden md:inline text-xs text-slate-400 font-mono">
                  ({agentPortalUrl})
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
                  href={agentPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-2.5 py-1 rounded-lg bg-[#0066d6] hover:bg-[#0052b3] text-[11px] sm:text-xs font-semibold flex items-center gap-1 transition text-white cursor-pointer"
                >
                  <span>Tab Baru</span>
                  <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsDemoExpanded(false)}
                  className="px-2.5 sm:px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-[11px] sm:text-xs font-bold text-white flex items-center gap-1 transition cursor-pointer"
                >
                  <Minimize2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  <span>Tutup</span>
                </button>
              </div>
            </div>

            {/* Modal Iframe Body */}
            <div className="flex-1 w-full h-full relative bg-slate-100">
              <iframe
                key={`modal-${iframeKey}`}
                src={agentPortalUrl}
                title="Fullscreen Demo Portal Agent Travel Buddies"
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
