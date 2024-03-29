import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { H2, H3, H4, H5, H6, P, UL, LI, OL, HR, IMG, BLOCKQUOTE } from '@/common/components/MDXElements';
import Footer from '@/common/components/layout/Footer';
import Header from '@/common/components/layout/Header';
import CustomLink from '@/common/components/elements/Link';
import 'styles/globals.css';
import React, { useEffect } from 'react';
import SEO from 'lib/next-seo.config';
import YouTubePlayer from '@/common/components/YouTubePlayer';
import Gallery from '@/common/components/Gallery';
import Analytics from '@/common/components/Analytics';

const components = {
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	p: P,
	a: CustomLink,
	ul: UL,
	li: LI,
	ol: OL,
	hr: HR,
	blockquote: BLOCKQUOTE,
	img: IMG,
	YouTubePlayer,
	Gallery,
};

function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<MDXProvider components={components}>
			<DefaultSeo {...SEO} />
			<Header />
			<Analytics />
			<Component {...pageProps} />
			<Footer className='mt-auto' />
		</MDXProvider>
	);
}
export default App;
