import BookCard from '@/components/library/BookCard';
import PageHeader from 'src/common/PageHeader';
import Page from '@/layout/Page';
import { GetStaticProps } from 'next';
import { getArchivesCards } from '@/graphql/queries/archives';
import { IBook } from '@/types/books';

export default function Library({ archives }: { archives: IBook[] }): JSX.Element {
	return (
		<Page title='Library'>
			<PageHeader title='Library'>
				<p>Here are some of the books I have enjoyed and learned from lately.</p>
			</PageHeader>
			<div className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-10'>
				{archives.map((archive) => (
					<BookCard key={archive.name} book={archive} />
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
