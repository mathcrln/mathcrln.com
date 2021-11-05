import Github from 'components/icons/Github';
import CustomLink from 'components/elements/Link';
import ImageCard from 'components/ImageCard';
import Planet from 'components/icons/Planet';
import { IProjectCard } from '../models/projects';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { name, cover, tags, previewUrl, sourcesUrl } = project;

	return (
		<article>
			<ImageCard cover={cover} tags={tags} />

			<div className='mt-5'>
				<h3 className='font-bold mt-4 text-xl'>{name}</h3>
				<div className='mt-3 flex space-x-5'>
					{previewUrl && (
						<CustomLink href={previewUrl} className=''>
							Demo
							<Planet className='ml-2 h-[20px] w-[20px] fill-current transform group-hover:rotate-12 duration-200 inline ease-in-out' />
						</CustomLink>
					)}

					{sourcesUrl && (
						<CustomLink href={sourcesUrl} className='flex items-center group'>
							Browse Code
							<Github className='ml-2 h-[20px] w-[20px] transform group-hover:rotate-12 duration-200 inline ease-in-out' />
						</CustomLink>
					)}
				</div>
			</div>
		</article>
	);
}
