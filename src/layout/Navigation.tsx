import React from 'react';
import NavLink from '@/components/shared/NavLink';

export default function Navigation(): JSX.Element {
	// const [menuOpen, setMenuState] = useState(false);

	// function handleToggleMenu() {
	// 	if (menuOpen) {
	// 		setMenuState(false);
	// 	} else {
	// 		setMenuState(true);
	// 	}
	// }

	// function closeMenu() {
	// 	if (menuOpen) {
	// 		setMenuState(false);
	// 	}
	// }

	return (
		<nav className='flex dark:text-white flex-wrap'>
			<NavLink href='/'>Home</NavLink>
			<NavLink href='/about'>About</NavLink>
			<NavLink href='/articles'>Articles</NavLink>
			<NavLink href='/library'>Library</NavLink>
			<NavLink href='/playground'>Playground</NavLink>
		</nav>
	);
}
