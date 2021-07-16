import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';
import Layout from 'src/layout/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
export default MyApp;
