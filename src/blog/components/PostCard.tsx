import CardText from '@/common/components/Cards/CardText';
import ImageCard from '@/common/components/ImageCard';
import Link from 'next/link';
import { PostMetadata } from '../types';

export function PostCard({ post }: { post: PostMetadata }): JSX.Element {
	return (
		<div>
			<Link href={`/blog/${post.slug}`} passHref>
				<ImageCard alt={post.title} src={post.cover} tags={post.tags} className='h-64' />
			</Link>
			<CardText title={post.title} details={post.description} url={`/blog/${post.slug}`} options={{ titleSize: 'xl' }} />
		</div>
	);
}
