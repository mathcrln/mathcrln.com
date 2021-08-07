import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import BOOKS from '@/data/mocks/books';
import ImageCard from '@/components/common/ImageCard';

export default function BookPage(): JSX.Element {
	const book = BOOKS[0];

	return (
		<Page title={book.title}>
			<PageHeader title={book.title} intro={book.author} />
			<ImageCard cover={book.cover} height={book.cover.height} width={book.cover.height} className='h-initial' />
		</Page>
	);
}
