import CustomLink from './elements/Link';
import Arrow from './icons/Arrow';

type Props = {
	pageNumber: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};

export default function Pagination({ pageNumber, hasNextPage, hasPreviousPage }: Props): JSX.Element {
	return (
		<div className='flex justify-between my-5'>
			{hasPreviousPage && (
				<CustomLink
					href={pageNumber === 2 ? '/blog' : `/blog/page/${pageNumber - 1}`}
					className='inline-block group my-10 mr-auto'
				>
					<Arrow direction='left' />
					<span>Newer posts</span>
				</CustomLink>
			)}
			{hasNextPage && (
				<CustomLink href={`/blog/page/${pageNumber + 1}`} className='inline-block group my-10 ml-auto'>
					<span>Older posts</span>
					<Arrow direction='right' />
				</CustomLink>
			)}
		</div>
	);
}
