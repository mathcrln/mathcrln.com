import React, { useState } from 'react';
import { LogoLink } from '@/components/assets/Logo';
import MenuIcon from '@/components/assets/MenuIcon';
import { NAV_LINKS } from '../data/links';
import Container from './Container';
import Navigation from './Navigation';

export default function Header(): JSX.Element {
	// const [theme, setTheme] = useDarkMode();
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const handleOpenMenu = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	const handleMobileNavClose = () => {
		setMobileNavOpen(false);
	};

	return (
		<header className='sticky top-0 bg-white dark:bg-darkGrey z-50 '>
			<Container className='flex justify-between py-6 md:py-6 '>
				<LogoLink href='/' className='w-8 hover:filter hover:brightness-90' />
				<Navigation links={NAV_LINKS} isMobileNavOpen={mobileNavOpen} mobileHandler={handleMobileNavClose} />
				<MenuIcon handleOpenMenu={handleOpenMenu} menuOpen={mobileNavOpen} />
			</Container>
		</header>
	);
}
