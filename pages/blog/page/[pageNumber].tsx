import PageHeader from 'components/PageHeader';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getNumberOfPosts, getPaginatedPostsCards } from 'features/blog/graphql/posts';
import { ParsedUrlQuery } from 'querystring';
import Page from '@/components/layout/Page';
import PostCard, { IPost } from 'features/blog/components/PostCard';
import Pagination from '@/components/Pagination';

type Props = {
	posts: IPost[];
	pageNumber: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};

export default function PaginatedPosts({ posts, pageNumber, hasNextPage, hasPreviousPage }: Props): JSX.Element {
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
			<Pagination pageNumber={pageNumber} hasPreviousPage={hasPreviousPage} hasNextPage={hasNextPage} />
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const nbOfPosts = await getNumberOfPosts();
	const nbOfPages = Math.ceil(nbOfPosts / 9);
	const pages = Array.from({ length: nbOfPages }, (_, i) => i + 1);
	const paths = pages.slice(1).map((id) => ({ params: { pageNumber: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { pageNumber } = context.params as Params;
	const currentPage = await getPaginatedPostsCards(9, { skip: (parseInt(pageNumber, 10) - 1) * 9 });
	const posts = currentPage?.edges?.map((edge) => edge.node);
	const { hasNextPage, hasPreviousPage } = currentPage?.pageInfo;

	return {
		props: {
			posts,
			pageNumber: parseInt(pageNumber as string, 10),
			hasNextPage,
			hasPreviousPage,
		},
		revalidate: 60,
	};
};

interface Params extends ParsedUrlQuery {
	pageNumber: string;
}
