import slugify from 'slugify';

function H2({ children }: { children: string }): JSX.Element {
	const id = slugify(children, { lower: true, strict: true });
	return (
		<h2 id={id} className='text-3xl mt-14 mb-4 font-extrabold first-of-type:mt-0'>
			{children}
		</h2>
	);
}
function H3({ children }: { children: string }): JSX.Element {
	const id = slugify(children, { lower: true, strict: true });
	return (
		<h3 id={id} className='text-2xl mt-10 mb-4 font-extrabold first-of-type:mt-0'>
			{children}
		</h3>
	);
}

function P({ children }: { children: JSX.Element }): JSX.Element {
	return <p className='mb-5'>{children}</p>;
}

export { H2, H3, P };
