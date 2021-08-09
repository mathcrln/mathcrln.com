import BookCard from '@/components/library/BookCard';
import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getArchivesCards } from '@/graphql/queries/archives';
import { IBook } from '@/types/books';

// const BOOK = [
// 	{
// 		title: 'The 7 Habits of Highly Effective People',
// 		author: 'Stephen R. Covey',
// 		cover: {
// 			url: '/book-sample.jpg',
// 			height: 454,
// 			width: 301,
// 		},
// 	},
// 	{
// 		title: 'Steal like an artist',
// 		author: 'Austin Kleon',
// 		cover: {
// 			url: '/book.jpg',
// 			height: 454,
// 			width: 301,
// 		},
// 	},
// ];

export default function Library({ archives }: { archives: IBook[] }): JSX.Element {
	return (
		<Page title='Library'>
			<PageHeader title='Library'>
				<p>Here are some of the books I have enjoyed and learned from lately.</p>
			</PageHeader>
			<div className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-10'>
				{archives.map((archive) => (
					<Link key={archive.name} href={`/library/${archive.slug}`} passHref>
						<a>
							<BookCard book={archive} />
						</a>
					</Link>
				))}
			</div>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const archives = await getArchivesCards(11);

	return {
		props: {
			archives,
			revalidate: 60,
		},
	};
};
