import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-white": "#FDFAF4",
        cream: "#F5F0E8",
        clay: "#C4957A",
        "clay-light": "#E8CBBF",
        sage: "#8A9E8C",
        "sage-light": "#C4D1C5",
        stone: "#9B9590",
        "stone-light": "#E2DDD6",
        charcoal: "#1C1C1A",
        ink: "#2C2B29",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
