import PageHeader from '@/components/common/PageHeader';
import { GetStaticProps } from 'next';
import client from '@/graphql/apollo-client';
import { BLOGPAGE_POSTS } from '@/graphql/queries/posts';
import Page from '@/layout/Page';
import PostCard, { IPost } from '@/components/articles/components/PostCard';

export default function Articles({ posts }: { posts: IPost[] }): JSX.Element {
	return (
		<Page title='Blog'>
			<PageHeader title='Articles' intro='Sharing ideas and discoveries in a few words' className='mb-20' />
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
				{posts?.map((post: IPost) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = (await client.query({ query: BLOGPAGE_POSTS })).data.posts || null;

	return {
		props: {
			posts,
			revalidate: 60,
		},
	};
};
