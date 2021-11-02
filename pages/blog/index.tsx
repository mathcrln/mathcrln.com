import PageHeader from '@/common/components/PageHeader';
import { GetStaticProps } from 'next';
import { getPostsCards } from '@/modules/posts/graphql/posts';
import Page from '@/layout/Page';
import PostCard, { IPost } from '@/modules/posts/components/PostCard';

export default function Articles({ posts }: { posts: IPost[] }): JSX.Element {
	return (
		<Page title='Blog'>
			<PageHeader title='Articles' className='mb-20'>
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
