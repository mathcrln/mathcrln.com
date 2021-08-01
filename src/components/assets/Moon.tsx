export default function Moon({ className }: { className?: string }): JSX.Element {
	return (
		<svg className={`fill-current h-[16px] w-[16px]  ${className}`} viewBox='0 0 18 19' xmlns='http://www.w3.org/2000/svg'>
			<path d='M17.3005 13.3527C13.775 15.0318 9.43586 14.0949 6.94753 10.881C4.39207 7.58047 4.65043 2.99151 7.35541 0C6.01696 0.272109 4.71882 0.847848 3.56581 1.74056C-0.449074 4.84907 -1.18384 10.6237 1.92467 14.6386C5.03318 18.6535 10.8078 19.3883 14.8227 16.2797C15.8792 15.4618 16.7085 14.4592 17.3005 13.3527Z' />
		</svg>
	);
}

Moon.defaultProps = {
	className: '',
};
