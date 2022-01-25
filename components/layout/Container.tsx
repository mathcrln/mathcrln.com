export default function Container({
	className = '',
	children,
}: {
	className?: string;
	children: JSX.Element | JSX.Element[] | React.ReactNode;
}): JSX.Element {
	return <div className={`mx-auto w-11/12 max-w-screen-xl ${className || ''}`}>{children}</div>;
}

Container.defaultProps = {
	className: '',
};
