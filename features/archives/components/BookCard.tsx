import Link from 'next/link';
import ImageCard from 'components/ImageCard';
import { IBookCard } from '../models/books';

type Props = {
	book: IBookCard;
};

export default function BookCard({ book }: Props): JSX.Element {
	const { name, author, cover, slug } = book;
	const url = `/library/${slug}`;

	return (
		<div className='flex flex-col items-start  max-w-max h-full'>
			<Link href={url} passHref>
				<a title={`${name} by ${author}`}>
					<ImageCard cover={cover} height={454} width={301} className='h-initial' />
				</a>
			</Link>
			<Link href={url} passHref>
				<a>
					<h3 className='mt-5 font-bold text-md hover:text-primary-light dark:hover:text-primary-dark'>{name}</h3>
				</a>
			</Link>
			<p>{author}</p>
		</div>
	);
}
