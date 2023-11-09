import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#4ADE80",
      secondary: "#e88eed",
      dark: "#18181B",
      light: "#F2F2F2",
    },

    extend: {
      
    },
  },
  plugins: [],
}
export default config
