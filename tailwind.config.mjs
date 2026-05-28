/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Barlow Condensed"', "system-ui", "sans-serif"],
      },
      colors: {
        idcom: {
          yellow: "#F5A800",
          yellowHi: "#FFB81C",
          black: "#1A1A1A",
          dark: "#2D2D2D",
          steel: "#7F7F7F",
          light: "#F2F2F2",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalIn: {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        modalIn: "modalIn 0.25s ease-out",
      },
    },
  },
  plugins: [],
};
