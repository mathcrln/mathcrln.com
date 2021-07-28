// import { GithubLogo, LinkedinLogo, TwitterLogo } from '@/components/assets/SocialMedia';

// import Logo from '@/components/assets/Logo';
import Container from './Container';

export default function Footer({ className = '' }: { className: string }): JSX.Element {
	return (
		<footer className={` text-center py-4 ${className}`}>
			<Container>
				<p className='text-center'>©2021, Mathieu Céraline</p>
				{/* <Logo className='h-10' />
				<div className='flex space-x-3'>
					<GithubLogo href='https://github.com/mathcrln' />
					<LinkedinLogo href='https://linkedin.com/in/mathieu-ceraline' />
					<TwitterLogo href='https://twitter.com/mathcrln' />
				</div> */}
			</Container>
		</footer>
	);
}
