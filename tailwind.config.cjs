/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "lnsf-yellow": "#FFD059",
        "lnsf-blue": "#0266FF",
        "lnsf-light": "#efefef",
        "lnsf-light-text": "#7a7a7a",
      },
      boxShadow: {
        lnsf: "0px 27px 41px -14px rgba(2, 102, 255, 0.13)",
      },
    },
  },
  plugins: [],
};
