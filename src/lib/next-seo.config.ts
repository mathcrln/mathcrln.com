const SEO = {
	dangerouslySetAllPagesToNoIndex: true,
	dangerouslySetAllPagesToNoFollow: true,
	dangerouslyDisableGooglebot: true,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://mathieuceraline.com',
		site_name: 'Mathieu Céraline',
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
