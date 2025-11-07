import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  safelist: [
    'text-white',
    'text-text-gray',

    'text-quiz-green-border',
    'text-quiz-red-border',
    'text-quiz-yellow-border',
    
    'bg-quiz-green-border',
    'bg-quiz-red-border',
    'bg-quiz-yellow-border',

    'hover:bg-quiz-green-border',
    'hover:bg-quiz-yellow-border',
    'hover:bg-quiz-red-border',
    
    
    'hover:border-quiz-green-border',
    'hover:border-quiz-yellow-border',
    'hover:border-quiz-red-border',
    
    'border-summary-purple-border',
    'border-summary-purple',

    'bg-summary-green',
    'bg-summary-red',
    'bg-summary-yellow',
    
    'text-summary-purple',

   
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
        'page-bg': '#F9F6F4',

        'quiz-green-border': '#289F67',
        'quiz-yellow-border': '#FFC633',
        'quiz-red-border': '#E35244',
        'quiz-purple-border': '#767AF9',
        
        'timer-yellow-bg': '#FFC633',
        'summary-purple-border': '#6A61F1',
        'summary-purple': '#6A61F1',
        'summary-red': '#E35244',
        'summary-green': '#289F67',
        'summary-yellow': '#FFC633',

        'summary-gray': '#E5E7EB', 
    
      },
    },
  },
  plugins: [],
}
export default config