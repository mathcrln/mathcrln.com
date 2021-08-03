import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Container from '@/layout/Container';
import client from '@/graphql/apollo-client';
import ImageCard from '@/components/shared/ImageCard';
import Head from 'next/dist/next-server/lib/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ALL_PROJECTS_SLUGS, PROJECT_PAGE } from '@/graphql/queries/projects';
import Skill from '@/components/shared/Skill';
import { ISkill, IProject } from 'src/types';
import TableOfContents from '@/components/shared/TableOfContents';
import getTableOfContents, { ITableOfContents } from '@/utils/getTableOfContents';
import { P, H2, H3, A, UL, LI } from '@/components/shared/MDXElements';
import smoothscroll from 'smoothscroll-polyfill';
import relativeDate from 'relative-date';
import { LinkButton } from '@/components/shared/Button';
import PageWithLeftSidebar from '@/layout/PageWithLeftSidebar';
import Sidebar from '@/layout/Sidebar';
import getStrapiMedia from '@/utils/getStrapiMedia';

// const test = (src) => {
// 	const cover = { url: src };
// 	return <ImageCard cover={cover} className='h-80' />;
// };
// const test2 = ({ children }) => {
// 	if (children.length > 0) {
// 		children.forEach((child) => {
// 			console.log(child.props.children);
// 		});
// 	}
// 	// console.log(children);
// 	// if (children?.props?.mdxType === 'img') {
// 	// 	console.log('Image', children?.props?.src);
// 	// } else {
// 	// 	console.log('Text', children);
// 	// }

// 	return <ul>{children}</ul>;
// };

const components = {
	h2: H2,
	h3: H3,
	p: P,
	a: A,
	ul: UL,
	li: LI,
	// img: test,
};

type ProjectProps = {
	book: IProject;
	source: MDXRemoteSerializeResult;
	toc: ITableOfContents;
};
export default function Project({ book, source, toc }: ProjectProps): JSX.Element {
	if (typeof window !== 'undefined') {
		smoothscroll.polyfill();
	}

	return (
		<>
			<Head>
				<title>{book ? book.name : 'Project'} | Mathieu Céraline</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				{!book && (
					<Container className='my-14 relative'>
						<p>Seems like no project with this name has been found</p>
					</Container>
				)}
				{book && (
					<Container className='my-14 relative'>
						<div className='grid lg:grid-cols-[2fr,2fr] gap-10 mb-20'>
							<ImageCard cover={getStrapiMedia(book.cover)} className='h-80' />

							<div>
								<div className='mb-10 flex items-center justify-between flex-wrap'>
									<h1 className='text-3xl md:text-4xl font-extrabold flex-grow-1 pr-3'>{book.name}</h1>
									<LinkButton title='Live Demo' url='https://github.com/mathcrln' className='my-3 flex-0 ' />
								</div>

								<p className='md:max-w-[750px]  md:text-left mb-4'>{book.description}</p>

								<div className='flex flex-wrap flex-1'>
									{book.skills && <span className='font-bold mr-2 '>Built with</span>}
									{book.skills && (
										<div className='flex  space-x-reverse flex-wrap items-center flex-1'>
											{book?.skills?.map((skill: ISkill) => (
												<Skill key={skill.name} skill={skill} className='mr-2' />
											))}
										</div>
									)}
								</div>
							</div>
						</div>
						<PageWithLeftSidebar className='my-24'>
							<Sidebar>
								<TableOfContents toc={toc} />
							</Sidebar>
							<article>
								<MDXRemote {...source} components={components} />
								<p className='text-gray-600 dark:text-gray-400'>
									Last updated: {relativeDate(new Date(book.updatedAt))}
								</p>
							</article>
						</PageWithLeftSidebar>
					</Container>
				)}
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { projects } = (await client.query({ query: ALL_PROJECTS_SLUGS })).data;
	const slugs = projects?.map((project: IProject) => `/library/books/${project.slug}`);

	return {
		paths: slugs,
		fallback: false,
	};
};

type Props = {
	book: IProject;
	source: MDXRemoteSerializeResult;
	toc: ITableOfContents;
	revalidate: number;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const { slug } = context.params as Params;

	const query = await client.query({
		query: PROJECT_PAGE,
		variables: {
			projectsWhere: { slug },
		},
	});

	const content = query.data?.projects[0]?.content;
	const toc = getTableOfContents(content);
	const mdxSource = await serialize(content);

	return {
		props: {
			book: { ...query.data.projects[0], updatedAt: query.data.projects[0].updated_at },
			source: mdxSource,
			toc,

			revalidate: 1,
		},
	};
};