export default function Arrow({
	className,
	direction = 'right',
}: {
	className?: string;
	direction?: 'left' | 'right' | 'up' | 'down';
}): JSX.Element {
	let baseRotation = '';
	let animation = '';
	switch (direction) {
		case 'left':
			baseRotation = 'rotate-180';
			animation = 'group-hover:rotate-[225deg]';
			break;
		case 'up':
			baseRotation = '-rotate-90';
			animation = 'group-hover:-rotate-45';
			break;
		case 'down':
			baseRotation = 'rotate-90';
			animation = 'group-hover:rotate-[125deg]';
			break;
		case 'right':
			baseRotation = '';
			animation = 'group-hover:-rotate-45';
			break;
		default:
			baseRotation = '';
			animation = 'group-hover:-rotate-45';
			break;
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			height='24'
			width='24'
			className={`fill-current transform duration-200 inline ease-in-out ${className} ${baseRotation} ${animation}`}
		>
			<path
				d='m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z'
				data-name='Up Right'
			/>
		</svg>
	);
}
