import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';

import initializeObserver from '@/utils/polyfills';

initializeObserver();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}
export default MyApp;
