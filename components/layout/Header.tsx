import React, { useState } from 'react';
import { LogoLink } from 'components/icons/Logo';
import MenuIcon from 'components/icons/MenuIcon';
import SkipToContent from '@/components/SkipToContent';
import { NAV_LINKS } from 'data/LINKS';
import Navigation from './Navigation';
import Container from './Container';

export default function Header(): JSX.Element {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const handleOpenMenu = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	const handleMobileNavClose = () => {
		setMobileNavOpen(false);
	};

	return (
		<header className='sticky top-0 bg-white dark:bg-darkGrey z-50'>
			<SkipToContent />
			<Container className='flex justify-between py-6 md:py-6 '>
				<LogoLink href='/' className='w-24 hover:filter hover:brightness-90' />
				<Navigation links={NAV_LINKS} isMobileNavOpen={mobileNavOpen} mobileHandler={handleMobileNavClose} />
				<MenuIcon handleOpenMenu={handleOpenMenu} menuOpen={mobileNavOpen} />
			</Container>
		</header>
	);
}
