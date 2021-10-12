import Link from 'next/dist/client/link';
import { IProjectCard } from '../models/projects';
import ImageCard from '../../../common/ImageCard';
import ProjectMetadata from './ProjectMetadata';

export default function FeaturedProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	return (
		<article className='grid lg:grid-cols-[2fr,1fr] gap-10'>
			<Link href={`/projects/${project.slug}`} passHref>
				<a>
					<ImageCard cover={project.cover} className='h-80' />
				</a>
			</Link>
			<ProjectMetadata project={project} className='' />
		</article>
	);
}
