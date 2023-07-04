import LinkWrapper from '@/common/components/elements/LinkWrapper';
import ImageCard from '@/common/components/ImageCard';

export function BookCover({ coverSrc }: { coverSrc: string }): JSX.Element {
	return <ImageCard src={coverSrc || '/book-placeholder.png'} height={454} width={301} className='h-initial' />;
}

export function BookCoverLink({
	title,
	author,
	coverSrc,
	url,
}: {
	title: string;
	author: string;
	coverSrc: string;
	url: string;
}): JSX.Element {
	return (
		<LinkWrapper href={url} title={`${title} by ${author}`}>
			<BookCover coverSrc={coverSrc} />
		</LinkWrapper>
	);
}
