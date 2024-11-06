'use client';

import '@/styles/globals.css';
import { Layout } from '@/components/smart/layout/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return <html lang="en">
  <body>
    <Layout>{children}</Layout>
  </body>
</html>;
}