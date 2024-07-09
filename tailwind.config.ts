import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { main: '#063778', light: '#0c6ff1', dark: '#031b3b' },
        secondary: { main: '#F27318', light: '#f59854', dark: '#bf560b' },
        dark: { main: '#0f0f0f', text: '#030202' },
        light: { main: '#F6F6F6', surface: '#e6ebf1' },
      },
    },
  },
  plugins: [],
};
export default config;

