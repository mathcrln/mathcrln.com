import React from 'react';
import NavLink, { INavLink } from 'components/elements/NavLink';

type NavigationProps = {
	links: Array<INavLink>;
};
type MobileNavProps = NavigationProps & {
	isMobileNavOpen: boolean;
	mobileHandler: () => void;
};

export default function Navigation({ links, isMobileNavOpen, mobileHandler }: MobileNavProps): JSX.Element {
	return (
		<>
			<DesktopNavigation links={links} />
			<MobileNavigation mobileHandler={mobileHandler} isMobileNavOpen={isMobileNavOpen} links={links} />
		</>
	);
}

function DesktopNavigation({ links }: NavigationProps): JSX.Element {
	return (
		<div className='hidden items-center md:flex'>
			<nav className='flex'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} />
				))}
			</nav>
		</div>
	);
}
function MobileNavigation({ links, isMobileNavOpen, mobileHandler }: MobileNavProps): JSX.Element {
	const openClassName = isMobileNavOpen
		? 'absolute block h-screen top-20 left-0 w-full bg-white dark:bg-darkGrey border-t-2 border-primary-light dark:border-primary-dark'
		: 'hidden dark:bg-transparent';
	return (
		<div className={`origin-bottom transform transition duration-1000 ease-in-out ${openClassName} md:hidden`}>
			<nav className='flex flex-col items-center justify-center space-y-7 py-10 text-2xl'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} handler={mobileHandler} />
				))}
			</nav>
		</div>
	);
}
