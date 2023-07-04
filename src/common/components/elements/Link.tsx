import LinkWrapper from './LinkWrapper';

export default function CustomLink({
	className = '',
	children,
	href,
}: {
	className?: string;
	href: string;
	children: JSX.Element | React.ReactNode | string;
}): JSX.Element {
	const styles = 'font-medium text-primary-light dark:text-primary-dark hover:underline';

	return (
		<LinkWrapper href={href} className={`${styles} ${className}`}>
			{children}
		</LinkWrapper>
	);
}
