import { GetStaticProps } from 'next';
import PageHeader from '@/common/components/PageHeader';
import Page from '@/common/components/layout/Page';
import PostCard, { IPost } from '@/blog/components/PostCard';
import { getPostsCards } from '@/blog/graphql/posts';
import { getProjectsCards } from '@/projects/graphql/projects';
import { IProject } from '@/projects/models/projects';
import React from 'react';
import { IBookCard } from 'src/archives/models/books';
import BookCard from 'src/archives/components/BookCard';
import { getArchivesCards } from 'src/archives/graphql/archives';
import ProjectCard from '@/projects/components/ProjectCard';
import CustomLink from '@/common/components/elements/Link';
import Arrow from '@/common/components/icons/Arrow';
import { getResources } from '@/helpers/markdown';

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
			seo={{
				title: 'Mathieu Céraline',
				slogan: 'Frontend Web Developer, designer, writer.',
				description: "I'm a Front-End Web Developer and Software Engineering Student at Polytechnique Montréal.",
			}}
		>
			<PageHeader title='Hello, I’m Mathieu Céraline 👋🏾'>
				<p>
					I’m a Frontend Web Developer, Designer as well as a Software Engineering student at Polytechnique Montréal.
					You should <CustomLink href='#projects'>check out my latest works </CustomLink>
					or <CustomLink href='/about'>learn more about me</CustomLink>.
				</p>
			</PageHeader>

			<section className='my-24'>
				<div className='flex flex-wrap items-center justify-between'>
					<h2 className='text-2xl font-extrabold md:text-3xl'>Recent posts</h2>
					<SeeMoreButton text='Browse all posts' href='/blog' />
				</div>
				<p className='mt-2 mb-10 text-lg text-gray-600 dark:text-gray-300'>On design, code, lifestyle and creativity.</p>
				<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
					{posts.length ? posts.map((post) => <PostCard key={post.title} post={post} />) : <p>No post was found.</p>}
				</div>
			</section>
			<section className='my-32'>
				<div className='flex flex-wrap items-center justify-between gap-2'>
					<h2 className='text-2xl font-extrabold md:text-3xl' id='projects'>
						Latest projects
					</h2>
					<SeeMoreButton text='Browse all projects' href='/projects' />
				</div>
				<p className='mt-2 mb-10 text-gray-600 dark:text-gray-300'>
					Here are some of the projects I had fun with lately.
				</p>
				<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
					{projects.length ? (
						projects.map((project) => <ProjectCard key={project.name} project={project} />)
					) : (
						<p>No project was found.</p>
					)}
				</div>
			</section>
			<aside className='my-32 mx-auto md:w-4/6 lg:w-3/6'>
				<p className='mb-2 mt-2 text-center text-2xl font-bold italic dark:text-gray-500'>
					"The most important ingredient we put into any relationship is not what we say or what we do, but what we
					are."
				</p>
				<p className='text-right'>- Stephen R. Covey</p>
			</aside>

			<section className='my-16'>
				<div className='flex flex-wrap items-center justify-between'>
					<h2 className='text-2xl font-extrabold md:text-3xl'>Library</h2>
					<SeeMoreButton text='Browse all books' href='/library' />
				</div>
				<p className='mt-2 mb-10 text-lg text-gray-600 dark:text-gray-300'>
					Here are some books, movies or articles I recently loved.
				</p>
				<div className='grid grid-cols-2 gap-10 md:grid-cols-4'>
					{books.length ? (
						books.map((book) => (
							<BookCard
								key={book.name}
								coverSrc={book.cover.url}
								title={book.name}
								author={book.author}
								url={`/library/${book.slug}`}
							/>
						))
					) : (
						<p>No book was found.</p>
					)}
				</div>
			</section>
		</Page>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data: posts } = getResources('./public/indexes/posts.json', {
		pageNumber: 0,
		limit: 3,
	});
	const projects = await getProjectsCards(3);
	const books = await getArchivesCards(4);

	return {
		props: {
			posts,
			projects: projects || null,
			books: books || null,
		},
		revalidate: 3600 * 6,
	};
};

function SeeMoreButton({ text, href }: { text: string; href: string }): JSX.Element {
	return (
		<CustomLink href={href} className='group inline-block'>
			<span>{text}</span>
			<Arrow direction='right' className='inline transform duration-200 ease-in-out group-hover:-rotate-45' />
		</CustomLink>
	);
}
