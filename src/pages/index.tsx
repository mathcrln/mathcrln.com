import { GetStaticProps } from 'next';
import useSWR from 'swr';
import PageHeader from '@/components/common/PageHeader';
import Page from '@/layout/Page';
import Link from '@/components/common/CustomElements/Link';
import NextLink from 'next/link';
import PostCard, { IPost } from '@/components/blog/PostCard';
import { getPostsCards } from '@/graphql/queries/posts';
import { getProjectsCards } from '@/graphql/queries/projects';
import { IProjectCard } from '@/types/projects';
import React from 'react';
import { IBookCard } from '@/types/books';
import BookCard from '@/components/library/BookCard';
import { getArchivesCards } from '@/graphql/queries/archives';
import ImageCard from '@/components/common/ImageCard';
import { format, parseISO } from 'date-fns';

const fetcher = (url: string) =>
	fetch(url)
		.then((res) => {
			if (res.status > 300) {
				throw new Error('Server error');
			} else {
				return res.json();
			}
		})
		.catch((err) => {
			throw err;
		});

type Data = {
	title: string;
	lastEdited: string;
	id: string;
};

export default function Home({ posts, project, book }: { posts: IPost[]; project: IProjectCard; book: IBookCard }): JSX.Element {
	const { data } = useSWR('/api/notion', fetcher);
	const seeds = data;

	return (
		<Page
			title='Mathieu Céraline'
			slogan='Frontend Web Developer, designer, writer.'
			description='Frontend Web Developer, designer, writer.'
		>
			<PageHeader title='Hello, I’m Mathieu Céraline 👋🏾'>
				<p>
					I’m a Frontend Web Developer, Designer as well as a Software Engineering student at Polytechnique Montréal.
					You should <Link href='/projects'>check out my latest works </Link>
					or <Link href='/about'>learn more about me</Link>.
				</p>
			</PageHeader>

			<section className='my-24'>
				<h2 className='text-2xl font-extrabold'>Recent posts</h2>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>On design, code and creativity.</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{posts ? posts.map((post) => <PostCard key={post.title} post={post} />) : <p>No post was found.</p>}
					{/* {project ? (
						<article>
							<NextLink href={`/projects/${project.slug}`} passHref>
								<a>
									<ImageCard cover={project.cover} className='h-64' />
								</a>
							</NextLink>
						</article>
					) : (
						<p>No project was found.</p>
					)} */}
				</div>
			</section>
			<section className='my-24'>
				<h2 className='text-2xl font-extrabold'>What I'm working on</h2>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>On design, code and creativity.</p>
				<div className='grid md:grid-cols-[2fr,1fr] gap-10'>
					{project ? (
						<>
							<article>
								<NextLink href={`/projects/${project.slug}`} passHref>
									<a>
										<ImageCard cover={project.cover} className='h-80' />
									</a>
								</NextLink>
							</article>
							<article>
								<NextLink href={`/projects/${project.slug}`} passHref>
									<a>
										<ImageCard cover={project.cover} className='h-80' />
									</a>
								</NextLink>
							</article>
						</>
					) : (
						<p>No project was found.</p>
					)}
				</div>
			</section>
			<aside className='my-32 md:w-4/6 lg:w-3/6 mx-auto'>
				<p className='text-2xl font-bold italic mb-2 text-center dark:text-gray-500 mt-2'>
					"The most important ingredient we put into any relationship is not what we say or what we do, but what we
					are."
				</p>
				<p className='text-right'>- Stephen R. Covey</p>
			</aside>
			<div className='grid md:grid-cols-[1fr,3fr] gap-10'>
				<section>
					<h2 className='text-2xl font-extrabold'>Library</h2>
					<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>Here is the latest book I read.</p>
					{book ? <BookCard book={book} /> : <p>No book has been found.</p>}
				</section>
				<section>
					<h2 className='text-2xl font-extrabold'>Seeding ideas</h2>
					<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>
						My recent explorations on design, web development and creativty.
					</p>
					<div className='grid lg:grid-cols-[auto,auto,auto] md:grid-cols-[1fr,1fr] gap-10 '>
						{seeds &&
							seeds.map((seed: Data) => (
								<NextLink href={`/blog/s/${seed.id}`} key={seed.title} passHref>
									<a>
										<div className='dark:bg-darkGrey  rounded-lg p-4 flex flex-col justify-center border border-[#CCC] dark:border-[#202020] shadow-xl'>
											<h3 className='text-md mb-2'>{seed.title}</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>
													{format(parseISO(seed.lastEdited), 'MMM dd, yy')}
												</span>
											</div>
										</div>
									</a>
								</NextLink>
							))}
					</div>
				</section>
			</div>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPostsCards(3);
	const projects = await getProjectsCards(1);
	const books = await getArchivesCards(1);

	return {
		props: {
			posts,
			project: projects[0] || null,
			book: books[0] || null,
			revalidate: 60,
		},
	};
};
