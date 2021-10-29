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
		];
	},
});
