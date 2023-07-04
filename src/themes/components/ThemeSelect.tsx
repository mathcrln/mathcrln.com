import { ChangeEvent } from 'react';
import Select from '@/common/components/elements/Select';
import SystemComputer from '@/common/components/icons/Computer';
import { Moon, Sun } from '@/common/components/icons';
import { ThemeMode } from '../theme.model';
import useDarkMode from '../hooks/useDarkMode';

export default function ThemeSelect(): JSX.Element {
	const [, themeMode, selectThemeMode] = useDarkMode();
	const themeOptions = [
		{ value: ThemeMode.SYSTEM, title: 'System', label: 'Follow System Settings', icon: <SystemComputer /> },
		{ value: ThemeMode.DARK, title: 'Dark', label: 'Activate Dark Mode', icon: <Sun /> },
		{ value: ThemeMode.LIGHT, title: 'Light', label: 'Activate Light Mode', icon: <Moon /> },
	];
	const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const mode: ThemeMode = e.target.value as unknown as ThemeMode;
		selectThemeMode(mode);
	};

	return (
		<Select
			label='Change Color Scheme'
			id='theme-selector'
			options={themeOptions}
			selected={themeMode}
			onChange={handleThemeChange}
		/>
	);
}
