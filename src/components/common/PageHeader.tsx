import React from 'react';

/* eslint-disable react/require-default-props */
export default function PageHeader({
	title,
	className = '',
	children,
}: {
	title: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
}): JSX.Element {
	return (
		<div className={className || undefined}>
			<h1 className='text-3xl md:text-5xl font-semibold'>{title}</h1>
			<div className='text-lg max-w-2xl md:text-xl font-extralight my-4 dark:text-[#CCCCCC]'>{children}</div>
		</div>
	);
}
