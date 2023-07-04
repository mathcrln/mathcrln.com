import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }): JSX.Element {
	return (
		<svg className={className} viewBox='0 0 226 254' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M184.617 127.002L124.617 159.526C123.005 160.4 122 162.087 122 163.922V245.65C122 249.428 126.03 251.841 129.361 250.057L189.361 217.921C190.986 217.05 192 215.356 192 213.513V131.398C192 127.608 187.949 125.196 184.617 127.002Z'
				className=' fill-primary-light dark:fill-primary-dark'
			/>
			<path
				d='M41.3828 127.002L101.383 159.526C102.995 160.4 104 162.087 104 163.922V245.65C104 249.428 99.97 251.841 96.6392 250.057L36.6392 217.921C35.0143 217.05 34 215.356 34 213.513V131.398C34 127.608 38.0513 125.196 41.3828 127.002Z'
				className=' fill-primary-light dark:fill-primary-dark'
			/>

			<path
				d='M110.295 112.586L20.599 61.3414C17.2395 59.4221 17.2395 54.5779 20.599 52.6586L110.295 1.41379C111.829 0.537445 113.712 0.535586 115.248 1.40889L205.357 52.6537C208.728 54.5708 208.728 59.4293 205.357 61.3463L115.248 112.591C113.712 113.464 111.829 113.463 110.295 112.586Z'
				className=' fill-primary-light dark:fill-primary-dark'
			/>

			<path
				d='M17.53 243H9C6.23858 243 4 240.761 4 238V77.4598C4 73.656 8.07884 71.2452 11.4111 73.0795L110.589 127.673C112.09 128.499 113.91 128.499 115.411 127.673L214.589 73.0795C217.921 71.2452 222 73.6559 222 77.4597V238C222 240.761 219.761 243 217 243H208.47C205.709 243 203.47 240.761 203.47 238V112.768C203.47 108.998 199.457 106.584 196.127 108.351L115.343 151.211C113.878 151.989 112.122 151.989 110.657 151.211L29.8734 108.351C26.5432 106.584 22.53 108.998 22.53 112.768V238C22.53 240.761 20.2914 243 17.53 243Z'
				fill='white'
				className=' fill-primary-light opacity-50 dark:stroke-0 dark:fill-white dark:opacity-100'
			/>
		</svg>
	);
}

