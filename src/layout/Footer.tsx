/* eslint-disable jsx-a11y/no-onchange */
import { ChangeEvent } from 'react';
import Logo from '@/components/assets/Logo';
import Sun from '@/components/assets/Sun';
import Moon from '@/components/assets/Moon';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/links';
import useDarkMode, { Theme, ThemeMode } from '@/hooks/useDarkMode';
import Container from './Container';

export default function Footer({ className = '' }: { className: string }): JSX.Element {
	const [theme, themeMode, selectThemeMode] = useDarkMode();
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
				<div className='py-4 space-x-2 grid md:grid-cols-3 items-center justify-center'>
					<p>© 2021 Mathieu Céraline</p>
					<div className='border text-black dark:text-gray-300  rounded-lg border-gray-300 dark:border-gray-600 px-4 py-2 space-x-1 text-center flex items-center justify-center h-full place-self-center  md:place-self-end focus-within:ring-2 ring-primary-dark'>
						<span role='img' className='block' aria-label='French Flag'>
							🇫🇷
						</span>
						<select className='appearance-none focus:outline-none  dark:appearance-none '>
							<option value='1'>FR</option>
							<option value='1'>EN</option>
							<option value='1'>ES</option>
						</select>
					</div>
					<div className='border text-black dark:text-gray-300  rounded-lg border-gray-300 dark:border-gray-600 w-28 px-4 py-2 text-center flex space-x-2 items-center justify-center place-self-center  md:place-self-end focus-within:ring-2 ring-primary-dark'>
						{theme === Theme.LIGHT && <Moon className='' />}
						{theme === Theme.DARK && <Sun className='' />}
						<select
							className='appearance-none focus:outline-none dark:appearance-none'
							onChange={handleThemeChange}
							value={themeMode}
						>
							<option value={ThemeMode.SYSTEM}>System</option>
							<option value={ThemeMode.LIGHT}>Light</option>
							<option value={ThemeMode.DARK}>Dark</option>
						</select>
					</div>
				</div>
			</Container>
		</footer>
	);
}
