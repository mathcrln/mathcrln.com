import BookCard from 'src/archives/components/BookCard';
import PageHeader from '@/common/components/PageHeader';
import Page from '@/common/components/layout/Page';
import { GetStaticProps } from 'next';
import { getArchivesCards } from 'src/archives/graphql/archives';
import { IBook } from 'src/archives/models/books';
import useTranslation from 'next-translate/useTranslation';

export default function Library({ archives }: { archives: IBook[] }): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<Page
			seo={{
				title: t('library.title'),
				description: t('library.description'),
			}}
		>
			<PageHeader title={t('library.title')}>
				<p>{t('library.description')}</p>
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
