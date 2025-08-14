/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-bg": "rgb(var(--bg-rgb) / <alpha-value>)",
        "neutral-mid": "rgb(var(--card-rgb) / <alpha-value>)",
        "text-base": "var(--color-text)",
        "text-muted": "var(--color-muted)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-hover": "var(--color-accent-hover)",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
