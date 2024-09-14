/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.blue,
    },
    screens: {
      mob: "375px",
      mobile: "375px",
      tablet: "768px",
      sm: "768px",
      laptop: "1024px",
      md: "1024px",
      desktop: "1280px",
      lg: "1280px",
      laptopl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
