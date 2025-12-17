/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#D97706",
        "primary-dark": "#b26500",
        secondary: "#4B5563",
        "secondary-light": "#6B7280",
        background: "#464444ff",
        foreground: "#F9FAFB",
        muted: "#9CA3AF",
        card: "#2A2A2A",
      "card-light": "#3B3B3B",
      "card-foreground": "#FFFFFF",
        border: "#3F3F46",
        header: "#151515",
        footer: "#151515",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

