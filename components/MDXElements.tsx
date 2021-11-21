/* eslint-disable @next/next/no-img-element */

const HR = (): JSX.Element => <hr className='my-20 w-1/2 mx-auto' />;

const IMG = ({ src, alt }: { src: string; alt: string }): JSX.Element => (
	<span className='block my-8'>
		<img className='rounded-md w-full' src={src} alt={alt} />
		{alt && alt !== 'image' && <span className='mt-6 block text-center text-md text-gray-600'>{alt}</span>}
	</span>
);

const H2 = ({ children }: { children: string }): JSX.Element => (
	<>
		<HR />
		<h2 className='text-3xl mt-14 mb-8 font-bold'>{children}</h2>
	</>
);

const H3 = ({ children }: { children: string }): JSX.Element => <h3 className='text-2xl mt-10 mb-8 font-bold'>{children}</h3>;

const H4 = ({ children }: { children: string }): JSX.Element => <h4 className='text-xl mt-10 mb-6 font-semibold'>{children}</h4>;
const H5 = ({ children }: { children: string }): JSX.Element => <h5 className='text-lg mt-10 mb-4 font-semibold'>{children}</h5>;
const H6 = ({ children }: { children: string }): JSX.Element => <h5 className='text-md mt-10 mb-2 font-semibold'>{children}</h5>;

const P = ({ children }: { children: JSX.Element }): JSX.Element =>
	children?.props?.mdxType === 'img' ? (
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

const LI = ({ children }: { children: JSX.Element }): JSX.Element => <li className='ml-5 list-outside'>{children}</li>;
const OL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ol className='mb-10 list-decimal space-y-2 text-lg  my-4 dark:text-[#CCCCCC]'>{children}</ol>
);

export { H2, H3, H4, H5, H6, P, UL, LI, OL, HR, BLOCKQUOTE, IMG };
