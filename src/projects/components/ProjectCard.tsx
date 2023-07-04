import Github from '@/common/components/icons/Github';
import CustomLink from '@/common/components/elements/Link';
import ImageCard from '@/common/components/ImageCard';
import Planet from '@/common/components/icons/Planet';
import CardText from '@/common/components/Cards/CardText';
import { IProjectCard } from '../models/projects';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { name, cover, tags, previewUrl, sourcesUrl } = project;

	return (
		<article>
			<ImageCard src={cover.url} tags={tags} />
			<CardText
				title={name}
				url={previewUrl || sourcesUrl || '#'}
				options={{ titleSize: 'xl' }}
				details={
					<span className='mt-3 flex space-x-5'>
						{previewUrl && (
							<CustomLink href={previewUrl} className=''>
								Demo
								<Planet className='ml-2 inline h-[20px] w-[20px] transform fill-current duration-200 ease-in-out group-hover:rotate-12' />
							</CustomLink>
						)}

						{sourcesUrl && (
							<CustomLink href={sourcesUrl} className='group flex items-center'>
								Browse Code
								<Github className='ml-2 inline h-[20px] w-[20px] transform duration-200 ease-in-out group-hover:rotate-12' />
							</CustomLink>
						)}
					</span>
				}
			/>
		</article>
	);
}
