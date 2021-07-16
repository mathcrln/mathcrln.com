import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useDarkMode = (): any => {
	const [theme, setTheme] = useState('light');
	const [componentMounted, setComponentMounted] = useState(false);

	const setMode = (mode: any) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		if (theme === 'light') {
			setMode('dark');
			document.documentElement.classList.add('dark');
		} else {
			setMode('light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		if (localTheme && localTheme === 'light') {
			setTheme(localTheme);
		} else if (localTheme && localTheme === 'dark') {
			setTheme(localTheme);
		} else {
			setMode('light');
		}
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};

// import { useState, useEffect } from 'react';
// import useMedia from './useMedia';

// const useDarkMode = (): Readonly<[string, (action: 'toggle' | 'auto') => void, boolean]> => {
// 	const [theme, setTheme] = useState<string>('light');
// 	const [componentMounted, setComponentMounted] = useState(false);

// 	const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

// 	const toggleTheme = (action: 'toggle' | 'auto') => {
// 		// Using the 'media' query
// 		if (action === 'auto') {
// 			window.localStorage.removeItem('theme');
// 			if (prefersDarkMode) {
// 				setTheme('dark');
// 				document.documentElement.classList.add('dark');
// 			} else {
// 				setTheme('light');
// 			}
// 		}
// 		// Using the button
// 		else if (theme === 'light') {
// 			window.localStorage.setItem('theme', 'dark');
// 			setTheme('dark');
// 			document.documentElement.classList.add('dark');
// 		} else {
// 			window.localStorage.setItem('theme', 'light');
// 			setTheme('light');
// 			document.documentElement.classList.remove('dark');
// 		}
// 	};

// 	useEffect(() => {
// 		const localTheme = window.localStorage.getItem('theme');
// 		if (localTheme) {
// 			window.localStorage.setItem('theme', localTheme);
// 			if (localTheme === 'dark') {
// 				document.documentElement.classList.add('dark');
// 			}
// 			setTheme(localTheme);
// 		} else if (prefersDarkMode) {
// 			setTheme('dark');
// 			document.documentElement.classList.add('dark');
// 		} else {
// 			setTheme('light');
// 			document.documentElement.classList.remove('dark');
// 		}
// 		setComponentMounted(true);
// 	}, [prefersDarkMode]);

// 	return [theme, toggleTheme, componentMounted];
// };

// export default useDarkMode;
