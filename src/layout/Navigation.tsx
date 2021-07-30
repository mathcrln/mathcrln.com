import React from 'react';
import NavLink from '@/components/shared/NavLink';
import { INavLink } from 'src/types/links';
import Sun from '@/components/assets/Sun';
import Moon from '@/components/assets/Moon';

type NavigationProps = {
	links: Array<INavLink>;
	theme: string;
	toggleTheme: (action: 'toggle' | 'auto') => void;
};
type MobileNavProps = NavigationProps & {
	isMobileNavOpen: boolean;
	mobileHandler: () => void;
};

export default function Navigation({ links, isMobileNavOpen, mobileHandler, theme, toggleTheme }: MobileNavProps): JSX.Element {
	return (
		<>
			<DesktopNavigation links={links} theme={theme} toggleTheme={toggleTheme} />
			<MobileNavigation
				mobileHandler={mobileHandler}
				isMobileNavOpen={isMobileNavOpen}
				links={links}
				theme={theme}
				toggleTheme={toggleTheme}
			/>
		</>
	);
}

function DesktopNavigation({ links, theme, toggleTheme }: NavigationProps): JSX.Element {
	return (
		<div className='hidden md:flex items-center'>
			<nav className='flex'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} />
				))}
			</nav>
			<button type='button' className='ml-4 w-5 ' onClick={() => toggleTheme('toggle')}>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</button>
			<button type='button' className='ml-4 w-5 ' onClick={() => toggleTheme('auto')}>
				{theme === 'dark' ? <Sun /> : <Moon />}
			</button>
		</div>
	);
}
function MobileNavigation({ links, isMobileNavOpen, mobileHandler, theme, toggleTheme }: MobileNavProps): JSX.Element {
	const openClassName = isMobileNavOpen
		? 'absolute block h-screen top-20 left-0 w-full bg-white dark:bg-darkGrey border-t-2 border-primary-light dark:border-primary-dark'
		: 'hidden dark:bg-transparent';
	return (
		<div className={`transition transform origin-bottom duration-1000 ease-in-out ${openClassName} md:hidden`}>
			<nav className='py-10 text-2xl flex flex-col justify-center items-center space-y-7'>
				{links.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.slug} handler={mobileHandler} />
				))}
				<button type='button' className='w-5' onClick={() => toggleTheme('toggle')}>
					{theme === 'dark' ? <Sun /> : <Moon />}
				</button>
			</nav>
		</div>
	);
}
