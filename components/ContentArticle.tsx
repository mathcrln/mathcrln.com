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
		<article className='mx-auto my-24 lg:w-8/12'>
			<MDXRemote {...source} />
			{children}
		</article>
	);
}
