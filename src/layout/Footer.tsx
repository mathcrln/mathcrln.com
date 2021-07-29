import Logo from '@/components/assets/Logo';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/data/links';
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
			</Container>
		</footer>
	);
}
