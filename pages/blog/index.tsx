import PageHeader from 'components/PageHeader';
import { GetStaticProps } from 'next';
import { getPaginatedPostsCards } from 'features/blog/graphql/posts';
import Page from '@/components/layout/Page';
import PostCard, { IPost } from 'features/blog/components/PostCard';
import Pagination from '@/components/Pagination';

export default function Articles({ posts, hasNextPage }: { posts: IPost[]; hasNextPage: boolean }): JSX.Element {
	return (
		<Page
			seo={{
				title: 'Blog',
				description: 'All my posts on web development, productivity, self-help and creativity.',
			}}
		>
			<PageHeader title='Blog' className='mb-20'>
				<p>Sharing ideas and discoveries in a few words</p>
			</PageHeader>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
				{posts?.map((post: IPost) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
			<Pagination pageNumber={1} hasPreviousPage={false} hasNextPage={hasNextPage} />
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const currentPage = await getPaginatedPostsCards(9);
	const posts = currentPage?.edges?.map((edge) => edge.node);
	const { hasNextPage } = currentPage?.pageInfo;

	return {
		props: {
			posts,
			hasNextPage,
		},
		revalidate: 60,
	};
};
