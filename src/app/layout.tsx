'use client'

import { Navbar } from '@/components/smart/navbar/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
