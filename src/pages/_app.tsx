
import '../globals.css';
import { Layout } from '@/components/smart/layout/Layout';
import { AppProps } from 'next/app';

export default function MyApp({
  Component,
  pageProps
}: AppProps) {

  return <Layout>
      <Component {...pageProps} />
    </Layout>;
}