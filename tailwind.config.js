/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        midnight: "#050816",
        electric: "#2563EB",
        neon: "#3B82F6",
        ivory: "#F8FAFC",
        "neon-light": "#60A5FA",
        "neon-dim": "#1D4ED8",
      },
      boxShadow: {
        glow: "0 0 34px rgba(37, 99, 235, 0.32)",
        "glow-lg": "0 0 60px rgba(37, 99, 235, 0.42)",
        "glow-sm": "0 0 18px rgba(59, 130, 246, 0.28)",
        panel: "0 18px 80px rgba(2, 6, 23, 0.45)",
        "panel-sm": "0 8px 40px rgba(2, 6, 23, 0.35)",
        "neon-ring": "0 0 0 1px rgba(59,130,246,0.35), 0 0 28px rgba(59,130,246,0.22)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(59,130,246,0.10) 0 1px, transparent 1px)",
        "gradient-neon": "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)",
        "gradient-neon-h": "linear-gradient(90deg, #2563EB, #60A5FA)",
        "gradient-dark": "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(59,130,246,0.35)" },
          "50%": { boxShadow: "0 0 38px rgba(59,130,246,0.75)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "float": "float 5s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.65s ease forwards",
        "scale-in": "scale-in 0.55s ease forwards",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
