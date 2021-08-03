import slugify from 'slugify';

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

// const A = ({ href, children }: { href: string; children: string }): JSX.Element => {
// 	const className = 'text-primary-light dark:text-primary-dark hover:underline';
// 	if (isInternalLink(href)) {
// 		return (
// 			<Link href={href}>
// 				<a href={href} className={className} title={children}>
// 					{children}
// 				</a>
// 			</Link>
// 		);
// 	}
// 	return (
// 		<a href={href} className={className} target='_blank' rel='noreferrer' title={children}>
// 			{children}
// 		</a>
// 	);
// };

const UL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ul className='mb-10 list-disc space-y-2 text-lg md:text-xl my-4 dark:text-[#CCCCCC]'>{children}</ul>
);

const LI = ({ children }: { children: JSX.Element }): JSX.Element => <li className='list-inside'>{children}</li>;
const OL = ({ children }: { children: JSX.Element }): JSX.Element => (
	<ol className='mb-10 list-decimal space-y-2 text-lg md:text-xl my-4 dark:text-[#CCCCCC]'>{children}</ol>
);
const HR = (): JSX.Element => <hr className='my-20 w-1/2 mx-auto' />;

export { H2, H3, P, UL, LI, OL, HR };
