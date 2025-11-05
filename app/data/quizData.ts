export interface AnswerOption {
    id: number
    text: string
    icon?: string
}

export interface Question {
    id: number
    questionText: string
    options: AnswerOption[]
}

export const TOTAL_QUESTIONS = 6

export const quizQuestions: Question[] = [
    {
        id: 1,
        questionText: 'What is your main reason for wanting to quit drinking?',
        options: [
            { id: 11, text: 'Health', icon: 'IconHealth' },
            { id: 12, text: 'Relationships', icon: 'IconRelationships' },
            { id: 13, text: 'Control', icon: 'IconControl' },
            { id: 14, text: 'Money', icon: 'IconMoney' },
            { id: 15, text: 'Performance', icon: 'IconPerformance' },
            { id: 16, text: 'Role model', icon: 'IconRoleModel' },
        ]
    },
    {
        id: 2,
        questionText: 'What do you think is the main reason you drink?',
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
        options: [
            { id: 31, text: 'Yes', icon: 'IconYes' },
            { id: 32, text: `I'm not sure`, icon: 'IconNotSure' },
            { id: 33, text: 'No', icon: 'IconNo' },
        ]
    },
    {
        id: 4,
        questionText: `Do you sometimes feel like you're missing out if you don't participate in group activities or social events?`,
        options: [
            { id: 41, text: 'Yes', icon: 'IconYes' },
            { id: 42, text: `I'm not sure`, icon: 'IconNotSure' },
            { id: 43, text: 'No', icon: 'IconNo' },
        ]
    },
    {
        id: 5,
        questionText: 'Do you often find yourself wanting to escape from your daily responsibilities or pressures?',
        options: [
            { id: 51, text: 'Yes', icon: 'IconYes' },
            { id: 52, text: `I'm not sure`, icon: 'IconNotSure' },
            { id: 53, text: 'No', icon: 'IconNo' },
        ]
    },
    {
        id: 6,
        questionText: 'Do you often seek ways to relax or unwind after a long, stressful day?',
        options: [
            { id: 61, text: 'Yes', icon: 'IconYes' },
            { id: 62, text: `I'm not sure`, icon: 'IconNotSure' },
            { id: 63, text: 'No', icon: 'IconNo' },
        ]
    }
]