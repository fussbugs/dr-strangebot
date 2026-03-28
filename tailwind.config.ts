import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#07070f",
        "bg-surface": "#0c0c1a",
        "bg-elevated": "#101028",
        "accent-violet": "#8b80f9",
        "accent-gold": "#f0b429",
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'var(--font-geist-mono)',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
