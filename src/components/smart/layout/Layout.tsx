import { Navbar } from '@/components/dump/navbar/Navbar';
import '../../../globals.css';
import { Footer } from '@/components/dump/footer/Footer';
import Head from 'next/head';
import { devPortfolio } from '@/config/portfolio';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <>
    <Head>
      <title>{ devPortfolio.title }</title>
      <link rel="icon" href="/images/favicon.ico"></link>
    </Head>
    <Navbar />
      <div className="sm:flex sm:flex-col md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 items-stretch min-h-[70vh]">
        { children }
      </div>
    <Footer />
  </>;
}