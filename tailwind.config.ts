import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D71920",
          redDark: "#B0141A",
          charcoal: "#15181D",
          ink: "#22262C",
          offwhite: "#F7F6F2",
          grey: "#6D7278",
          border: "#E5E5E5",
          gold: "#B69A72",
        },
      },
      fontFamily: {
        heading: ["var(--font-google-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-google-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "80rem",
      },
      letterSpacing: {
        caps: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
