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
			<h1 className='text-3xl font-semibold md:text-5xl'>{title}</h1>
			<div className={`my-4 max-w-2xl text-lg font-extralight dark:text-[#CCCCCC] md:text-xl ${centered ? 'm-auto' : ''}`}>
				{children}
			</div>
		</div>
	);
}
