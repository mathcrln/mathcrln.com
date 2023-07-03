const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'pages/**/*.{js,ts,jsx,tsx}',
		'components/**/*.{js,ts,jsx,tsx}',
		'components/icons/**/*.{js,ts,jsx,tsx}',
		'components/layout/**/*.{js,ts,jsx,tsx}',
		'features/**/*.{js,ts,jsx,tsx}',
		'styles/**/*.{scss, css}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			current: 'currentColor',
			gray: colors.gray,
			blue: colors.sky,
			red: colors.rose,
			green: colors.green,
			purple: colors.purple,
			yellow: colors.yellow,
			pink: colors.pink,
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
				darkGrey: '#0F1216',
				lightestGray: '#FAFAFA',
				white: '#FFFFFF',
			},
			backgroundImage: {
				lines: "url('/lines.png')",
			},
		},
	},
	plugins: [],
};
