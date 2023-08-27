/** @type {import('tailwindcss').Config} */

const getSpacing = (base /* number */, unit /* "px" | "rem" */, values /* number[] */) =>
	values.reduce((acc, value) => ({ ...acc, [value]: base * value + unit }), {});

const spacing = getSpacing(
	0.4,
	'rem',
	[
		0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 6.5, 7, 8, 9, 10, 11, 12, 14, 16, 17, 15, 18, 19, 21, 22,
		28, 85, 256, 350,
	]
);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'title-red': '#ED1921',
				'main-border': '#bbbbbb',
				base: '#2f5097',
				primary: '#2f5097',
				link: '#2f5097',
				placeholder: '#6B7280',
				colorBlur: '#F9FAFB',
				main: '#4b5563',
			},
			boxShadow: {
				base1: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
				base: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
				header: `1px 1px 10px rgba(0,0,0,.15)`,
			},
			lineHeight: {
				base: '1.25',
			},
		},
	},
	plugins: [],
};

function formatColorValue(variable) {
	return `var(${variable})`;
}
