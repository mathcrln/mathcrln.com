type MenuIconProps = {
	menuOpen: boolean;
	handleOpenMenu: () => void;
};

export default function MenuIcon({ menuOpen, handleOpenMenu }: MenuIconProps): JSX.Element {
	const common =
		'block border border-primary-light dark:border-white w-10 my-2 border-opacity-60 transition duration-400 ease-in-out transform';
	const transition = {
		line1: 'translate-y-1.5 bg-primary-light dark:bg-primary-dark rotate-[45deg]',
		line2: '-translate-y-1 bg-primary-light dark:bg-primary-dark rotate-[-45deg]',
	};

	return (
		<button type='button' className='md:hidden' onClick={handleOpenMenu}>
			<span className={`${common} ${menuOpen ? transition.line1 : ''}`} />
			<span className={`${common} ${menuOpen ? transition.line2 : ''}`} />
		</button>
	);
}
