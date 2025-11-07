import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  safelist: [
    'text-summary-green',
    'text-summary-red',
    'text-summary-yellow',
    'bg-summary-green',
    'bg-summary-red',
    'bg-summary-yellow',
    'text-white',
    'text-summary-purple',
    'border-summary-purple-border',
    'bg-quiz-green-border',
    'border-quiz-green-border',
    'text-quiz-green-border',
    'hover:bg-quiz-green-border',
    'hover:border-quiz-green-border',

    'bg-quiz-yellow-border',
    'border-quiz-yellow-border',
    'text-quiz-yellow-border',
    'hover:bg-quiz-yellow-border',
    'hover:border-quiz-yellow-border',

    'bg-quiz-red-border',
    'border-quiz-red-border',
    'text-quiz-red-border',
    'hover:bg-quiz-red-border',
    'hover:border-quiz-red-border'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'primary-purple': '#5349DB',
        'light-purple-bg': '#F0EFFB',
        'text-gray': '#303030',
        'text-summary-purple': '#6A61F1',
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
        'purple-border': '#767AF9'

      },
    },
  },
  plugins: [],
}
export default config