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
      background: "#F6F6F7",
      foreground: "#221F26",
      primary: {
        DEFAULT: "#1EAEDB",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#33C3F0",
        foreground: "#221F26",
      },
      muted: {
        DEFAULT: "#F1F0FB",
        foreground: "#8A898C",
      },
      accent: {
        DEFAULT: "#0FA0CE",
        foreground: "#FFFFFF",
      },
      success: {
        DEFAULT: "#22c55e",
        foreground: "#FFFFFF",
      },
      warning: {
        DEFAULT: "#f59e0b",
        foreground: "#FFFFFF",
      },
      danger: {
        DEFAULT: "#ef4444",
        foreground: "#FFFFFF",
      },
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
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "fade-in-up": "fade-in-up 0.5s ease-out",
      "slide-in": "slide-in 0.5s ease-out",
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];
