import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { H2, H3, H4, H5, H6, P, UL, LI, OL, HR, IMG, BLOCKQUOTE } from 'components/MDXElements';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CustomLink from 'components/elements/Link';
import 'styles/globals.css';
import { useEffect } from 'react';
import * as gAnalytics from 'lib/google-analytics';
import SEO from 'lib/next-seo.config';
import YouTubePlayer from '@/components/YouTubePlayer';

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
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gAnalytics.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<MDXProvider components={components}>
			<DefaultSeo {...SEO} />
			<Header />
			<Component {...pageProps} />
			<Footer className='mt-auto' />
		</MDXProvider>
	);
}
export default MyApp;
