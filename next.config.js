const withMDX = require('@next/mdx')();

module.exports = withMDX({
	reactStrictMode: true,
	images: { domains: ['media.graphassets.com'] },
	i18n: {
		locales: ['en', 'fr', 'es'],
		defaultLocale: 'en',
	},
});
