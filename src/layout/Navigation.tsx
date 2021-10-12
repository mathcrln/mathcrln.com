import React from 'react';
import NavLink, { INavLink } from '@/common/components/elements/NavLink';

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
		<div className='hidden md:flex items-center'>
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
		<div className={`transition transform origin-bottom duration-1000 ease-in-out ${openClassName} md:hidden`}>
			<nav className='py-10 text-2xl flex flex-col justify-center items-center space-y-7'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} handler={mobileHandler} />
				))}
			</nav>
		</div>
	);
}
