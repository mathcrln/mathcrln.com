import { IHeading, ITableOfContents } from '@/utils/getTableOfContents';
import useIntersectionObserver from '@/utils/useIntersectionObserver';
import Link from 'next/dist/client/link';
import { useState } from 'react';
import scrollSmoothly from '@/utils/scrollSmoothly';

export default function TableOfContents({ toc }: { toc: ITableOfContents }): JSX.Element | null {
	const [activeId, setActiveId] = useState('');
	const getActiveStyles = (link: string) => (activeId === link.substring(1) ? 'font-bold dark:text-primary-dark' : '');

	useIntersectionObserver(setActiveId);

	if (!(toc.length > 0)) return null;

	return (
		<div>
			<h2 className='font-bold text-xl border-b border-gray-600 pb-2 mb-3 max-w-max'>Table of Contents</h2>

			<nav aria-label='ml-1 Table of contents'>
				{toc.map((heading: IHeading) => (
					<p className='my-2' key={heading.title}>
						<Link href={heading.link} passHref>
							<a
								tabIndex={0}
								role='link'
								className={`mb-0 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark ${getActiveStyles(
									heading.link
								)}`}
								onClick={(e) => scrollSmoothly(e, heading.link)}
								onKeyDown={(e) => scrollSmoothly(e, heading.link)}
							>
								{heading.title}
							</a>
						</Link>
					</p>
				))}
			</nav>
		</div>
	);
}
