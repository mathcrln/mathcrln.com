import getStrapiMedia from '@/utils/getStrapiMedia';
import Link from 'next/dist/client/link';
import { IProjectCard } from '../../types/projects';
import ImageCard from '../shared/ImageCard';
import ProjectMetadata from './ProjectMetadata';

export default function FeaturedProjectCard({ featured }: { featured: IProjectCard }): JSX.Element {
	return (
		<article className='grid lg:grid-cols-[2fr,1fr] gap-10'>
			<Link href={`/projects/${featured.slug}`} passHref>
				<a>
					<ImageCard cover={getStrapiMedia(featured.cover)} className='h-80' />
				</a>
			</Link>
			<ProjectMetadata project={featured} className='text-center ' />
		</article>
	);
}
