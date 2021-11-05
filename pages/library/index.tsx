import BookCard from 'features/archives/components/BookCard';
import PageHeader from 'components/PageHeader';
import Page from '@/components/layout/Page';
import { GetStaticProps } from 'next';
import { getArchivesCards } from 'features/archives/graphql/archives';
import { IBook } from 'features/archives/models/books';

export default function Library({ archives }: { archives: IBook[] }): JSX.Element {
	return (
		<Page
			seo={{
				title: 'Library',
				description: 'Here are some books I recently loved.',
			}}
		>
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
		},
		revalidate: 60,
	};
};
