export default function SkipToContent(): JSX.Element {
	return (
		<a
			className='duration-30 visible absolute -left-80 top-5 block w-full max-w-max transform bg-white px-4 py-2 text-center ease-in focus:translate-x-80 dark:bg-primary-dark'
			href='#content'
		>
			Skip to content
		</a>
	);
}
