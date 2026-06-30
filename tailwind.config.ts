import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#003B5C",
          foreground: "#FFFFFF"
        },
        marine: "#052C42",
        ocean: "#0077B6",
        aqua: "#00A6A6",
        mist: "#F3F8FB",
        soft: "#EEF4F7",
        mutedText: "#64748B",
        charcoal: "#111827"
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 60px rgba(5, 44, 66, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
