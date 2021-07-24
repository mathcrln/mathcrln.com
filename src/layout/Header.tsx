import Link from 'next/link';
import Logo from '@/components/assets/Logo';
// import Moon from '@/components/assets/Moon';
// import Sun from '@/components/assets/Sun';
// import useDarkMode from '@/hooks/useDarkMode';
import Container from './Container';
import Navigation from './Navigation';

export default function Header(): JSX.Element {
	// const [theme, setTheme] = useDarkMode();

	return (
		<header className='sticky top-0 bg-lightestGray dark:bg-darkGrey z-50 dark:bg-opacity-95'>
			<Container className='flex justify-between py-5 md:py-6 '>
				<Link href='/' passHref>
					<a>
						<div className='flex items-center '>
							<Logo className='w-8' />
							<p className='text-xl font-light ml-3'>Mathieu Céraline</p>
						</div>
					</a>
				</Link>
				<div className='md:flex hidden items-center'>
					<Navigation />
					{/* <button type='button' className='ml-4 w-5 ' onClick={() => setTheme('toggle')}>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</button> */}
				</div>
				<button type='button' className='md:hidden'>
					<span className='block border border-white w-8 my-2 border-opacity-60' />
					<span className='block border border-white w-8 my-2 border-opacity-60' />
				</button>
			</Container>
		</header>
	);
}
