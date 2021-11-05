import ImageCard from 'components/ImageCard';
import Link from 'next/link';

export type IPost = {
	slug: string;
	title: string;
	cover: { url: string };
	content: string;
	excerpt: string;
	date: string;
	tags: { name: string; icon: string }[];
	publishedAt: string;
	updatedAt: string;
};

export default function PostCard({ post }: { post: IPost }): JSX.Element {
	return (
		<div>
			<Link href={`/blog/${post.slug}`} passHref>
				<a title={post.title}>
					<ImageCard cover={post.cover} tags={post.tags} className='h-64' />
				</a>
			</Link>
			<h3 className='font-bold mt-4 text-xl  hover:text-primary-light dark:hover:text-primary-dark'>
				<Link href={`/blog/${post.slug}`}>{post.title}</Link>
			</h3>
			<p className='text-lg text-gray-600 dark:text-gray-400 mt-2 '>{post.excerpt}</p>
		</div>
	);
}
