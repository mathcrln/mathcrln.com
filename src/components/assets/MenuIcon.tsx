type MenuIconProps = {
	menuOpen: boolean;
	handleOpenMenu: () => void;
};

export default function MenuIcon({ menuOpen, handleOpenMenu }: MenuIconProps): JSX.Element {
	const burgerTransition = {
		line1: 'transition duration-400 ease-in-out transform translate-y-1.5 bg-primary-dark rotate-[45deg]',
		line2: 'transition duration-400 ease-in-out transform -translate-y-1 bg-primary-dark rotate-[-45deg]',
	};

	return (
		<button type='button' className='md:hidden' onClick={handleOpenMenu}>
			<span
				className={`block border border-white w-8 my-2 border-opacity-60 transition ${
					menuOpen ? burgerTransition.line1 : ''
				}`}
			/>
			<span
				className={`block border border-white w-8 my-2 border-opacity-60 transition ${
					menuOpen ? burgerTransition.line2 : ''
				}`}
			/>
		</button>
	);
}
