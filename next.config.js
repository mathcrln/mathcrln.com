const withMDX = require('@next/mdx')();

module.exports = withMDX({
	reactStrictMode: true,
	images: {
		domains: ['media.graphcms.com', 'localhost'],
	},
	swcMinify: true,
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
				source: '/blogging/:path',
				destination: '/blog/:path',
				permanent: true,
			},
			{
				source: '/inbox/:path',
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
			{
				source: '/culture/cinema/:path',
				destination: '/library/:path',
				permanent: true,
			},
			{
				source: '/atrium/:path',
				destination: '/library/:path',
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/lib/plausible.js',
				destination: 'https://plausible.io/js/plausible.js',
			},
			{
				source: '/lib/api/event',
				destination: 'https://plausible.io/api/event',
			},
			{
				source: '/bee.js',
				destination: 'https://cdn.splitbee.io/sb.js',
			},
			{
				source: '/_hive/:slug',
				destination: 'https://hive.splitbee.io/:slug',
			},
		];
	},
});
