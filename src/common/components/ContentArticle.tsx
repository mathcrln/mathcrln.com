import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

export default function ContentArticle({
	source,
	children,
}: {
	source: MDXRemoteSerializeResult;
	children?: React.ReactNode;
}): JSX.Element {
	return (
		<article className='lg:w-8/12 mx-auto my-24'>
			<MDXRemote {...source} />
			{children}
		</article>
	);
}
