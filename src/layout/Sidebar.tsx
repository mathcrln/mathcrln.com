type ISidebar = {
	className?: string;
	children: JSX.Element | JSX.Element[];
};

export default function Sidebar({ className, children }: ISidebar): JSX.Element {
	return (
		<aside
			className={` p-6 -mx-5 | md:-mx-0 self-start md:border-r md:p-0 md:pr-4 
            mx:mx-0 md:sticky md:top-80 | xl:pr-8 xl:w-[250px] | 
            border-primary-light dark:border-primary-dark ${className}`}
		>
			{children}
		</aside>
	);
}
