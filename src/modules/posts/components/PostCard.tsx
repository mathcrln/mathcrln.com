import ImageCard from '@/common/components/ImageCard';
import Link from 'next/link';

export type IPost = {
	slug: string;
	title: string;
	cover: { url: string };
	content: string;
	excerpt: string;
	date: string;
	tags: { name: string; icon: string }[];
	updatedAt: string;
};

export default function PostCard({ post }: { post: IPost }): JSX.Element {
	return (
		<div>
			<Link href={`/blog/${post.slug}`} passHref>
				<a>
					<ImageCard cover={post.cover} tags={post.tags} className='h-64' />
				</a>
			</Link>
			<h3 className='font-bold mt-4 text-xl  dark:hover:text-primary-dark'>
				<Link href={`/blog/${post.slug}`}>{post.title}</Link>
			</h3>
			<p className='text-lg text-gray-600 dark:text-gray-500 mt-2 '>{post.excerpt}</p>
		</div>
	);
}
