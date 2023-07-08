import Link from 'next/link';
import React from 'react';
import Arrow from './icons/Arrow';

type Props = {
	pageNumber: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	verbose?: boolean;
	className?: string;
};

export default function Pagination({ pageNumber, hasNextPage, hasPreviousPage, verbose, className }: Props): JSX.Element {
	const styles =
		'group hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 focus:outline-none items-center flex';
	return (
		<div className={`flex items-center justify-between ${className} text-lg`}>
			{hasPreviousPage && (
				<Link
					href={pageNumber === 2 ? '/blog' : `/blog/page/${pageNumber - 1}`}
					className={`${styles} ${verbose ? 'rounded-sm px-4 py-2' : 'pr-1'}`}
					title={`Browse to page ${pageNumber - 1}`}
				>
					<Arrow direction='left' size='lg' />
					{verbose && <span>Newer posts</span>}
				</Link>
			)}
			{hasNextPage && (
				<Link
					href={`/blog/page/${pageNumber + 1}`}
					className={`${styles} ${verbose ? 'rounded-sm px-4 py-2' : 'pl-1'}`}
					title={`Browse to page ${pageNumber + 1}`}
				>
					{verbose && <span>Older posts</span>}
					<Arrow direction='right' size='lg' />
				</Link>
			)}
		</div>
	);
}
