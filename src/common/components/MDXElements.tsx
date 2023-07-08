/* eslint-disable @next/next/no-img-element */

import { ReactNode } from 'react';

const HR = (): JSX.Element => <hr className='my-20 mx-auto w-1/2' />;

const IMG = ({ src, alt }: { src?: string; alt?: string }): JSX.Element => (
	<span className='my-8 block'>
		<img className='w-full rounded-md' src={src} alt={alt} />
		{alt && alt !== 'image' && <span className='text-md mt-6 block text-center text-gray-600'>{alt}</span>}
	</span>
);

const H2 = ({ children }: { children?: ReactNode }): JSX.Element => (
	<>
		<HR />
		<h2 className='mt-14 mb-8 text-3xl font-bold'>{children}</h2>
	</>
);

const H3 = ({ children }: { children?: ReactNode }): JSX.Element => <h3 className='mt-10 mb-8 text-2xl font-bold'>{children}</h3>;

const H4 = ({ children }: { children?: ReactNode }): JSX.Element => (
	<h4 className='mt-10 mb-6 text-xl font-semibold'>{children}</h4>
);
const H5 = ({ children }: { children?: ReactNode }): JSX.Element => (
	<h5 className='mt-10 mb-4 text-lg font-semibold'>{children}</h5>
);
const H6 = ({ children }: { children?: ReactNode }): JSX.Element => (
	<h5 className='text-md mt-10 mb-2 font-semibold'>{children}</h5>
);

const P = ({ children }: { children?: any }): JSX.Element =>
	children?.props?.mdxType === 'img' ? (
		<IMG src={children?.props?.src} alt={children?.props?.alt} />
	) : (
		<p className='my-4 text-lg dark:text-[#CCCCCC]'>{children}</p>
	);

const BLOCKQUOTE = ({ children }: { children?: any }): JSX.Element => (
	<blockquote className='my-10  border-l-2 border-primary-dark py-1 pl-4 md:pl-10'>{children}</blockquote>
);

const UL = ({ children }: { children?: any }): JSX.Element => (
	<ul className='my-4 mb-10 list-disc space-y-2  text-lg dark:text-[#CCCCCC]'>{children}</ul>
);

const LI = ({ children }: { children?: any }): JSX.Element => <li className='ml-5 list-outside'>{children}</li>;
const OL = ({ children }: { children?: any }): JSX.Element => (
	<ol className='my-4 mb-10 list-decimal space-y-2  text-lg dark:text-[#CCCCCC]'>{children}</ol>
);

export { H2, H3, H4, H5, H6, P, UL, LI, OL, HR, BLOCKQUOTE, IMG };
