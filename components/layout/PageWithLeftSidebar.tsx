type IPageWithLeftSidebar = {
	className?: string;
	children: [JSX.Element, JSX.Element];
};

export default function PageWithLeftSidebar({ children, className }: IPageWithLeftSidebar): JSX.Element {
	return <div className={`| grid gap-8 md:grid-cols-[2fr,5fr] xl:gap-14 ${className}`}>{children}</div>;
}
