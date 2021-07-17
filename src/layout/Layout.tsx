import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: any }): JSX.Element {
	return (
		<div className='flex flex-col min-h-full'>
			<Header />
			{children}
			<Footer className='mt-auto' />
		</div>
	);
}
