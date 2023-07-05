import PageHeader from '@/common/components/PageHeader';
import { GetStaticProps } from 'next';
import { getNumberOfPosts, getPaginatedPostsCards } from '@/blog/graphql/posts';
import Page from '@/common/components/layout/Page';
import PostCard, { IPost } from '@/blog/components/PostCard';
import Pagination from '@/common/components/Pagination';
import { CARDS_PER_PAGE } from 'site.config';
import useTranslation from 'next-translate/useTranslation';

export default function Articles({
	posts,
	hasNextPage,
	nbOfPages,
}: {
	posts: IPost[];
	hasNextPage: boolean;
	nbOfPages: number;
}): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<Page
			seo={{
				title: t('blog.title'),
				description: t('blog.description'),
			}}
		>
			<div className='mb-14 flex flex-col justify-between md:flex-row'>
				<PageHeader title={t('blog.title')}>
					<p>{t('blog.description')}</p>
				</PageHeader>
				<div className='flex items-center justify-between text-center md:flex-col md:justify-start'>
					<p>
						<span className='text-2xl md:text-4xl'>1</span> of {nbOfPages}
					</p>
					<Pagination pageNumber={1} hasPreviousPage={false} hasNextPage={hasNextPage} className='self-end md:mt-2' />
				</div>
			</div>
			<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
				{posts?.map((post: IPost) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
			<Pagination
				className='my-14 mx-auto max-w-max py-3 dark:border-gray-700'
				pageNumber={1}
				hasPreviousPage={false}
				hasNextPage={hasNextPage}
				verbose
			/>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const currentPage = await getPaginatedPostsCards(CARDS_PER_PAGE);
	const posts = currentPage?.edges?.map((edge) => edge.node);
	const nbOfPosts = await getNumberOfPosts();
	const nbOfPages = await Math.ceil(nbOfPosts / CARDS_PER_PAGE);
	const { hasNextPage } = currentPage?.pageInfo;

	return {
		props: {
			posts,
			hasNextPage,
			nbOfPages,
		},
		revalidate: 3600 * 24,
	};
};
