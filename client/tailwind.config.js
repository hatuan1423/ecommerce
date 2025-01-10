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
				ascent: {
					1: "rgb(var(--color-ascent1) / <alpha-value>)",
				},
			}
		}
	},
	plugins: [],
}

