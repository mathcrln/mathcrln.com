import React, { ChangeEvent } from 'react';
import { Logo } from 'components/icons';
import Link from 'next/link';
import { FOOTER_LINKS } from 'data/LINKS';
import CustomLink from 'components/elements/Link';
import ThemeSelect, { useDarkMode, ThemeMode } from 'src/themes';
import Container from './Container';

export default function Footer({ className = '' }: { className?: string }): JSX.Element {
	const [, themeMode, selectThemeMode] = useDarkMode();

	const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const mode: ThemeMode = e.target.value as unknown as ThemeMode;
		selectThemeMode(mode);
	};

	return (
		<footer className={`mx-auto w-full py-8 ${className}`}>
			<Container>
				<hr className='border-1 mb-8 w-full border-gray-200 dark:border-gray-700' />
				<div className='| grid grid-cols-2 gap-10 text-center md:grid-cols-4 md:text-left'>
					{FOOTER_LINKS.map((column) => (
						<div key={column.name} className='space-y-3'>
							<p className='font-bold'>{column.name}</p>
							{column.links.map((link) => (
								<p className='text-gray-600 dark:text-gray-400' key={link.title}>
									{link.isInternal ? (
										<Link href={link.slug} title={link.title}>
											{link.title}
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
				<div className='mt-4 grid items-center justify-center gap-2 space-x-2 py-4 text-center md:grid-cols-3 md:text-left'>
					<div>
						<p>
							© 2021, Jerry by <CustomLink href='https://twitter.com/mathcrln'>@mathcrln</CustomLink>{' '}
						</p>
						<div className='flex space-x-2'>
							<CustomLink href='/log' className='group inline-block'>
								Changelog
							</CustomLink>
							<span className='block'>|</span>
							<CustomLink href='/legal' className='group inline-block'>
								Legal Notice
							</CustomLink>
						</div>
					</div>

					<div />
					<div className='flex justify-center space-x-2 text-center md:place-self-end'>
						<ThemeSelect selected={themeMode} onChange={handleThemeChange} />
					</div>
				</div>
			</Container>
		</footer>
	);
}
