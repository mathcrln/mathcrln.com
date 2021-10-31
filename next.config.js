const withMDX = require('@next/mdx')();

module.exports = withMDX({
	reactStrictMode: true,
	images: {
		domains: ['media.graphcms.com', 'localhost'],
	},
	async redirects() {
		return [
			{
				source: '/lifestyle/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/creating/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/journal/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/productivity/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/atrium/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/books/:path',
				destination: '/library/:path',
				permanent: true,
			},
			{
				source: '/featured/:path',
				destination: '/blog/:path',
				permanent: true,
			},
		];
	},
});
