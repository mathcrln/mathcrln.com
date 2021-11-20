export default function SkipToContent(): JSX.Element {
	return (
		<a
			className='px-4 py-2 max-w-max absolute top-0 left-2 visible text-center block w-full dark:bg-primary-dark bg-white transform -translate-y-10 focus:translate-y-4 duration-10 ease-in-out'
			href='#content'
		>
			Skip to content
		</a>
	);
}
