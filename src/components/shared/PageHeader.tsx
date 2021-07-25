/* eslint-disable react/require-default-props */
export default function PageHeader({
	title,
	intro,
	className = '',
}: {
	title: string;
	intro: string | JSX.Element;
	className?: string;
}): JSX.Element {
	return (
		<div className={`text-center my-10 md:my-20 mx-auto ${className}`}>
			<h1 className='text-3xl md:text-5xl font-semibold'>{title}</h1>
			<p className='text-lg max-w-2xl mx-auto md:text-xl font-extralight my-4 text-[#CCCCCC]'>{intro}</p>
			<button
				type='button'
				className='px-6 py-2 block mx-auto rounded-lg text-md mt-8 bg-gradient-to-br from-primary-light dark:from-primary-dark  dark:to-[hsla(4,75%,49%,0.95)]'
			>
				Get to know me
			</button>
		</div>
	);
}
// md:w-8/12 lg:w-/12
