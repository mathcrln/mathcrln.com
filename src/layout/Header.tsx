import Link from 'next/link';
import Logo from '@/components/assets/Logo';
import Moon from '@/components/assets/Moon';
import Sun from '@/components/assets/Sun';
import useDarkMode from '@/hooks/useDarkMode';
import Container from './Container';
import Navigation from './Navigation';

export default function Header(): JSX.Element {
	const [theme, setTheme] = useDarkMode();

	return (
		<header className='sticky top-0 bg-lightestGray dark:bg-darkGrey z-50'>
			<Container className='flex flex-col justify-between py-8  items-center md:flex-row'>
				<Link href='/' passHref>
					<a>
						<div className='flex items-center mb-5 md:mb-0'>
							<Logo className='w-8' />
							<p className='text-xl font-light ml-3'>Mathieu Céraline</p>
						</div>
					</a>
				</Link>

				<div className='flex'>
					<Navigation />
					<button type='button' className='ml-4 w-5 ' onClick={() => setTheme('toggle')}>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</button>
				</div>
			</Container>
		</header>
	);
}
