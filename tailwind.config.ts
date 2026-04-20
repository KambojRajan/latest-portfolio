import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FAF5EE",
          200: "#F2E8DA",
          300: "#E8D9C5",
        },
        maroon: {
          DEFAULT: "#3A1C1C",
          light: "#5C3333",
          lighter: "#8B6F6F",
          faint: "#C4AAAA",
        },
        rose: {
          accent: "#E85D75",
        },
      },
    },
  },
  plugins: [],
};

export default config;
