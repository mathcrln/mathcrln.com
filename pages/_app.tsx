import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { H2, H3, P, UL, LI, OL, HR, IMG, BLOCKQUOTE } from 'src/common/MDXElements';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import CustomLink from '@/common/components/elements/Link';
import TopBar from 'src/common/TopBar';

const components = {
	h2: H2,
	h3: H3,
	p: P,
	a: CustomLink,
	ul: UL,
	li: LI,
	ol: OL,
	hr: HR,
	blockquote: BLOCKQUOTE,
	img: IMG,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<MDXProvider components={components}>
			<TopBar />
			<Header />
			<Component {...pageProps} />
			<Footer className='mt-auto' />
		</MDXProvider>
	);
}
export default MyApp;
