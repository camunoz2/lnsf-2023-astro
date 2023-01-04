/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "lnsf-yellow": "#FFD059",
        "lnsf-blue": "#0266FF",
        "lnsf-black": "#282828",
      },
      colors: {
        "lnsf-yellow": "#FFD059",
        "lnsf-blue": "#0266FF",
        "lnsf-black": "#282828",
      },
    },
  },
  plugins: [],
};