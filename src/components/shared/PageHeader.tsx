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
		<div className={` my-10 md:my-16  ${className}`}>
			<h1 className='text-3xl md:text-5xl font-semibold'>{title}</h1>
			<p className='text-lg max-w-2xl md:text-xl font-extralight my-4 text-[#CCCCCC]'>{intro}</p>
			{/* <a className='px-6 py-2 inline-block rounded-lg mx-auto text-white text-md bg-gradient-to-br  from-primary-dark  to-[hsla(4,75%,49%,0.95)] '>
				Get to know me
			</a> */}
		</div>
	);
}
// md:w-8/12 lg:w-/12
