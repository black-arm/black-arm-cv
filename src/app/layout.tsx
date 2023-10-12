'use client';

import { Navbar } from '@/components/smart/navbar/Navbar';
import './globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';

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
        {children}
      </QueryClientProvider>
      </body>

    </html>
  );
}
