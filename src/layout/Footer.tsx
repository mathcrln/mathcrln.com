import Logo from '@/components/assets/Logo';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/links';
import Moon from '@/components/assets/Moon';
import Container from './Container';

export default function Footer({ className = '' }: { className: string }): JSX.Element {
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
				<div className='py-4 space-x-2 grid grid-cols-3 items-center'>
					<p>© 2021 Mathieu Céraline</p>
					<div className='border rounded-lg border-gray-300 w-16 space-x-1 text-center flex items-center justify-center h-full place-self-end'>
						<span role='img' className='block' aria-label='French Flag'>
							🇫🇷
						</span>
						<select name='theme' id='theme' className='appearance-none focus:outline-none dark:appearance-none'>
							<option value='1'>FR</option>
							<option value='1'>EN</option>
							<option value='1'>ES</option>
						</select>
					</div>
					<div className='border rounded-lg border-gray-300 w-28 px-4 py-2 text-center flex space-x-2 items-center justify-center group group-focus:ring-2 place-self-end'>
						<Moon />
						<select name='theme' id='theme' className='appearance-none focus:outline-none dark:appearance-none'>
							<option value='system'>System</option>
							<option value='light'>Light</option>
							<option value='dark'>Dark</option>
						</select>
					</div>
				</div>
			</Container>
		</footer>
	);
}
