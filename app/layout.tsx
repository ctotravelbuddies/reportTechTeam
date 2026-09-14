import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Travel Buddies — Technology Project Planning',
  description: 'Technology project planning roadmap Travel Buddies',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
