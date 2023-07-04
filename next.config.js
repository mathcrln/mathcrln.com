const nextTranslate = require('next-translate-plugin');
const withMDX = require('@next/mdx')();

module.exports = nextTranslate(
	withMDX({
		reactStrictMode: true,
		images: { domains: ['media.graphassets.com'] },
		i18n: {
			locales: ['en', 'fr', 'es'],
			defaultLocale: 'en',
		},
	})
);
