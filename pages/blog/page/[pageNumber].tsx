import PageHeader from 'components/PageHeader';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getNumberOfPosts, getPaginatedPostsCards } from 'features/blog/graphql/posts';
import { ParsedUrlQuery } from 'querystring';
import Page from '@/components/layout/Page';
import PostCard, { IPost } from 'features/blog/components/PostCard';
import Pagination from '@/components/Pagination';
import { CARDS_PER_PAGE } from 'site.config';

type Props = {
	posts: IPost[];
	pageNumber: number;
	nbOfPages: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
};

export default function PaginatedPosts({ posts, nbOfPages, pageNumber, hasNextPage, hasPreviousPage }: Props): JSX.Element {
	return (
		<Page
			seo={{
				title: `Blog — Page ${pageNumber} of ${nbOfPages}`,
				description: 'All my posts on web development, productivity, self-help and creativity.',
				noindex: true,
			}}
		>
			<div className='flex flex-col md:flex-row justify-between mb-14'>
				<PageHeader title='Blog'>
					<p>Sharing ideas and discoveries in a few words.</p>
				</PageHeader>
				<div className='text-center flex justify-between md:justify-start items-center md:flex-col'>
					<p>
						<span className='text-2xl md:text-4xl'>{pageNumber}</span> of {nbOfPages}
					</p>
					<Pagination
						pageNumber={pageNumber}
						hasPreviousPage={hasPreviousPage}
						hasNextPage={hasNextPage}
						className='md:mt-2  self-end'
					/>
				</div>
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
				{posts?.map((post: IPost) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
			<Pagination
				className='my-14 py-3 dark:border-gray-700 max-w-max mx-auto'
				pageNumber={pageNumber}
				hasPreviousPage={hasPreviousPage}
				hasNextPage={hasNextPage}
				verbose
			/>
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const nbOfPosts = await getNumberOfPosts();
	const nbOfPages = Math.ceil(nbOfPosts / CARDS_PER_PAGE);
	const pages = Array.from({ length: nbOfPages }, (_, i) => i + 1);
	const paths = pages.slice(1).map((id) => ({ params: { pageNumber: id.toString() } }));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { pageNumber } = context.params as Params;
	const currentPage = await getPaginatedPostsCards(CARDS_PER_PAGE, { skip: (parseInt(pageNumber, 10) - 1) * CARDS_PER_PAGE });
	const nbOfPosts = await getNumberOfPosts();
	const nbOfPages = await Math.ceil(nbOfPosts / CARDS_PER_PAGE);
	const posts = currentPage?.edges?.map((edge) => edge.node);
	const { hasNextPage, hasPreviousPage } = currentPage?.pageInfo;

	return {
		props: {
			posts,
			pageNumber: parseInt(pageNumber as string, 10),
			hasNextPage,
			nbOfPages,
			hasPreviousPage,
		},
		revalidate: 60,
	};
};

interface Params extends ParsedUrlQuery {
	pageNumber: string;
}