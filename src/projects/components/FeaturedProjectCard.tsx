import Link from 'next/dist/client/link';
import ImageCard from 'components/ImageCard';
import ProjectMetadata from './ProjectMetadata';
import { IProjectCard } from '../models/projects';

export default function FeaturedProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	return (
		<article className='grid gap-10 lg:grid-cols-[2fr,1fr]'>
			<Link href={`/projects/${project.slug}`} passHref>
				<a>
					<ImageCard src={project.cover.url} className='h-80' />
				</a>
			</Link>
			<ProjectMetadata project={project} className='' />
		</article>
	);
}
