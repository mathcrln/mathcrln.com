import Link from 'next/link';
import { IBookCard } from '@/modules/archives/models/books';
import ImageCard from '@/common/components/ImageCard';

type Props = {
	book: IBookCard;
};

export default function BookCard({ book }: Props): JSX.Element {
	const { name, author, cover, slug } = book;
	const url = `/library/${slug}`;

	return (
		<div className='flex flex-col items-start  max-w-max h-full'>
			<Link href={url} passHref>
				<a>
					<ImageCard cover={cover} height={454} width={301} className='h-initial' />
				</a>
			</Link>
			<Link href={url} passHref>
				<h3 className='mt-5 font-bold text-md'>{name}</h3>
			</Link>
			<p>{author}</p>
		</div>
	);
}
