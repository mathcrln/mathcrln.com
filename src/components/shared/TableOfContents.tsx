import { IHeading, ITableOfContents } from '@/utils/getTableOfContents';
import Link from 'next/dist/client/link';
import { SyntheticEvent } from 'react';

export default function TableOfContents({ toc }: { toc: ITableOfContents }): JSX.Element {
	const scrollSmoothly = (e: SyntheticEvent, heading: IHeading) => {
		if (e.type === 'click') {
			e.preventDefault();
		}

		if (typeof window !== 'undefined' && typeof document != null) {
			document?.querySelector(`${heading.link}`)?.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};
	return (
		<>
			<h2 className='font-bold text-lg'>Table of Contents</h2>
			<nav aria-label='Table of contents'>
				{toc &&
					toc.map((heading: IHeading) => (
						<p className='my-2' key={heading.title}>
							<Link href={heading.link} passHref>
								<a
									tabIndex={0}
									role='link'
									className='mb-0 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark'
									onClick={(e) => scrollSmoothly(e, heading)}
									onKeyDown={(e) => scrollSmoothly(e, heading)}
								>
									{heading.title}
								</a>
							</Link>
						</p>
					))}
			</nav>
		</>
	);
}
