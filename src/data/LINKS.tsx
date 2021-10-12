const NAV_LINKS = [
	{
		title: 'Home',
		slug: '/',
	},
	{
		title: 'About',
		slug: '/about',
	},
	{
		title: 'Blog',
		slug: '/blog',
	},
	{
		title: 'Library',
		slug: '/library',
	},
];

const FOOTER_LINKS = [
	{
		name: "What's next?",
		links: [
			{
				title: 'Hire me',
				slug: '/hire',
				isInternal: true,
			},
			{
				title: 'Chat over tea',
				slug: '/tea',
				isInternal: true,
			},
			{
				title: 'Newsletter',
				slug: '/newsletter',
				isInternal: true,
			},
		],
	},
	{
		name: 'Connect',
		links: [
			{
				title: 'Twitter',
				slug: 'https://twitter.com/mathcrln',
				isInternal: false,
			},
			{
				title: 'Github',
				slug: 'https://github.com/mathcrln',
				isInternal: false,
			},
			{
				title: 'Linkedin',
				slug: 'https://linkedin.com/in/mathieu-ceraline',
				isInternal: false,
			},
		],
	},
	{
		name: 'Resources',
		links: [
			{
				title: 'Stack',
				slug: '/stack',
				isInternal: true,
			},
			{
				title: 'Now',
				slug: '/now',
				isInternal: true,
			},
			{
				title: 'Inspirations',
				slug: '/inspirations',
				isInternal: true,
			},
		],
	},
];

export { NAV_LINKS, FOOTER_LINKS };
