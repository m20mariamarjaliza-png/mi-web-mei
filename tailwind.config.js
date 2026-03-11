/** @type {import('tailwindcss').Config} */
export default {
  // Ensure hover styles apply even on devices that report `hover: none` (e.g. touch-first laptops).
  future: {
    hoverOnlyWhenSupported: false,
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

