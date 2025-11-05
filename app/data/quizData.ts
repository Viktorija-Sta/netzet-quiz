interface ColorClasses {
    border: string
    bg: string
    text: string
    selectedBg: string
    selectedBorder: string
}

export interface AnswerOption {
    id: number
    text: string
    icon: string
    colorClasses?: ColorClasses
}

export interface Question {
    id: number
    questionText: string
    variantType: 'default' | 'colored'
    options: AnswerOption[]
}

export const TOTAL_QUESTIONS = 6

export const quizQuestions: Question[] = [
    {
        id: 1,
        questionText: 'What is your main reason for wanting to quit drinking?',
        variantType: 'default',
        options: [
            { id: 11, text: 'Health', icon: 'IconHealth' },
            { id: 12, text: 'Relationships', icon: 'IconRelationships' },
            { id: 13, text: 'Control', icon: 'IconControl' },
            { id: 14, text: 'Money', icon: 'IconMoney' },
            { id: 15, text: 'Performance', icon: 'IconPerformance' },
            { id: 16, text: 'Role model', icon: 'IconRole' },
        ]
    },
    {
        id: 2,
        questionText: 'What do you think is the main reason you drink?',
        variantType: 'default',
        options: [
            { id: 21, text: 'Stress or anxiety', icon: 'IconStress' },
            { id: 22, text: 'Socializing', icon: 'IconSocializing' },
            { id: 23, text: 'Relaxation', icon: 'IconRelaxation' },
            { id: 24, text: 'Emotional escape', icon: 'IconEmotionalEscape' },
            { id: 25, text: 'Habit', icon: 'IconHabit' },
            { id: 26, text: 'Confidence boost', icon: 'IconConfidence'},
        ]
    },
    {
        id: 3,
        questionText: 'Do you ever drink to feel "normal" or fit in with others?',
        variantType: 'colored',
        options: [
            { id: 31, text: 'Yes', icon: 'IconYes',
                colorClasses: {
                    bg: 'bg-quiz-green-bg', border: 'border-quiz-green-border', text: 'text-quiz-green-border',
                    selectedBg: 'bg-quiz-green-border', selectedBorder: 'border-quiz-green-border'
                }
             },
            { id: 32, text: `I'm not sure`, icon: 'IconNotSure',
                colorClasses: {
                    bg: 'bg-quiz-yellow-bg', border: 'border-quiz-yellow-border', text: 'text-quiz-yellow-border',
                    selectedBg: 'bg-quiz-yellow-border', selectedBorder: 'border-quiz-yellow-border'
                }
             },
            { id: 33, text: 'No', icon: 'IconNo',
                colorClasses: {
                    bg: 'bg-quiz-red-bg', border: 'border-quiz-red-border', text: 'text-quiz-red-border',
                    selectedBg: 'bg-quiz-red-border', selectedBorder: 'border-quiz-red-border'
                }
             },
        ]
    },
    {
        id: 4,
        questionText: `Do you sometimes feel like you're missing out if you don't participate in group activities or social events?`,
        variantType: 'colored',
        options: [
            { id: 41, text: 'Yes', icon: 'IconYes',
                colorClasses: {
                    bg: 'bg-quiz-green-bg', border: 'border-quiz-green-border', text: 'text-quiz-green-border',
                    selectedBg: 'bg-quiz-green-border', selectedBorder: 'border-quiz-green-border'
                }
             },
            { id: 42, text: `I'm not sure`, icon: 'IconNotSure',
                colorClasses: {
                    bg: 'bg-quiz-yellow-bg', border: 'border-quiz-yellow-border', text: 'text-quiz-yellow-border',
                    selectedBg: 'bg-quiz-yellow-border', selectedBorder: 'border-quiz-yellow-border'
                }
             },
            { id: 43, text: 'No', icon: 'IconNo',
                colorClasses: {
                    bg: 'bg-quiz-red-bg', border: 'border-quiz-red-border', text: 'text-quiz-red-border',
                    selectedBg: 'bg-quiz-red-border', selectedBorder: 'border-quiz-red-border'
                }
             },
        ]
    },
    {
        id: 5,
        questionText: 'Do you often find yourself wanting to escape from your daily responsibilities or pressures?',
        variantType: 'colored',
        options: [
            { id: 51, text: 'Yes', icon: 'IconYes',
                colorClasses: {
                    bg: 'bg-quiz-green-bg', border: 'border-quiz-green-border', text: 'text-quiz-green-border',
                    selectedBg: 'bg-quiz-green-border', selectedBorder: 'border-quiz-green-border'
                }
             },
            { id: 52, text: `I'm not sure`, icon: 'IconNotSure',
                colorClasses: {
                    bg: 'bg-quiz-yellow-bg', border: 'border-quiz-yellow-border', text: 'text-quiz-yellow-border',
                    selectedBg: 'bg-quiz-yellow-border', selectedBorder: 'border-quiz-yellow-border'
                }
             },
            { id: 53, text: 'No', icon: 'IconNo',
                colorClasses: {
                    bg: 'bg-quiz-red-bg', border: 'border-quiz-red-border', text: 'text-quiz-red-border',
                    selectedBg: 'bg-quiz-red-border', selectedBorder: 'border-quiz-red-border'
                }
             },
        ]
    },
    {
        id: 6,
        questionText: 'Do you often seek ways to relax or unwind after a long, stressful day?',
        variantType: 'colored',
        options: [
            { id: 61, text: 'Yes', icon: 'IconYes',
                colorClasses: {
                    bg: 'bg-quiz-green-bg', border: 'border-quiz-green-border', text: 'text-quiz-green-border',
                    selectedBg: 'bg-quiz-green-border', selectedBorder: 'border-quiz-green-border'
                }
             },
            { id: 62, text: `I'm not sure`, icon: 'IconNotSure',
                colorClasses: {
                    bg: 'bg-quiz-yellow-bg', border: 'border-quiz-yellow-border', text: 'text-quiz-yellow-border',
                    selectedBg: 'bg-quiz-yellow-border', selectedBorder: 'border-quiz-yellow-border'
                }
             },
            { id: 63, text: 'No', icon: 'IconNo',
                colorClasses: {
                    bg: 'bg-quiz-red-bg', border: 'border-quiz-red-border', text: 'text-quiz-red-border',
                    selectedBg: 'bg-quiz-red-border', selectedBorder: 'border-quiz-red-border'
                }
             },
        ]
    }
]