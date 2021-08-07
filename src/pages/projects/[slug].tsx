import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import client from '@/graphql/apollo-client';
import ImageCard from '@/components/common/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ALL_PROJECTS_SLUGS, PROJECT_PAGE } from '@/graphql/queries/projects';
import Skill from '@/components/common/Skill';
import { ISkill, IProject } from 'src/types';
import smoothscroll from 'smoothscroll-polyfill';
import relativeDate from 'relative-date';
import { LinkButton } from '@/components/common/Button';
import getStrapiMedia from '@/utils/getStrapiMedia';
import Page from '@/layout/Page';

type ProjectProps = {
	project: IProject;
	source: MDXRemoteSerializeResult;
};

export default function Project({ project, source }: ProjectProps): JSX.Element {
	if (typeof window !== 'undefined') {
		smoothscroll.polyfill();
	}

	return (
		<Page
			title={project ? project.name : 'Project'}
			description={project ? project.description : 'Here is a fun project I played with.'}
			image=''
		>
			<main>
				{!project && <p className='my-14 relative'>Seems like no project with this name has been found</p>}
				{project && (
					<div className='my-14 relative'>
						<div className='grid lg:grid-cols-[2fr,2fr] gap-10 mb-20'>
							<ImageCard cover={getStrapiMedia(project.cover)} className='h-80' />

							<div>
								<div className='mb-10 flex items-center justify-between flex-wrap'>
									<h1 className='text-3xl md:text-4xl font-extrabold flex-grow-1 pr-3'>{project.name}</h1>
									<LinkButton title='Live Demo' url='https://github.com/mathcrln' className='my-3 flex-0 ' />
								</div>

								<p className='md:max-w-[750px]  md:text-left mb-4'>{project.description}</p>

								<div className='flex flex-wrap flex-1'>
									{project.skills && <span className='font-bold mr-2 '>Built with</span>}
									{project.skills && (
										<div className='flex  space-x-reverse flex-wrap items-center flex-1'>
											{project?.skills?.map((skill: ISkill) => (
												<Skill key={skill.name} skill={skill} className='mr-2' />
											))}
										</div>
									)}
								</div>
							</div>
						</div>
						<article>
							<MDXRemote {...source} />
							<p className='text-gray-600 dark:text-gray-400'>
								Last updated: {relativeDate(new Date(project.updatedAt))}
							</p>
						</article>
						{/* <div className='my:20 md:my-32 lg:w-5/6 xl:w-4/6 mx-auto'>
							<h2 className='text-4xl  font-bold mb-14'>See more projects</h2>
							<div className='grid md:grid-cols-2 gap-10 xl:gap-28'>
								<div>
									<ImageCard cover={project.cover} className='h-80' />
									<h3 className='text-2xl font-bold mt-6 mb-3'>Audiophile</h3>
									<p>
										{' '}
										Nam mattis fringilla quam. Mauris porta sodales diam, nec blandit ante sollicitudin et.
									</p>
									<a className='font-bold underline mt-3 inline-block'>View project</a>
								</div>
								<div>
									<ImageCard cover={project.cover} className='h-80' />
									<h3 className='text-2xl font-bold mt-6 mb-3'>Life is Mine</h3>
									<p>
										{' '}
										Nam mattis fringilla quam. Mauris porta sodales diam, nec blandit ante sollicitudin et.
									</p>
									<a className='font-bold underline mt-3 inline-block'>View project</a>
								</div>
							</div>
						</div> */}
					</div>
				)}
			</main>
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { projects } = (await client.query({ query: ALL_PROJECTS_SLUGS })).data;
	const slugs = projects?.map((project: IProject) => `/projects/${project.slug}`);

	return {
		paths: slugs,
		fallback: false,
	};
};

type Props = {
	project: IProject;
	source: MDXRemoteSerializeResult;
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
	const mdxSource = await serialize(content);

	return {
		props: {
			project: { ...query.data.projects[0], updatedAt: query.data.projects[0].updated_at },
			source: mdxSource,

			revalidate: 1,
		},
	};
};
