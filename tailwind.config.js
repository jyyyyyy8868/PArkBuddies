/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sage: {
          50: "#f0f5f1",
          100: "#dde8e0",
          200: "#bcd0c2",
          300: "#9bb4a4",
          400: "#7C9885",
          500: "#6b8772",
          600: "#566b5c",
          700: "#445548",
          800: "#333d36",
          900: "#222824",
        },
        cream: {
          50: "#fdfbf6",
          100: "#FAF7F0",
          200: "#f5f0e3",
          300: "#ebe3d0",
        },
        earth: {
          100: "#e8ddc9",
          200: "#D4C5A9",
          300: "#bda884",
          400: "#a0845c",
        },
        honey: {
          200: "#faf0c4",
          300: "#f5e39a",
          400: "#F0D77B",
          500: "#e0c44a",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
        display: ['"ZCOOL XiaoWei"', '"Noto Serif SC"', "serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(68, 85, 72, 0.15)",
        card: "0 2px 12px -4px rgba(68, 85, 72, 0.12)",
        float: "0 8px 30px -6px rgba(68, 85, 72, 0.2)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "60%": { transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        "sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.5)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-60px) scale(1.2)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "pop-in": "pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "breathe": "breathe 4s ease-in-out infinite",
        "sway": "sway 3s ease-in-out infinite",
        "float-up": "float-up 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
