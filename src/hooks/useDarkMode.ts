import { useState, useEffect } from 'react';
import useMedia from './useMedia';

export enum ThemeMode {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export enum Theme {
	LIGHT,
	DARK,
}

const useDarkMode = (): Readonly<[Theme, ThemeMode, (themeMode: ThemeMode) => void]> => {
	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
	const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.SYSTEM);

	const prefersDarkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

	const selectThemeMode = (mode: ThemeMode) => {
		switch (mode) {
			case ThemeMode.LIGHT:
				setTheme(Theme.LIGHT);
				document.documentElement.classList.remove('dark');
				window.localStorage.setItem('theme', 'light');
				break;
			case ThemeMode.DARK:
				setTheme(Theme.DARK);
				document.documentElement.classList.add('dark');
				window.localStorage.setItem('theme', 'dark');
				break;
			case ThemeMode.SYSTEM:
				window.localStorage.removeItem('theme');
				break;
			default:
				setTheme(Theme.LIGHT);
				break;
		}
		setThemeMode(mode);
	};

	useEffect(() => {
		if (themeMode === ThemeMode.SYSTEM && prefersDarkMode) {
			document.documentElement.classList.add('dark');
			setTheme(Theme.DARK);
		} else if (themeMode === ThemeMode.SYSTEM && !prefersDarkMode) {
			document.documentElement.classList.remove('dark');
			setTheme(Theme.LIGHT);
		}
	}, [prefersDarkMode, themeMode]);

	return [theme, themeMode, selectThemeMode];
};

export default useDarkMode;
