import slugify from 'slugify';
import isInternalLink from '@/utils/isInternalLink';
import Link from 'next/dist/client/link';

const H2 = ({ children }: { children: string }): JSX.Element => {
	const id = slugify(children, { lower: true, strict: true });
	return (
		<h2 id={id} className='text-3xl mt-14 mb-4 font-extrabold first-of-type:mt-0'>
			{children}
		</h2>
	);
};

const H3 = ({ children }: { children: string }): JSX.Element => {
	const id = slugify(children, { lower: true, strict: true });
	return (
		<h3 id={id} className='text-2xl mt-10 mb-4 font-extrabold first-of-type:mt-0'>
			{children}
		</h3>
	);
};

const P = ({ children }: { children: JSX.Element }): JSX.Element => <p className='mb-5'>{children}</p>;

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

const UL = ({ children }: { children: JSX.Element }): JSX.Element => <ul className='mb-10 list-disc'>{children}</ul>;

const LI = ({ children }: { children: JSX.Element }): JSX.Element => <li className='list-inside'>{children}</li>;

export { H2, H3, P, A, UL, LI };
