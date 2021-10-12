import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export default function ContentArticle({ source }: { source: MDXRemoteSerializeResult }): JSX.Element {
	return (
		<article className='lg:w-8/12 mx-auto my-24'>
			<MDXRemote {...source} />
		</article>
	);
}
