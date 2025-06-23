/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "#FAFAFA",
      foreground: "#1A1A1A",
      primary: {
        DEFAULT: "#3B82F6",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#8B5CF6",
        foreground: "#FFFFFF",
      },
      muted: {
        DEFAULT: "#F8FAFC",
        foreground: "#64748B",
      },
      accent: {
        DEFAULT: "#06B6D4",
        foreground: "#FFFFFF",
      },
      success: {
        DEFAULT: "#10B981",
        foreground: "#FFFFFF",
      },
      warning: {
        DEFAULT: "#F59E0B",
        foreground: "#FFFFFF",
      },
      danger: {
        DEFAULT: "#EF4444",
        foreground: "#FFFFFF",
      },
      card: {
        DEFAULT: "#FFFFFF",
        foreground: "#1A1A1A",
      },
      popover: {
        DEFAULT: "#FFFFFF",
        foreground: "#1A1A1A",
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "fade-in-up": {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "slide-in": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      "scale-in": {
        "0%": { opacity: "0", transform: "scale(0.9)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "fade-in-up": "fade-in-up 0.5s ease-out",
      "slide-in": "slide-in 0.5s ease-out",
      "scale-in": "scale-in 0.3s ease-out",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backdropBlur: {
      xs: '2px',
    },
  },
};
export const plugins = [require("tailwindcss-animate")];