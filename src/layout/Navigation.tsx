import React from 'react';
import NavLink from '@/components/shared/NavLink';
import { INavLink } from 'src/types/links';

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
			<DesktopNavigation links={links} />{' '}
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
			{/* <button type='button' className='ml-4 w-5 ' onClick={() => setTheme('toggle')}>
						{theme === 'dark' ? <Sun /> : <Moon />}
                </button> */}
		</div>
	);
}
function MobileNavigation({ links, isMobileNavOpen, mobileHandler }: MobileNavProps): JSX.Element {
	const openClassName = isMobileNavOpen
		? 'absolute bottom-0 overflow-y-scroll h-screen top-20 left-0 w-full bg-darkGrey border-t border-primary-dark'
		: 'hidden';
	return (
		<div className={`${openClassName}  md:hidden`}>
			<nav className='py-24 text-2xl flex flex-col justify-center items-center space-y-7'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} handler={mobileHandler} />
				))}
			</nav>
		</div>
	);
}
