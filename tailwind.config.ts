// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#5349DB',
        'light-purple-bg': '#F0EFFB',
        'text-gray': '#303030',
        'page-bg': '#F9F6F4',
        'quiz-green-border': '#30D18D',
        'quiz-green-bg': '#F0FDF8', 
        'quiz-yellow-border': '#F5BF23',
        'quiz-yellow-bg': '#FEFDF2',
        'quiz-red-border': '#F05252',
        'quiz-red-bg': '#FEF6F6',
      },
    },
  },
  plugins: [],
}
export default config