import BookCard from 'src/archives/components/BookCard';
import PageHeader from '@/common/components/PageHeader';
import Page from '@/common/components/layout/Page';
import { GetStaticProps } from 'next';
import { getArchivesCards } from 'src/archives/graphql/archives';
import { IBook } from 'src/archives/models/books';

export default function Library({ archives }: { archives: IBook[] }): JSX.Element {
	return (
		<Page
			seo={{
				title: 'Library',
				description: 'Here are some books, movies or articles I recently loved.',
			}}
		>
			<PageHeader title='Library'>
				<p>Here are some of the books, movies or articles that I have enjoyed and learned from lately.</p>
			</PageHeader>
			<div className='mt-16 grid grid-cols-2 gap-10 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5'>
				{archives.map((archive) => (
					<BookCard
						key={archive.name}
						coverSrc={archive.cover?.url}
						title={archive.name}
						author={archive.author}
						url={`/library/${archive.slug}`}
					/>
				))}
			</div>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const archives = await getArchivesCards(30);

	return {
		props: {
			archives,
		},
		revalidate: 60,
	};
};
