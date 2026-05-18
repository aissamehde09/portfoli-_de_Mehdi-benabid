/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        midnight: "#050816",
        electric: "#2563EB",
        neon: "#3B82F6",
        ivory: "#F8FAFC",
      },
      boxShadow: {
        glow: "0 0 34px rgba(37, 99, 235, 0.32)",
        panel: "0 18px 80px rgba(2, 6, 23, 0.45)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(59,130,246,0.10) 0 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
