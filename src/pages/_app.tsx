import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { H2, H3, P, A, UL, LI, OL } from '@/components/shared/MDXElements';
import initializeObserver from '@/utils/polyfills';

initializeObserver();

const components = {
	h2: H2,
	h3: H3,
	p: P,
	a: A,
	ul: UL,
	li: LI,
	ol: OL,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<MDXProvider components={components}>
			<Component {...pageProps} />
		</MDXProvider>
	);
}
export default MyApp;
