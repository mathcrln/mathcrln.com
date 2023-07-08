import PageHeader from '@/common/components/PageHeader';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getNumberOfPosts } from '@/blog/graphql/posts';
import Page from '@/common/components/layout/Page';
import { PostCard, Post } from '@/blog';
import Pagination from '@/common/components/Pagination';
import { CARDS_PER_PAGE } from 'site.config';
import { getPostsCards } from '@/blog/repository';

type Props = {
	posts: Post[];
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
			<div className='mb-14 flex flex-col justify-between md:flex-row'>
				<PageHeader title='Blog'>
					<p>Sharing ideas and discoveries in a few words.</p>
				</PageHeader>
				<div className='flex items-center justify-between text-center md:flex-col md:justify-start'>
					<p>
						<span className='text-2xl md:text-4xl'>{pageNumber}</span> of {nbOfPages}
					</p>
					<Pagination
						pageNumber={pageNumber}
						hasPreviousPage={hasPreviousPage}
						hasNextPage={hasNextPage}
						className='self-end  md:mt-2'
					/>
				</div>
			</div>

			<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
				{posts?.map((post: Post) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
			<Pagination
				className='mx-auto my-14 max-w-max py-3 dark:border-gray-700'
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
	const { pageNumber } = context.params as any;
	const { pages, hasPreviousPage, hasNextPage, posts } = getPostsCards({ pageNumber: pageNumber, limit: CARDS_PER_PAGE });

	return {
		props: {
			posts,
			pageNumber: parseInt(pageNumber as string, 10),
			hasNextPage,
			nbOfPages: pages,
			hasPreviousPage,
		},
	};
};
