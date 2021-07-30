import { IHeading, ITableOfContents } from '@/utils/getTableOfContents';
import useIntersectionObserver from '@/utils/useIntersectionObserver';
import Link from 'next/dist/client/link';
import { useState } from 'react';
import scrollSmoothly from '@/utils/scrollSmoothly';

export default function TableOfContents({ toc }: { toc: ITableOfContents }): JSX.Element {
	const [activeId, setActiveId] = useState('');
	useIntersectionObserver(setActiveId);

	return (
		<aside>
			<h2 className='font-bold text-lg'>Table of Contents</h2>
			<nav aria-label='Table of contents'>
				{toc &&
					toc.map((heading: IHeading) => (
						<p className='my-2' key={heading.title}>
							<Link href={heading.link} passHref>
								<a
									tabIndex={0}
									role='link'
									className={`mb-0 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark ${
										activeId === heading.link.substring(1) ? 'font-extrabold dark:text-primary-dark' : ''
									}`}
									onClick={(e) => scrollSmoothly(e, heading.link)}
									onKeyDown={(e) => scrollSmoothly(e, heading.link)}
								>
									{heading.title}
								</a>
							</Link>
						</p>
					))}
			</nav>
		</aside>
	);
}
