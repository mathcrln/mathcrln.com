import PageHeader from '@/common/components/PageHeader';
import { GetStaticProps } from 'next';
import Page from '@/common/components/layout/Page';
import { PostCard, Post } from '@/blog';
import Pagination from '@/common/components/Pagination';
import { CARDS_PER_PAGE } from 'site.config';
import { getPostsCards } from '@/blog/repository';

export default function Articles({
	posts,
	hasNextPage,
	nbOfPages,
}: {
	posts: Post[];
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
			<div className='mb-14 flex flex-col justify-between md:flex-row'>
				<PageHeader title='Blog'>
					<p>Sharing ideas and discoveries in a few words.</p>
				</PageHeader>
				<div className='flex items-center justify-between text-center md:flex-col md:justify-start'>
					<p>
						<span className='text-2xl md:text-4xl'>1</span> of {nbOfPages}
					</p>
					<Pagination pageNumber={1} hasPreviousPage={false} hasNextPage={hasNextPage} className='self-end md:mt-2' />
				</div>
			</div>
			<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
				{posts?.map((post: Post) => (
					<PostCard key={post.title} post={post} />
				))}
			</div>
			<Pagination
				className='mx-auto my-14 max-w-max py-3 dark:border-gray-700'
				pageNumber={1}
				hasPreviousPage={false}
				hasNextPage={hasNextPage}
				verbose
			/>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { pages, hasNextPage, posts } = getPostsCards({ limit: CARDS_PER_PAGE });

	return {
		props: {
			posts,
			hasNextPage,
			nbOfPages: pages,
		},
	};
};
