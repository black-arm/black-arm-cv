import { Navbar } from '@/components/smart/navbar/Navbar';
import { Footer } from '@/components/smart/footer/Footer';
import Head from 'next/head';
import { usePortfolioTitle } from '../../../hooks';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const title = usePortfolioTitle();

  return <>
    <Head>
      <title>{ title }</title>
      <link rel="icon" href="/images/favicon.ico"></link>
    </Head>
    <Navbar />
      <div className="sm:flex sm:flex-col md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 items-stretch min-h-[70vh]">
        { children }
      </div>
    <Footer />
  </>;
}