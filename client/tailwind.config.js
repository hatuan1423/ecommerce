/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				red: "rgb(var(--color-red) / <alpha-value>)",
				bg: "rgb(var(--color-bg) / <alpha-value>)",
				ascent: {
					1: "rgb(var(--color-ascent-1) / <alpha-value>)",
					2: "rgb(var(--color-ascent-2) / <alpha-value>)"
				},
			},
			padding: {
				76: "76px",
				70: "70px"
			},
			borderColor: {
				'border': "rgb(var(--color-border) / <alpha-value>)",
			},
			borderWidth: {
				'1': "0.8px"
			},
			// flex: {
			// 	"3": 3,
			// 	"4": 4,
			// 	"5": 5,
			// 	"6": 6
			// }
		}
	},
	plugins: [],
}

