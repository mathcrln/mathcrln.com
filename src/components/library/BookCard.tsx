import ImageCard from '../shared/ImageCard';

export default function BookCard({ book }: { book: any }): JSX.Element {
	const { title, author, cover } = book;

	return (
		<div className='flex flex-col items-start max-w-max m-auto h-full'>
			<ImageCard cover={cover} height={cover.height} width={cover.width} className='h-initial' />
			<h3 className='mt-5 font-bold text-md'>{title}</h3>
			<p>{author}</p>
		</div>
	);
}
