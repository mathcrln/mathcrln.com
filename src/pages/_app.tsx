import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';
import Layout from 'src/layout/Layout';
import useDarkMode from '@/hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const [theme, setTheme] = useDarkMode();
	const toggleTheme = () => {
		setTheme('toggle');
	};

	return (
		<>
			<Layout theme={theme} toggleTheme={toggleTheme}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
export default MyApp;
