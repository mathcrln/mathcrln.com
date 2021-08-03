import slugify from 'slugify';
import isInternalLink from '@/utils/isInternalLink';
import Link from 'next/dist/client/link';

const H2 = ({ children }: { children: string }): JSX.Element => {
	const id = slugify(children, { lower: true, remove: /[*+~.()'"!:@]/g, strict: true });
	return (
		<h2 id={`_${id}`} className='text-4xl mt-14 mb-8 font-extrabold'>
			{children}
		</h2>
	);
};

const H3 = ({ children }: { children: string }): JSX.Element => {
	const id = slugify(children, { lower: true, remove: /[*+~.()'"!:@]/g, strict: true });
	return (
		<h3 id={`_${id}`} className='text-3xl mt-10 mb-8 font-extrabold'>
			{children}
		</h3>
	);
};

const P = ({ children }: { children: JSX.Element }): JSX.Element => (
	<p className='text-lg md:text-xl my-4 dark:text-[#CCCCCC]'>{children}</p>
);

const A = ({ href, children }: { href: string; children: string }): JSX.Element => {
	const className =
		' border-b-2 border-primary-light dark:border-primary-dark transition-colors duration-500  hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark hover:bg-opacity-70 dark:hover:bg-opacity-70';
	if (isInternalLink(href)) {
		return (
			<Link href={href}>
				<a href={href} className={className} title={children}>
					{children}
				</a>
			</Link>
		);
	}
	return (
		<a href={href} className={className} target='_blank' rel='noreferrer' title={children}>
			{children}
		</a>
	);
};

const UL = ({ children }: { children: JSX.Element }): JSX.Element => <ul className='mb-10 list-disc space-y-2'>{children}</ul>;

const LI = ({ children }: { children: JSX.Element }): JSX.Element => <li className='list-inside'>{children}</li>;
const OL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ol className='mb-10 list-decimal space-y-2 text-lg'>{children}</ol>
);

export { H2, H3, P, A, UL, LI, OL };
