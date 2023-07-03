import React, { useState } from 'react';
import { LogoLink } from '@/common/components/icons/Logo';
import MenuIcon from '@/common/components/icons/MenuIcon';
import SkipToContent from '@/common/components/SkipToContent';
import Navigation from './Navigation';
import Container from './Container';

const NAV_LINKS = [
	{
		title: 'Home',
		slug: '/',
	},
	{
		title: 'About',
		slug: '/about',
	},
	{
		title: 'Blog',
		slug: '/blog',
	},
	{
		title: 'Library',
		slug: '/library',
	},
];

export default function Header(): JSX.Element {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const handleOpenMenu = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	const handleMobileNavClose = () => {
		setMobileNavOpen(false);
	};

	return (
		<header className='sticky top-0 z-50 bg-white dark:bg-darkGrey'>
			<SkipToContent />
			<Container className='flex justify-between py-6 md:py-6 '>
				<LogoLink href='/' className='w-24 hover:brightness-90 hover:filter' />
				<Navigation links={NAV_LINKS} isMobileNavOpen={mobileNavOpen} mobileHandler={handleMobileNavClose} />
				<MenuIcon handleOpenMenu={handleOpenMenu} menuOpen={mobileNavOpen} />
			</Container>
		</header>
	);
}
