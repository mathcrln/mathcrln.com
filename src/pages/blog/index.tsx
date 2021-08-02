import PageHeader from '@/components/shared/PageHeader';
import { GetStaticProps } from 'next';
import client from '@/graphql/apollo-client';
import BLOGPAGE_POSTS from '@/graphql/queries/posts';
import Page from '@/layout/Page';

type IPost = {
	title: string;
};

export default function Articles({ posts }: { posts: IPost[] }): JSX.Element {
	return (
		<Page title='Blog'>
			<PageHeader title='Articles' intro='Sharing ideas and discoveries in a few words' />
			<div className='blog-posts'>
				{posts?.map((post) => (
					<div key={post.title} className='blog-post'>
						<h2>{post.title}</h2>
					</div>
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
			revalidate: 10,
		},
	};
};
