const SEO = {
	dangerouslySetAllPagesToNoIndex: true,
	dangerouslySetAllPagesToNoFollow: true,
	dangerouslyDisableGooglebot: true,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		site_name: 'Mathieu Céraline',
		images: [
			{
				url: 'https://mathieuceraline.com/mathieu.jpg',
				width: 800,
				height: 600,
				alt: '',
				type: 'image/jpeg',
			},
		],
	},
	twitter: {
		handle: '@mathcrln',
		site: '@mathcrln',
		cardType: 'summary_large_image',
	},
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			href: '/favicon.ico',
			sizes: '76x76',
		},
		{
			rel: 'manifest',
			href: '/manifest.json',
		},
	],
};

export default SEO;
