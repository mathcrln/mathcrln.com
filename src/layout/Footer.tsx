import { useState, ChangeEvent } from 'react';
import Logo from '@/components/assets/Logo';
import Sun from '@/components/assets/Sun';
import Moon from '@/components/assets/Moon';
import SystemComputer from '@/components/assets/Computer';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/links';
import useDarkMode, { ThemeMode } from '@/hooks/useDarkMode';
import Select from '@/components/shared/CustomElements/Select';
import Container from './Container';

export default function Footer({ className = '' }: { className: string }): JSX.Element {
	const [, themeMode, selectThemeMode] = useDarkMode();
	const [language, setLanguage] = useState('FR');

	const languages = [
		{
			value: 'FR',
			title: 'FR',
			label: 'Français / French',
			icon: (
				<span role='img' aria-label='US Flag'>
					🇫🇷
				</span>
			),
		},
		{
			value: 'EN',
			title: 'EN',
			label: 'Anglais / English',
			icon: (
				<span role='img' aria-label='US Flag'>
					🇺🇸
				</span>
			),
		},
	];
	const themeOptions = [
		{ value: ThemeMode.SYSTEM, title: 'System', label: 'Follow System Settings', icon: <SystemComputer /> },
		{ value: ThemeMode.DARK, title: 'Dark', label: 'Activate Dark Mode', icon: <Sun /> },
		{ value: ThemeMode.LIGHT, title: 'Light', label: 'Activate Light Mode', icon: <Moon /> },
	];
	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value);
	};

	const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const mode: ThemeMode = e.target.value as unknown as ThemeMode;
		selectThemeMode(mode);
	};
	return (
		<footer className={`w-full mx-auto py-8   ${className}`}>
			<Container>
				<hr className='w-full border-1 border-gray-200 dark:border-gray-700 mb-8' />
				<div className='grid grid-cols-2 text-center | md:text-left md:grid-cols-4 gap-10'>
					{FOOTER_LINKS.map((column) => (
						<div key={column.name} className='space-y-3'>
							<p className='font-bold'>{column.name}</p>
							{column.links.map((link) => (
								<p className='text-gray-600 dark:text-gray-400' key={link.title}>
									{link.isInternal ? (
										<Link href={link.slug}>
											<a title={link.title}>{link.title}</a>
										</Link>
									) : (
										<a href={link.slug} title={link.title} target='_blank' rel='noreferrer'>
											{link.title}
										</a>
									)}
								</p>
							))}
						</div>
					))}
					<Logo className='w-8 place-self-center' />
				</div>
				<div className='py-4 space-x-2 mt-4 grid md:grid-cols-3 gap-2 items-center justify-center'>
					<p>© 2021, Jerry by @mathcrln</p>
					<div />
					<div className='flex space-x-2 text-center '>
						<Select
							label='Change Language'
							id='lang-selector'
							options={languages}
							selected={language}
							onChange={handleLanguageChange}
						/>

						<Select
							label='Change Color Scheme'
							id='theme-selector'
							options={themeOptions}
							selected={themeMode}
							onChange={handleThemeChange}
						/>
					</div>
				</div>
			</Container>
		</footer>
	);
}
