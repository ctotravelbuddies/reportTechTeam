import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel Buddies — Laporan Kuartal Tech Team (Q3 2026)',
  description:
    'Laporan Kuartal Tech Team Travel Buddies: Penguatan Kapabilitas, Operasional, dan Visibilitas Bisnis (Q3 2026)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-[#0066d6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
