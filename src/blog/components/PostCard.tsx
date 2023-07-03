import CardText from '@/components/Cards/CardText';
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

                <ImageCard alt={post.title} src={post.cover.url} tags={post.tags} className='h-64' />

            </Link>
			<CardText title={post.title} details={post.excerpt} url={`/blog/${post.slug}`} options={{ titleSize: 'xl' }} />
		</div>
    );
}
