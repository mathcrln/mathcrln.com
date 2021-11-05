import PageHeader from 'components/PageHeader';
import { GetStaticProps } from 'next';
import { getPostsCards } from 'features/posts/graphql/posts';
import Page from '@/components/layout/Page';
import PostCard, { IPost } from 'features/posts/components/PostCard';

export default function Articles({ posts }: { posts: IPost[] }): JSX.Element {
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
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPostsCards(50);

	return {
		props: {
			posts,
		},
		revalidate: 60,
	};
};
