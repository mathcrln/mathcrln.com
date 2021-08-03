import PageHeader from '@/components/shared/PageHeader';
import Page from '@/layout/Page';
import Link from '@/components/shared/CustomElements/Link';
// import NextLink from 'next/link';
// import ImageCard from '@/components/shared/ImageCard';
// import Image from 'next/dist/client/image';
import PostCard, { IPost } from 'src/articles/components/PostCard';
import { GetStaticProps } from 'next';
import client from '@/graphql/apollo-client';
import { BLOGPAGE_POSTS } from '@/graphql/queries/posts';

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
			<div className='grid md:grid-cols-[2fr,1fr] items-center gap-4'>
				<PageHeader title='Hello, I’m Mathieu Céraline 👋🏾' intro={<Intro />} className='' />
				{/* <div className='place-self-end hidden md:block'>
					<Image src='/44712449.jpg' height={200} width={200} layout='fixed' alt='' className='rounded-full' />
				</div> */}
			</div>

			<section className='my-24'>
				<div>
					<h2 className='text-2xl font-extrabold'>Recent posts</h2>
					<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>On design, code and creativity.</p>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
						{posts?.map((post: IPost) => (
							<PostCard key={post.title} post={post} />
						))}
					</div>
				</div>
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

// type ProjectsProps = { allProjects: IProjectCard[]; featured: IProjectCard };

export const getStaticProps: GetStaticProps = async () => {
	const posts: IPost[] = (await client.query({ query: BLOGPAGE_POSTS })).data.posts || null;

	return {
		props: {
			posts,
			revalidate: 60,
		},
	};
};
