import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { H2, H3, H4, H5, H6, P, UL, LI, OL, HR, IMG, BLOCKQUOTE } from '@/common/components/MDXElements';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import CustomLink from '@/common/components/elements/Link';

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
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<MDXProvider components={components}>
			<Header />
			<Component {...pageProps} />
			<Footer className='mt-auto' />
		</MDXProvider>
	);
}
export default MyApp;
