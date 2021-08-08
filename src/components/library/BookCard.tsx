import { IBookCard } from 'src/types/books';
import ImageCard from '../common/ImageCard';

type Props = {
	book: IBookCard;
};

export default function BookCard({ book }: Props): JSX.Element {
	const { name, author, cover } = book;

	return (
		<div className='flex flex-col items-start max-w-max m-auto h-full'>
			<ImageCard cover={cover} height={454} width={301} className='h-initial' />
			<h3 className='mt-5 font-bold text-md'>{name}</h3>
			<p>{author}</p>
		</div>
	);
}
