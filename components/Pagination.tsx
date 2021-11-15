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
	return (
		<div className={`flex justify-between items-center ${className}  text-lg ${!verbose && 'max-w-max'}`}>
			{hasPreviousPage && (
				<Link href={pageNumber === 2 ? '/blog' : `/blog/page/${pageNumber - 1}`}>
					<a
						className={`group items-center flex ${verbose ? 'py-2 px-4 rounded-sm' : 'pr-1'}`}
						title={`Browse to page ${pageNumber - 1}`}
					>
						<Arrow direction='left' size='lg' />
						{verbose && <span>Newer posts</span>}
					</a>
				</Link>
			)}
			{hasNextPage && (
				<Link href={`/blog/page/${pageNumber + 1}`}>
					<a
						className={`group items-center ml-auto flex ${verbose ? 'py-2 px-4 rounded-sm' : 'pl-1'}`}
						title={`Browse to page ${pageNumber + 1}`}
					>
						{verbose && <span>Older posts</span>}
						<Arrow direction='right' size='lg' />
					</a>
				</Link>
			)}
		</div>
	);
}
