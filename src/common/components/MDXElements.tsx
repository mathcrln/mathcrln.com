/* eslint-disable @next/next/no-img-element */
const IMG = ({ src, alt }: { src: string; alt: string }): JSX.Element => (
	<figure className='my-10'>
		<img className='rounded-md w-full' src={src} alt={alt} />
		{alt && alt !== 'image' && <figcaption className='mt-6 text-center text-md text-gray-600'>{alt}</figcaption>}
	</figure>
);

const H2 = ({ children }: { children: string }): JSX.Element => (
	<h2 className='text-4xl mt-14 mb-8 font-extrabold'>{children}</h2>
);

const H3 = ({ children }: { children: string }): JSX.Element => (
	<h3 className='text-3xl mt-10 mb-8 font-extrabold'>{children}</h3>
);

const P = ({ children }: { children: JSX.Element }): JSX.Element =>
	children?.props?.mdxType ? (
		<IMG src={children?.props?.src} alt={children?.props?.alt} />
	) : (
		<p className='text-lg my-4 dark:text-[#CCCCCC]'>{children}</p>
	);

const BLOCKQUOTE = ({ children }: { children: JSX.Element }): JSX.Element => (
	<blockquote className='border-l-2  my-10 py-1 pl-4 md:pl-10 border-primary-dark'>{children}</blockquote>
);

const UL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ul className='mb-10 list-disc space-y-2 text-lg  my-4 dark:text-[#CCCCCC]'>{children}</ul>
);

const LI = ({ children }: { children: JSX.Element }): JSX.Element => <li className='list-inside'>{children}</li>;
const OL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ol className='mb-10 list-decimal space-y-2 text-lg  my-4 dark:text-[#CCCCCC]'>{children}</ol>
);
const HR = (): JSX.Element => <hr className='my-20 w-1/2 mx-auto' />;

export { H2, H3, P, UL, LI, OL, HR, BLOCKQUOTE, IMG };
