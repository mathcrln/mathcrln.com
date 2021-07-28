const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'src/pages/**/*.{js,ts,jsx,tsx}',
		'src/components/**/*.{js,ts,jsx,tsx}',
		'src/layout/**/*.{js,ts,jsx,tsx}',
		'src/styles/**/*.{scss, css}',
	],
	darkMode: 'media',
	theme: {
		colors: {
			gray: colors.coolGray,
			blue: colors.sky,
			red: colors.rose,
		},
		fontFamily: {
			sans: ['Mulish', 'ui-sans-serif', 'system-ui'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: {
					light: '#33517E',
					dark: '#FDB237',
				},
				transparent: 'transparent',
				darkGrey: '#20232A',
				lightestGray: '#FAFAFA',
				white: '#FFFFFF',
			},
			backgroundImage: {
				lines: "url('/lines.png')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
