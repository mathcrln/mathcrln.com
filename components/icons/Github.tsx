export default function Github({ className = '' }: { className?: string }): JSX.Element {
	return (
		<svg
			className={`fill-current ${className} flex items-center justify-center`}
			viewBox='0 0 40 40'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M40 20C40 28.96 34.12 36.54 26 39.08V34C26 32.29 25.28 30.76 24.14 29.66C29.38 28.71 32 25.66 32 20C32 17.55 31.5 15.61 30.52 14.1C30.96 12.39 31.22 9.96 30 8C27.64 8 25.99 9.39 25.02 10.53C23.57 10.18 21.9 10 20 10C18.2 10 16.54 10.2 15.06 10.61C14.1 9.46 12.42 8 10 8C8.58 10.28 9.16 12.74 9.7 14.12C8.62 15.63 8 17.57 8 20C8 25.66 10.62 28.71 15.86 29.66C15.19 30.31 14.67 31.1 14.35 32H12C10.56 32 10 31.36 9.23 30.32C8.46 29.28 7.63 28.58 6.64 28.29C6.11 28.23 5.75 28.66 6.22 29.04C7.79 30.17 7.9 32.02 8.53 33.23C9.1 34.32 10.28 35 11.61 35H14V39.08C5.88 36.54 0 28.96 0 20C0 8.95 8.95 0 20 0C31.05 0 40 8.95 40 20Z' />
		</svg>
	);
}