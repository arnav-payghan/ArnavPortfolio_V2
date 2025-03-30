import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_Black: "#080808",
        text_White: "#000000",
        base_Black: "#080808",
        bg_White: "#F6F7FB",
        primary_Blue: "#0057FF",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
