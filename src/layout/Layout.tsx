// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faBars, faTimes, faSun, faMoon, faMeteor, faMugHot, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
// import { LayoutProps } from './types';
import Footer from './Footer';
// import Wrapper from './styles';

// library.add(fab, faBars, faTimes, faSun, faMoon, faMeteor, faMugHot, faNewspaper);

export default function Layout({ children, theme, toggleTheme }: { children: any; theme: any; toggleTheme: any }): JSX.Element {
	// const [theme, toggleTheme] = useDarkMode();
	// const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<div className='flex flex-col min-h-full'>
			<Header theme={theme} toggleTheme={toggleTheme} />
			{children}
			<Footer className='mt-auto' />
		</div>
	);
}
