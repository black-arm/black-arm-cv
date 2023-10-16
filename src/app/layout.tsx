'use client';

import { Navbar } from '@/components/smart/navbar/Navbar';
import './globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Footer } from '@/components/dump/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = new QueryClient();

  return (
    <html lang="en" data-theme="light">
      <body>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="sm:flex sm:flex-col md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 items-stretch min-h-[70vh]">
          {children}
        </div>
        <Footer />
      </QueryClientProvider>
      </body>

    </html>
  );
}
