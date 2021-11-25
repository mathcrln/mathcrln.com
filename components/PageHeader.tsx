import React from 'react';

export default function PageHeader({
	title,
	className = '',
	children,
	centered = false,
}: {
	title: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
	centered?: boolean;
}): JSX.Element {
	return (
		<div className={`${centered ? 'text-center' : ''} ${className || undefined}`}>
			<h1 className='text-3xl md:text-5xl font-semibold'>{title}</h1>
			<div className={`text-lg max-w-2xl md:text-xl font-extralight my-4 dark:text-[#CCCCCC] ${centered ? 'm-auto' : ''}`}>
				{children}
			</div>
		</div>
	);
}
