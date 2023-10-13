import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#433A3F",
        nyanza: "#E4FDE1",
        olive: "#677601",
        "yellow-green": "#B0CF10",
      },
    },
  },
  plugins: [],
};
export default config;
