/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

type LinkProps = {
	href: string;
	title: string;
	className?: string;
	handler?: () => void;
};

export default function NavLink({ href, title, className = '', handler }: LinkProps): JSX.Element {
	const router = useRouter();
	const activeStyles =
		router.pathname.split('/')[1] === href.split('/')[1]
			? 'border-b-2 border-primary-light dark:border-primary-dark font-bold'
			: 'font-light';
	// const handleKeyPress =
	return (
        (<Link
            href={href}
            passHref
            className={`mx-3 max-w-max dark:text-white ${activeStyles} ${className}`}
            {...(handler && { onClick: handler })}>

            {title}

        </Link>)
    );
}

export type INavLink = {
	title: string;
	slug: string;
};
