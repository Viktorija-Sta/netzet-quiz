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
        'quiz-yellow-border': '#F5BF23',
        'quiz-red-border': '#F05252',
        'timer-yellow-bg': '#FFC633',
        'summary-green': '#30D18D',
        'summary-red': '#F05252',
        'summary-yellow': '#F5BF23',
        'summary-blue': '#5349DB',
        'summary-gray': '#E5E7EB',
        'summary-purple-border': '#767AF9'
      },
    },
  },
  plugins: [],
}
export default config