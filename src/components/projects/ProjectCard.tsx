import getStrapiMedia from '@/utils/getStrapiMedia';
import Link from 'next/dist/client/link';
import { IProjectCard } from '../../types/projects';
import ImageCard from '../shared/ImageCard';
import ProjectMetadata from './ProjectMetadata';

export default function ProjectCard({ project }: { project: IProjectCard }): JSX.Element {
	const { cover, slug, tags } = project;

	return (
		<article>
			<Link href={`/projects/${slug}`} passHref>
				<a>
					<ImageCard cover={getStrapiMedia(cover)} tags={tags} />
				</a>
			</Link>
			<div className='mt-5'>
				<ProjectMetadata project={project} className='mt-5 text-center md:text-left' />
			</div>
		</article>
	);
}
