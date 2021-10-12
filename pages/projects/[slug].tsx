import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import ImageCard from 'src/common/ImageCard';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllProjectsSlugs, getProjectBySlug } from '@/modules/projects/graphql/projects';
import Skill from 'src/common/Skill';
import { ISkill, IProject } from 'src/types';
import relativeDate from 'relative-date';
import { LinkButton } from 'src/common/Button';
import Page from '@/layout/Page';
import ContentArticle from 'src/common/ContentArticle';

type ProjectProps = {
	project: IProject;
	source: MDXRemoteSerializeResult;
};

export default function Project({ project, source }: ProjectProps): JSX.Element {
	return (
		<Page
			title={project ? project.name : 'Project'}
			description={project ? project.description : 'Here is a fun project I played with.'}
			image=''
		>
			{!project && <p className='my-14 relative'>Seems like no project with this name has been found</p>}
			{project && (
				<div className='my-14 relative'>
					<div className='grid lg:grid-cols-[2fr,2fr] gap-10 mb-20'>
						<ImageCard cover={project.cover} className='h-80' />

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
						<ContentArticle source={source} />

						<p className='text-gray-600 dark:text-gray-400'>
							Last updated: {relativeDate(new Date(project.updatedAt))}
						</p>
					</article>
				</div>
			)}
		</Page>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllProjectsSlugs();

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
	const project = await getProjectBySlug(slug);
	const content = project?.content;
	const mdxSource = await serialize(content);

	return {
		props: {
			project,
			source: mdxSource,

			revalidate: 1,
		},
	};
};