export function LogoBeta({ className = '' }: { className?: string }): JSX.Element {
	return (
		<svg className={className} viewBox='0 0 197 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_1503:2561)'>
				<path
					d='M49.6463 35.3631L32.3726 44.7403C32.1034 44.8863 31.9355 45.1683 31.9355 45.4747V68.8021C31.9355 69.4339 32.6096 69.8372 33.1664 69.5385L50.44 60.2731C50.7113 60.1276 50.8806 59.8446 50.8806 59.5367V36.0975C50.8806 35.4641 50.203 35.0609 49.6463 35.3631Z'
					className=' fill-primary-light dark:fill-primary-dark'
				/>
				<path
					d='M9.35354 35.3631L26.6271 44.7403C26.8963 44.8863 27.0641 45.1683 27.0641 45.4747V68.8021C27.0641 69.4339 26.3901 69.8372 25.8333 69.5385L8.55982 60.2731C8.28847 60.1276 8.11914 59.8446 8.11914 59.5367V36.0975C8.11914 35.4641 8.7967 35.0609 9.35354 35.3631Z'
					className=' fill-primary-light dark:fill-primary-dark'
				/>
				<path
					d='M29.024 30.6615L3.70388 16.1748C3.14298 15.8539 3.14298 15.045 3.70388 14.7241L29.024 0.237285C29.2807 0.0904688 29.5958 0.0901573 29.8527 0.236466L55.2895 14.7232C55.8523 15.0438 55.8523 15.8551 55.2895 16.1756L29.8527 30.6623C29.5958 30.8087 29.2807 30.8084 29.024 30.6615Z'
					className=' fill-primary-light dark:fill-primary-dark'
				/>
				<path
					d='M4.17931 65.8614H0.835694C0.374154 65.8614 0 65.4872 0 65.0257V20.1162C0 19.4803 0.68217 19.0773 1.23914 19.3843L29.0965 34.741C29.3477 34.8794 29.6523 34.8794 29.9035 34.741L57.7608 19.3843C58.3179 19.0773 59 19.4803 59 20.1162V65.0257C59 65.4872 58.6258 65.8614 58.1643 65.8614H54.8207C54.3592 65.8614 53.985 65.4872 53.985 65.0257V29.7011C53.985 29.0707 53.3138 28.6674 52.7572 28.963L29.8921 41.112C29.6469 41.2424 29.3531 41.2424 29.1079 41.112L6.24282 28.963C5.6862 28.6674 5.015 29.0707 5.015 29.7011V65.0257C5.015 65.4872 4.64084 65.8614 4.17931 65.8614Z'
					fill='white'
					className=' fill-primary-light opacity-50 dark:stroke-0 dark:fill-white dark:opacity-100'
				/>
				<rect
					x='83'
					y='11'
					width='111'
					height='51'
					rx='5'
					className=' fill-white opacity-50 dark:stroke-2 dark:fill-darkGrey dark:opacity-100'
				/>
				<rect
					x='83.5'
					y='11'
					width='110'
					height='50'
					rx='4.5'
					className='stroke-current stroke-primary-light opacity-50 dark:stroke-2 dark:stroke-primary-dark dark:opacity-100'
					strokeOpacity='0.45'
				/>
				<path
					d='M118.744 35.288C120.045 35.6507 121.059 36.312 121.784 37.272C122.509 38.2107 122.872 39.384 122.872 40.792C122.872 42.776 122.211 44.312 120.888 45.4C119.565 46.4667 117.699 47 115.288 47H105.816V24.216H114.968C117.293 24.216 119.096 24.7387 120.376 25.784C121.677 26.808 122.328 28.2693 122.328 30.168C122.328 31.384 122.008 32.44 121.368 33.336C120.749 34.2107 119.875 34.8613 118.744 35.288ZM108.408 34.328H114.552C116.259 34.328 117.549 33.9867 118.424 33.304C119.299 32.6213 119.736 31.6187 119.736 30.296C119.736 27.6933 118.008 26.392 114.552 26.392H108.408V34.328ZM115.064 44.824C116.856 44.824 118.168 44.4933 119 43.832C119.853 43.1493 120.28 42.1147 120.28 40.728C120.28 37.9333 118.541 36.536 115.064 36.536H108.408V44.824H115.064ZM140.749 38.872H128.941C128.963 40.92 129.432 42.4667 130.349 43.512C131.288 44.5573 132.643 45.08 134.413 45.08C136.291 45.08 138.019 44.4507 139.597 43.192L140.461 45.08C139.757 45.7413 138.851 46.264 137.741 46.648C136.653 47.032 135.533 47.224 134.381 47.224C131.864 47.224 129.891 46.488 128.461 45.016C127.032 43.5227 126.317 41.4853 126.317 38.904C126.317 37.2613 126.637 35.8107 127.277 34.552C127.917 33.272 128.813 32.28 129.965 31.576C131.117 30.872 132.429 30.52 133.901 30.52C136.035 30.52 137.709 31.224 138.925 32.632C140.141 34.0187 140.749 35.9387 140.749 38.392V38.872ZM133.933 32.536C132.589 32.536 131.491 32.9413 130.637 33.752C129.805 34.5627 129.272 35.704 129.037 37.176H138.413C138.285 35.6613 137.837 34.5093 137.069 33.72C136.323 32.9307 135.277 32.536 133.933 32.536ZM148.046 32.952V41.752C148.046 42.9467 148.291 43.7893 148.782 44.28C149.272 44.7493 149.966 44.984 150.862 44.984C151.459 44.984 152.035 44.888 152.59 44.696V46.904C151.928 47.1173 151.182 47.224 150.35 47.224C148.814 47.224 147.608 46.7973 146.734 45.944C145.88 45.0693 145.454 43.7893 145.454 42.104V32.952H142.318V30.904H145.454V26.776L148.046 25.848V30.904H152.654V32.952H148.046ZM169.953 30.904V47H167.393V44.088C166.924 45.0907 166.209 45.8693 165.249 46.424C164.311 46.9573 163.212 47.224 161.953 47.224C160.524 47.224 159.265 46.8827 158.177 46.2C157.111 45.5173 156.279 44.5573 155.681 43.32C155.105 42.0613 154.817 40.6 154.817 38.936C154.817 37.272 155.116 35.8107 155.713 34.552C156.311 33.272 157.143 32.28 158.209 31.576C159.297 30.872 160.545 30.52 161.953 30.52C163.212 30.52 164.311 30.7973 165.249 31.352C166.188 31.9067 166.903 32.6853 167.393 33.688V30.904H169.953ZM162.465 45.08C164.044 45.08 165.26 44.5467 166.113 43.48C166.967 42.392 167.393 40.856 167.393 38.872C167.393 36.888 166.967 35.3627 166.113 34.296C165.26 33.2293 164.044 32.696 162.465 32.696C160.887 32.696 159.649 33.2507 158.753 34.36C157.879 35.448 157.441 36.9733 157.441 38.936C157.441 40.8987 157.879 42.4133 158.753 43.48C159.628 44.5467 160.865 45.08 162.465 45.08Z'
					className=' fill-primary-light dark:fill-primary-dark'
				/>
			</g>
		</svg>
	);
}

export function LogoLink({ href, className = '' }: { href: string; className?: string }): JSX.Element {
	return (
		<Link href={href} passHref title='Home — Mathieu Céraline'>
			<LogoBeta className={className} />
		</Link>
	);
}
