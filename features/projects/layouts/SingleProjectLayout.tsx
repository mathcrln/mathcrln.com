import relativeDate from 'relative-date';
import ContentArticle from 'components/ContentArticle';
import { LinkButton } from 'components/elements/Button';
import ImageCard from 'components/ImageCard';
import Skill, { ISkill } from 'components/skills/Skill';
import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IProject } from '../models/projects';

export type ProjectProps = {
	project: IProject;
	source: MDXRemoteSerializeResult;
};

export default function ProjectLayout({ project, source }: ProjectProps): JSX.Element {
	return (
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

				<p className='text-gray-600 dark:text-gray-400'>Last updated: {relativeDate(new Date(project.updatedAt))}</p>
			</article>
		</div>
	);
}
