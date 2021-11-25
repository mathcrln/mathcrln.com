import React, { ChangeEvent } from 'react';
import { Logo } from 'components/icons';
import Link from 'next/link';
import { FOOTER_LINKS } from 'data/LINKS';
import CustomLink from 'components/elements/Link';
import ThemeSelect, { useDarkMode, ThemeMode } from 'features/themes';
import Container from './Container';

export default function Footer({ className = '' }: { className?: string }): JSX.Element {
	const [, themeMode, selectThemeMode] = useDarkMode();

	const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const mode: ThemeMode = e.target.value as unknown as ThemeMode;
		selectThemeMode(mode);
	};

	return (
		<footer className={`w-full mx-auto py-8 ${className}`}>
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
				<div className='py-4 space-x-2 mt-4 grid md:grid-cols-3 gap-2 text-center md:text-left items-center justify-center'>
					<div>
						<p>
							© 2021, Jerry by <CustomLink href='https://twitter.com/mathcrln'>@mathcrln</CustomLink>{' '}
						</p>
						<div className='flex space-x-2'>
							<CustomLink href='/log' className='inline-block group'>
								Changelog
							</CustomLink>
							<span className='block'>|</span>
							<CustomLink href='/legal' className='inline-block group'>
								Legal Notice
							</CustomLink>
						</div>
					</div>

					<div />
					<div className='flex space-x-2 text-center justify-center md:place-self-end'>
						<ThemeSelect selected={themeMode} onChange={handleThemeChange} />
					</div>
				</div>
			</Container>
		</footer>
	);
}
