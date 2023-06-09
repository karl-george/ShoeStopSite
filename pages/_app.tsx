import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import { store } from '@/redux/store';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Head>
          <title>ShoeStop</title>
        </Head>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
