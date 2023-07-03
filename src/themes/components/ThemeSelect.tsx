import React, { ChangeEvent } from 'react';
import Select from '@/components/elements/Select';
import SystemComputer from '@/components/icons/Computer';
import { Moon, Sun } from '@/components/icons';
import { ThemeMode } from '../theme.model';

const themeOptions = [
	{ value: ThemeMode.SYSTEM, title: 'System', label: 'Follow System Settings', icon: <SystemComputer /> },
	{ value: ThemeMode.DARK, title: 'Dark', label: 'Activate Dark Mode', icon: <Sun /> },
	{ value: ThemeMode.LIGHT, title: 'Light', label: 'Activate Light Mode', icon: <Moon /> },
];

type IThemeSelect = {
	selected: ThemeMode;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function ThemeSelect({ selected, onChange }: IThemeSelect): JSX.Element {
	return (
		<Select label='Change Color Scheme' id='theme-selector' options={themeOptions} selected={selected} onChange={onChange} />
	);
}
