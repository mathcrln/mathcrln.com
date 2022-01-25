export default function Arrow({
	className,
	direction = 'right',
	animate = false,
	size = 'sm',
}: {
	className?: string;
	direction?: 'left' | 'right' | 'up' | 'down';
	size?: 'sm' | 'md' | 'lg';
	animate?: boolean;
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
			className={`inline transform fill-current duration-200 ease-in-out ${className} ${baseRotation} ${
				animate && animation
			}
            ${size === 'sm' && 'h-[24px] w-[24px]'}
            ${size === 'md' && 'h-[28px] w-[28px]'}
            ${size === 'lg' && 'h-[32px] w-[32px]'}
            `}
		>
			<path d='m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z' />
		</svg>
	);
}
