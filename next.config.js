const withMDX = require('@next/mdx')();

module.exports = withMDX({
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com', 'source.unsplash.com', 'localhost'],
	},
	pageExtensions: ['tsx', 'mdx'],
});
