export default function UpDownArrows({ className = '' }: { className?: string }): JSX.Element {
	return (
		<svg
			viewBox='0 0 24 24'
			className={`h-[16px] w-[16px] stroke-current ${className}`}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
			shapeRendering='geometricPrecision'
		>
			<path d='M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517' />
		</svg>
	);
}
