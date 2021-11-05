import isInternalLink from 'utils/isInternalLink';
import Link from 'next/dist/client/link';

export default function LinkWrapper({
	className = '',
	children,
	href,
	title,
}: {
	className?: string;
	href: string;
	title?: string;
	children: JSX.Element | React.ReactNode | string;
}): JSX.Element {
	if (isInternalLink(href))
		return (
			<Link href={href} passHref>
				<a className={className} title={title}>
					{children}
				</a>
			</Link>
		);
	return (
		<a className={className} href={href} title={title} target='_blank' rel='noreferrer'>
			{children}
		</a>
	);
}
