import { GetStaticProps } from 'next';
import PageHeader from 'src/common/components/PageHeader';
import Page from '@/layout/Page';
import PostCard, { IPost } from '@/modules/posts/components/PostCard';
import { getPostsCards } from '@/modules/posts/graphql/posts';
import { getProjectsCards } from '@/modules/projects/graphql/projects';
import { IProject } from '@/modules/projects/models/projects';
import React from 'react';
import { IBookCard } from '@/modules/archives/models/books';
import BookCard from '@/modules/archives/components/BookCard';
import { getArchivesCards } from '@/modules/archives/graphql/archives';
import ProjectCard from '@/modules/projects/components/ProjectCard';
import CustomLink from '@/common/components/elements/Link';
import ArrowRight from '@/common/components/icons/ArrowRight';

export default function Home({
	posts,
	projects,
	books,
}: {
	posts: IPost[];
	projects: IProject[];
	books: IBookCard[];
}): JSX.Element {
	return (
		<Page
			title='Mathieu Céraline'
			slogan='Frontend Web Developer, designer, writer.'
			description='Frontend Web Developer, designer, writer.'
		>
			<PageHeader title='Hello, I’m Mathieu Céraline 👋🏾'>
				<p>
					I’m a Frontend Web Developer, Designer as well as a Software Engineering student at Polytechnique Montréal.
					You should <CustomLink href='#projects'>check out my latest works </CustomLink>
					or <CustomLink href='/about'>learn more about me</CustomLink>.
				</p>
			</PageHeader>

			<section className='my-24'>
				<div className='flex justify-between items-center'>
					<h2 className='text-3xl font-extrabold'>Recent posts</h2>

					<CustomLink href='/blog' className='inline-block group'>
						<span>Browse all posts</span>
						<ArrowRight className='transform group-hover:-rotate-45 duration-200 inline ease-in-out' />
					</CustomLink>
				</div>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>On design, code and creativity.</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{posts.length ? posts.map((post) => <PostCard key={post.title} post={post} />) : <p>No post was found.</p>}
				</div>
			</section>
			<section className='my-32'>
				<div className='flex justify-between items-center'>
					<h2 className='text-3xl font-extrabold' id='projects'>
						Projects & Experiments
					</h2>
					<CustomLink href='/projects' className='inline-block group'>
						<span>Browse all projects</span>
						<ArrowRight className='transform group-hover:-rotate-45 duration-200 inline ease-in-out' />
					</CustomLink>
				</div>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>
					Here are some of the projects I had fun with lately.
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{projects.length ? (
						projects.map((project) => <ProjectCard key={project.name} project={project} />)
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

			<section className='my-16'>
				<h2 className='text-3xl font-extrabold'>Library</h2>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>Here are some books I recently loved.</p>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
					{books.length ? (
						books.map((book) => <BookCard key={book.name} book={book} />)
					) : (
						<p>No book has been found.</p>
					)}
				</div>
			</section>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPostsCards(3);
	const projects = await getProjectsCards(3);
	const books = await getArchivesCards(4);

	return {
		props: {
			posts,
			projects: projects || null,
			books: books || null,
		},
		revalidate: 60,
	};
};
