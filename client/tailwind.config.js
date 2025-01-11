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
				76: "76px"
			}
		}
	},
	plugins: [],
}

