export default function BookGrid({ children }: { children: JSX.Element }): JSX.Element {
	return <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>{children}</div>;
}
