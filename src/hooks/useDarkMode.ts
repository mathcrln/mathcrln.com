import { useState, useEffect } from 'react';
import useMedia from './useMedia';

const useDarkMode = (): Readonly<[string, (action: 'toggle' | 'auto') => void]> => {
	const [theme, setTheme] = useState<string>('light');

	const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

	const toggleTheme = (action: 'toggle' | 'auto') => {
		// Using the 'media' query
		if (action === 'auto') {
			window.localStorage.removeItem('theme');
			if (prefersDarkMode) {
				setTheme('dark');
				document.documentElement.classList.add('dark');
			} else {
				setTheme('light');
			}
		}
		// Using the button
		else if (theme === 'light') {
			window.localStorage.setItem('theme', 'dark');
			setTheme('dark');
			document.documentElement.classList.add('dark');
		} else {
			window.localStorage.setItem('theme', 'light');
			setTheme('light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (localTheme) {
			window.localStorage.setItem('theme', localTheme);
			if (localTheme === 'dark') {
				document.documentElement.classList.add('dark');
			}
			setTheme(localTheme);
		} else if (prefersDarkMode) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			document.documentElement.classList.remove('dark');
		}
	}, [prefersDarkMode]);

	return [theme, toggleTheme];
};

export default useDarkMode;
