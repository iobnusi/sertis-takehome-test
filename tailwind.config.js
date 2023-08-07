/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['"Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				board: "#F2F1F6",
				"button-hover": "#E6E6E6",
				"side-nav-header": "#29CBFF",
				"side-nav-body": "#22B3E1",
				"side-nav-icon": "#20ACD7",
				"side-nav-primary": "#DDE9EC",
				"side-nav-secondary": "#1C91B9",
				white: "#FFFFFF",
				"card-body": "#A6A6A8",
				"card-title": "#52467D",
				"like-red": "#F91880",
				delete: "#ED1C24",
				"status-hot-take": "#ED1C24",
				"status-true-fact": "#69CFF1",
				"status-interesting": "#87E1C3",
				"status-question": "#FBAB6D",
				"profile-0": "#FF6738",
				"profile-1": "#FF40F6",
				"profile-2": "#19ADFF",
				"profile-3": "#02C97A",
			},
		},
	},
	plugins: [],
};
