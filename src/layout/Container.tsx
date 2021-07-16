export default function Container({ className = '', children }: { className?: string; children: any }): JSX.Element {
	return <div className={`w-11/12 max-w-screen-2xl mx-auto ${className}`}>{children}</div>;
}

Container.defaultProps = {
	className: '',
};
