import { IHeading, ITableOfContents } from '@/utils/getTableOfContents';
import Link from 'next/dist/client/link';

export default function TableOfContents({ toc }: { toc: ITableOfContents }): JSX.Element {
	return (
		<>
			<h2 className='font-bold text-lg'>Table of Contents</h2>
			<nav aria-label='Table of contents'>
				{toc &&
					toc.map((heading: IHeading) => (
						<p className='my-2' key={heading.title}>
							<Link href={heading.link} passHref>
								<a className='mb-0 cursor-pointer hover:text-primary-light dark:hover:text-primary-dark'>
									{heading.title}
								</a>
							</Link>
						</p>
					))}
			</nav>
		</>
	);
}
