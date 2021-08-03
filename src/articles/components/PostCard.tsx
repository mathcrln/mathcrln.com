import ImageCard from '@/components/shared/ImageCard';
import getStrapiMedia from '@/utils/getStrapiMedia';
import Link from 'next/link';

export type IPost = {
	slug: string;
	title: string;
	cover: { url: string };
	description: string;
	tags: { name: string; icon: string }[];
	updatedAt: string;
};

export default function PostCard({ post }: { post: IPost }): JSX.Element {
	return (
		<div className='relative hover:.test:translate-y-10'>
			<Link href={`/blog/${post.slug}`} passHref>
				<a>
					<ImageCard cover={getStrapiMedia(post.cover)} tags={post.tags} className='h-64' />
				</a>
			</Link>
			<h3 className='font-bold mt-4 text-xl'>
				<Link href={`/blog/${post.slug}`}>{post.title}</Link>
			</h3>
			<p className='text-gray-600 dark:text-gray-500 mt-2'>{post.description}</p>
		</div>
	);
}
