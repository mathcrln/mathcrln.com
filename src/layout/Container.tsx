export default function Container({
	className = '',
	children,
}: {
	className?: string;
	children: JSX.Element | JSX.Element[];
}): JSX.Element {
	return <div className={`w-11/12 max-w-screen-xl mx-auto ${className || ''}`}>{children}</div>;
}

Container.defaultProps = {
	className: '',
};
