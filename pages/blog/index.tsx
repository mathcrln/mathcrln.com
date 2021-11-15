import PageHeader from 'components/PageHeader';
import { GetStaticProps } from 'next';
import { getNumberOfPosts, getPaginatedPostsCards } from 'features/blog/graphql/posts';
import Page from '@/components/layout/Page';
import PostCard, { IPost } from 'features/blog/components/PostCard';
import Pagination from '@/components/Pagination';
import { CARDS_PER_PAGE } from 'site.config';

export default function Articles({
	posts,
	hasNextPage,
	nbOfPages,
}: {
	posts: IPost[];
	hasNextPage: boolean;
	nbOfPages: number;
}): JSX.Element {
	return (
		<Page
			seo={{
				title: 'Blog',
				description: 'All my posts on web development, productivity, self-help and creativity.',
			}}
		>
			<div className='flex flex-col md:flex-row justify-between mb-14'>
				<PageHeader title='Blog'>
					<p>Sharing ideas and discoveries in a few words.</p>
				</PageHeader>
				<div className='text-center flex justify-between md:justify-start items-center md:flex-col'>
					<p>
						<span className='text-2xl md:text-4xl'>1</span> of {nbOfPages}
					</p>
					<Pagination pageNumber={1} hasPreviousPage={false} hasNextPage={hasNextPage} className='md:mt-2 self-end' />
				</div>
			</div>
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
		revalidate: 60,
	};
};
