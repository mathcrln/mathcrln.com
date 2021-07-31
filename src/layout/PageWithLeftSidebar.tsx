type IPageWithLeftSidebar = {
	className?: string;
	children: [JSX.Element, JSX.Element];
};

export default function PageWithLeftSidebar({ children, className }: IPageWithLeftSidebar): JSX.Element {
	return <div className={`grid gap-8 | xl:gap-14 md:grid-cols-[1fr,4fr] ${className}`}>{children}</div>;
}
