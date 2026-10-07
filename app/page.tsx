'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SlideOpening from '../components/slides/SlideOpening';
import Slide1Overview from '../components/slides/Slide1Overview';
import Slide2AirlineTicketing from '../components/slides/Slide2AirlineTicketing';
import Slide3PriceReconciliation from '../components/slides/Slide3PriceReconciliation';
import Slide4LeadsDistribution from '../components/slides/Slide4LeadsDistribution';
import Slide5CmsExpansion from '../components/slides/Slide5CmsExpansion';
import Slide6ReportingDashboard from '../components/slides/Slide6ReportingDashboard';
import SlideSectionNextStrategy from '../components/slides/SlideSectionNextStrategy';
import Slide2Milestones from '../components/slides/Slide2Milestones';
import Slide9CapacityAllocation from '../components/slides/Slide9CapacityAllocation';
import Slide10QualityChallenges from '../components/slides/Slide10QualityChallenges';
import SlideClosingCover from '../components/slides/SlideClosingCover';
import ComingSoonPage from '../components/ComingSoonPage';

export default function PresentationPage() {
  const slides = useMemo(
    () => [
      { id: 0, title: 'Cover: Laporan Capaian Tech Team', component: SlideOpening },
      { id: 1, title: '1. Executive Overview (Infografis Q3)', component: Slide1Overview },
      { id: 2, title: '2. Kesiapan Tiket Pesawat: Portal Agent & Mobile Apps', component: Slide2AirlineTicketing },
      { id: 3, title: '3. Rekonsiliasi Harga Partner & Price Monitoring', component: Slide3PriceReconciliation },
      { id: 4, title: '4. Distribusi Leads Termonitor (Private Trip)', component: Slide4LeadsDistribution },
      { id: 5, title: '5. Ekspansi Modul CMS Internal & RBAC', component: Slide5CmsExpansion },
      { id: 6, title: '6. Dashboard Reporting Terpadu di CMS', component: Slide6ReportingDashboard },
      { id: 7, title: 'Transisi: Next Strategy', component: SlideSectionNextStrategy },
      { id: 8, title: '8. Gantt Chart Milestone (Plan Q4 2026)', component: Slide2Milestones },
      { id: 9, title: '9. Alokasi Kapasitas & Refactoring Q4', component: Slide9CapacityAllocation },
      { id: 10, title: '10. Realita Kualitas & Kendala Testing (QA & Device)', component: Slide10QualityChallenges },
      { id: 11, title: 'Closing: Thank You & Sesi Tanya Jawab', component: SlideClosingCover },
    ],
    [],
  );

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSlides, setShowSlides] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get('view') === 'slides' ||
        params.get('admin') === 'true' ||
        params.get('secret') === 'travelbuddies'
      ) {
        setShowSlides(true);
      }
    }
  }, []);

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex];
  const CurrentComponent = currentSlide.component as React.ComponentType<{
    onNext?: () => void;
    goToSlide?: (idx: number) => void;
  }>;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = (idx: number) => {
    if (idx >= 0 && idx < totalSlides) {
      setCurrentSlideIndex(idx);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  if (!showSlides) {
    return (
      <main className="relative w-screen h-screen overflow-hidden">
        <ComingSoonPage onUnlockSlides={() => setShowSlides(true)} />
      </main>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-50 text-slate-900 relative">
      {/* Top Presentation Navigation Bar (Normal Light Mode) */}
      <header className="h-13 border-b border-slate-200 bg-white px-4 sm:px-6 flex items-center justify-between shrink-0 z-30 shadow-xs">
        {/* Left: Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0066d6]"></div>
          <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-wide">
            Travel Buddies <span className="text-[#0066d6] font-semibold">| Tech Team Report</span>
          </span>
        </div>

        {/* Center: Slide Jump Dropdown */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-xs">
            <span className="text-slate-500 font-medium">Slide</span>
            <span className="font-extrabold text-[#0066d6]">{currentSlideIndex + 1}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 font-semibold">{totalSlides}</span>
          </div>

          <select
            value={currentSlideIndex}
            onChange={(e) => goToSlide(Number(e.target.value))}
            className="bg-white border border-slate-200 text-xs text-slate-700 font-medium rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#0066d6] cursor-pointer max-w-[260px] truncate hidden sm:block shadow-xs"
          >
            {slides.map((s, idx) => (
              <option key={s.id} value={idx} className="bg-white text-slate-800">
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            title="Slide Sebelumnya (←)"
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            title="Slide Berikutnya (→)"
            className="px-3.5 py-1.5 rounded-lg bg-[#0066d6] hover:bg-[#0052b3] text-white text-xs font-bold flex items-center gap-1 transition shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={toggleFullscreen}
            title="Mode Layar Penuh (F)"
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition ml-1 shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isFullscreen
                    ? 'M9 9L4 4m0 0v4m0-4h4m6 5l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h-4m6-5l5 5m0 0v-4m0 4h-4'
                    : 'M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                }
              />
            </svg>
          </button>

          <button
            onClick={() => setShowSlides(false)}
            title="Kunci Presentasi ke Halaman Coming Soon"
            className="p-1.5 px-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 transition text-xs font-bold flex items-center gap-1.5 ml-1 shadow-xs cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="hidden sm:inline">Kunci Slide</span>
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1 shrink-0 overflow-hidden z-20">
        <div
          className="bg-[#0066d6] h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Main Slide Viewport: Responsive scroll on mobile, strict presentation mode on desktop */}
      <main className="flex-1 relative overflow-y-auto lg:overflow-hidden flex flex-col p-2 sm:py-3 sm:px-4 md:py-2.5 md:px-5 min-h-0 bg-slate-50">
        <CurrentComponent onNext={nextSlide} goToSlide={goToSlide} />
      </main>

      {/* Bottom Footer Bar (Normal Light Mode) */}
      <footer className="h-8 border-t border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between text-[11px] text-slate-500 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066d6]"></span>
          <span className="font-semibold text-slate-700">Travel Buddies — Laporan Kuartal Tech Team (Q3 2026)</span>
        </div>
        <div className="hidden sm:block text-slate-500">
          Gunakan tombol panah keyboard ← → atau klik Next untuk berpindah slide
        </div>
        <div>
          <span className="text-[#0066d6] font-extrabold">
            Slide {currentSlideIndex + 1} / {totalSlides}
          </span>
        </div>
      </footer>
    </div>
  );
}
