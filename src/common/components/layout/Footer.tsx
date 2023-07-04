import React from 'react';
import { Logo } from '@/common/components/icons';
import Link from 'next/link';
import CustomLink from '@/common/components/elements/Link';
import ThemeSelect from 'src/themes';
import Container from './Container';
import LanguageSwitcher from '@/languages/components/LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation';

const FOOTER_LINKS = [
	{
		name: "What's next?",
		links: [
			{
				title: 'Resume',
				slug: '/resume',
				isInternal: true,
			},
			{
				title: 'Hire me',
				slug: '/hire',
				isInternal: true,
			},
			{
				title: 'Newsletter',
				slug: '/newsletter',
				isInternal: true,
			},
		],
	},
	{
		name: 'Connect',
		links: [
			{
				title: 'Twitter',
				slug: 'https://twitter.com/mathcrln',
				isInternal: false,
			},
			{
				title: 'Github',
				slug: 'https://github.com/mathcrln',
				isInternal: false,
			},
			{
				title: 'Linkedin',
				slug: 'https://linkedin.com/in/mathieu-ceraline',
				isInternal: false,
			},
		],
	},
	{
		name: 'Resources',
		links: [
			{
				title: 'Stack',
				slug: '/stack',
				isInternal: true,
			},
			{
				title: 'Now',
				slug: '/now',
				isInternal: true,
			},
			{
				title: 'Inspirations',
				slug: '/inspirations',
				isInternal: true,
			},
		],
	},
];
export default function Footer({ className = '' }: { className?: string }): JSX.Element {
	const { t } = useTranslation('common');

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
								{t('legal-notice')}
							</CustomLink>
						</div>
					</div>

					<div />
					<div className='flex justify-center space-x-2 text-center md:place-self-end'>
						<LanguageSwitcher />
						<ThemeSelect />
					</div>
				</div>
			</Container>
		</footer>
	);
}
