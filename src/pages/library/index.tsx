import BookCard from '@/components/library/BookCard';
import PageHeader from '@/components/shared/PageHeader';
import Page from '@/layout/Page';
import Link from 'next/link';
import slugify from 'slugify';

const BOOK = [
	{
		title: 'The 7 Habits of Highly Effective People',
		author: 'Stephen R. Covey',
		cover: {
			url: '/book-sample.jpg',
			height: 454,
			width: 301,
		},
	},
	{
		title: 'Steal like an artist',
		author: 'Austin Kleon',
		cover: {
			url: '/book.jpg',
			height: 454,
			width: 301,
		},
	},
];

export default function Library(): JSX.Element {
	return (
		<Page title='Library'>
			<PageHeader title='Library' intro='Here are some of the books I have enjoyed and learned from lately.' />
			<main className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-10'>
				{BOOK.map((book) => (
					<Link key={book.title} href={slugify(book.title)} passHref>
						<a>
							<BookCard book={book} />
						</a>
					</Link>
				))}
			</main>
		</Page>
	);
}
