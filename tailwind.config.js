/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        background: "hsl(var(--primary)/ 0.1)",
        font: "hsl(var(--font))",
        secondary: "hsl(var(--secondary))",
      },
      fontFamily: {
        handwriting: '"Dancing Script", cursive',
        primary: '"Pacifico", cursive',
      },
    },
  },
  plugins: [],
};
