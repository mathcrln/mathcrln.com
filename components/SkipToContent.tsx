export default function SkipToContent(): JSX.Element {
	return (
		<a
			className='px-4 py-2 max-w-max absolute top-5 -left-80 visible text-center block w-full dark:bg-primary-dark bg-white transform focus:translate-x-80 duration-30 ease-in'
			href='#content'
		>
			Skip to content
		</a>
	);
}
