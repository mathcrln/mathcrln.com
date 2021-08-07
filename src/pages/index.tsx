import { GetStaticProps } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import Link from '@/components/common/CustomElements/Link';
import PostCard, { IPost } from '@/components/articles/components/PostCard';
import client from '@/graphql/apollo-client';
import { POSTS } from '@/graphql/queries/posts';

const Intro = (): JSX.Element => (
	<span>
		I’m a Frontend Web Developer, Designer as well as a Software Engineering student at Polytechnique Montréal. You should{' '}
		<Link href='/projects'>check out my latest works </Link>
		or <Link href='/about'>learn more about me</Link>.
	</span>
);

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
	return (
		<Page
			title='Mathieu Céraline'
			slogan='Frontend Web Developer, designer, writer.'
			description='Frontend Web Developer, designer, writer.'
		>
			<PageHeader title='Hello, I’m Mathieu Céraline 👋🏾' intro={<Intro />} />

			<section className='my-24'>
				<h2 className='text-2xl font-extrabold'>Recent posts</h2>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>On design, code and creativity.</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{posts?.map((post: IPost) => (
						<PostCard key={post.title} post={post} />
					))}
				</div>
			</section>
			<section className='my-24'>
				<div className='my-32 md:w-4/6 lg:w-3/6 mx-auto'>
					<p className='text-2xl font-bold italic mb-2 text-center dark:text-gray-500 mt-2'>
						"The most important ingredient we put into any relationship is not what we say or what we do, but what we
						are."
					</p>
					<p className='text-right'>- Stephen R. Covey</p>
				</div>
			</section>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts: IPost[] =
		(
			await client.query({
				query: POSTS,
				variables: {
					limit: 3,
				},
			})
		).data.posts || null;

	return {
		props: {
			posts,
			revalidate: 60,
		},
	};
};
