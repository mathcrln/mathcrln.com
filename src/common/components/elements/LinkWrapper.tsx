import { isInternalLink } from '@/utils';
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
			<Link href={href} className={className} title={title} passHref>
				{children}
			</Link>
		);
	return (
		<a className={className} href={href} title={title} target='_blank' rel='noreferrer'>
			{children}
		</a>
	);
}
