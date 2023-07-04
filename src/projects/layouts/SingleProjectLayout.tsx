import relativeDate from 'relative-date';
import ContentArticle from '@/common/components/ContentArticle';
import { LinkButton } from '@/common/components/elements/Button';
import ImageCard from '@/common/components/ImageCard';
import Skill, { ISkill } from '@/common/components/skills/Skill';
import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IProject } from '../models/projects';

export type ProjectProps = {
	project: IProject;
	source: MDXRemoteSerializeResult;
};

export default function ProjectLayout({ project, source }: ProjectProps): JSX.Element {
	return (
		<div className='relative my-14'>
			<div className='mb-20 grid gap-10 lg:grid-cols-[2fr,2fr]'>
				<ImageCard src={project.cover.url} className='h-80' />

				<div>
					<div className='mb-10 flex flex-wrap items-center justify-between'>
						<h1 className='flex-grow-1 pr-3 text-3xl font-extrabold md:text-4xl'>{project.name}</h1>
						<LinkButton title='Live Demo' url='https://github.com/mathcrln' className='flex-0 my-3 ' />
					</div>

					<p className='mb-4  md:max-w-[750px] md:text-left'>{project.description}</p>

					<div className='flex flex-1 flex-wrap'>
						{project.skills && <span className='mr-2 font-bold '>Built with</span>}
						{project.skills && (
							<div className='flex  flex-1 flex-wrap items-center space-x-reverse'>
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
