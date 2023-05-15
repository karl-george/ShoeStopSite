import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider, useSelector } from 'react-redux';
import { store } from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>ShoeStop</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
