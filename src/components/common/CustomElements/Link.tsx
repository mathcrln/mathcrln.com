import isInternalLink from '@/utils/isInternalLink';
import NextLink from 'next/dist/client/link';

export default function CustomLink({
	className = '',
	children,
	href,
}: {
	className?: string;
	href: string;
	children: JSX.Element | string;
}): JSX.Element {
	const styles = 'font-medium text-primary-light dark:text-primary-dark hover:underline';
	if (isInternalLink(href))
		return (
			<NextLink href={href} passHref>
				<a className={`${styles} ${className}`}>{children}</a>
			</NextLink>
		);
	return (
		<a href={href} title='title' target='_blank' rel='noreferrer' className={`${styles} ${className}`}>
			{children}
		</a>
	);
}
