import CardText from '@/common/components/Cards/CardText';
import { BookCoverLink } from './BookCover';

export default function BookCard({
	coverSrc,
	title = '',
	author = '',
	url = '#',
}: {
	title: string;
	author: string;
	coverSrc: string;
	url: string;
}): JSX.Element {
	return (
		<div className='flex h-full max-w-max  flex-col items-start'>
			<BookCoverLink title={title} coverSrc={coverSrc} author={author} url={url} />
			<CardText title={title} details={author} url={url} options={{ titleSize: 'lg' }} />
		</div>
	);
}
