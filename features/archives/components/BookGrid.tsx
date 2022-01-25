export default function BookGrid({ children }: { children: JSX.Element }): JSX.Element {
	return <div className='grid grid-cols-2 gap-10 md:grid-cols-4'>{children}</div>;
}
