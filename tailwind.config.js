const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		colors: {
			blue: {
				10: '#8BB9E3',
				20: '#6A87C1',
				30: '#5973B0',
				40: '#395793',
				50: '#2F4171',
				...colors.blue,
			},
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			bluegray: colors.blueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			orange: colors.orange,
			green: colors.green,
			lime: colors.lime,
		},
		fontFamily: {},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
