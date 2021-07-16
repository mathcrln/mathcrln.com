import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

type LinkProps = {
	href: string;
	children: any;
	className?: string;
};

export default function NavLink({ href, children, className = '' }: LinkProps): JSX.Element {
	const router = useRouter();

	const activeStyles = router.pathname === href ? 'border-b-2 border-primary-light  dark:border-primary-dark' : '';

	return (
		<Link href={href} passHref>
			<a className={`dark:text-white text-md mx-3 font-light ${activeStyles}  ${className}`}>{children}</a>
		</Link>
	);
}

NavLink.defaultProps = {
	className: '',
};
