import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }): JSX.Element {
	return (
		<svg className={className} viewBox='0 0 226 254' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M184.617 127.002L124.617 159.526C123.005 160.4 122 162.087 122 163.922V245.65C122 249.428 126.03 251.841 129.361 250.057L189.361 217.921C190.986 217.05 192 215.356 192 213.513V131.398C192 127.608 187.949 125.196 184.617 127.002Z'
				className='fill-current text-primary-light dark:text-primary-dark'
			/>
			<path
				d='M41.3828 127.002L101.383 159.526C102.995 160.4 104 162.087 104 163.922V245.65C104 249.428 99.97 251.841 96.6392 250.057L36.6392 217.921C35.0143 217.05 34 215.356 34 213.513V131.398C34 127.608 38.0513 125.196 41.3828 127.002Z'
				className='fill-current text-primary-light dark:text-primary-dark'
			/>

			<path
				d='M110.295 112.586L20.599 61.3414C17.2395 59.4221 17.2395 54.5779 20.599 52.6586L110.295 1.41379C111.829 0.537445 113.712 0.535586 115.248 1.40889L205.357 52.6537C208.728 54.5708 208.728 59.4293 205.357 61.3463L115.248 112.591C113.712 113.464 111.829 113.463 110.295 112.586Z'
				className='fill-current text-primary-light dark:text-primary-dark'
			/>

			<path
				d='M17.53 243H9C6.23858 243 4 240.761 4 238V77.4598C4 73.656 8.07884 71.2452 11.4111 73.0795L110.589 127.673C112.09 128.499 113.91 128.499 115.411 127.673L214.589 73.0795C217.921 71.2452 222 73.6559 222 77.4597V238C222 240.761 219.761 243 217 243H208.47C205.709 243 203.47 240.761 203.47 238V112.768C203.47 108.998 199.457 106.584 196.127 108.351L115.343 151.211C113.878 151.989 112.122 151.989 110.657 151.211L29.8734 108.351C26.5432 106.584 22.53 108.998 22.53 112.768V238C22.53 240.761 20.2914 243 17.53 243Z'
				fill='white'
				className='stroke-current text-primary-light dark:stroke-0'
			/>
		</svg>
	);
}

export function LogoLink({ href, className = '' }: { href: string; className?: string }): JSX.Element {
	return (
		<Link href={href} passHref>
			<a>
				<Logo className={className} />
			</a>
		</Link>
	);
}

Logo.defaultProps = {
	className: '',
};
