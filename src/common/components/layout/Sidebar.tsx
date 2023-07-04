type ISidebar = {
	className?: string;
	children: JSX.Element | JSX.Element[];
};

export default function Sidebar({ className, children }: ISidebar): JSX.Element {
	return (
		<aside
			className={` | mx:mx-0 | | -mx-5 self-start border-primary-light p-6 
            dark:border-primary-dark md:sticky md:top-80 md:-mx-0 md:border-r md:p-0 md:pr-4 
            xl:w-[250px] xl:pr-8 ${className}`}
		>
			{children}
		</aside>
	);
}
