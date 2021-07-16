import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import React from 'react';

import useDarkMode from '@/hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const [theme, setTheme] = useDarkMode();
	const toggleTheme = () => {
		setTheme('toggle');
	};

	return (
		<>
			<Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
		</>
	);
}
export default MyApp;
