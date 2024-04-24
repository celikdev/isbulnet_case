/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-primary": "#f5f5f6",
        "brand-primary": "#2253af",
      },
    },
  },
  plugins: [],
};
