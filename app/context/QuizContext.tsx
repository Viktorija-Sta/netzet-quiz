'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type Gender = 'Male' | 'Female' | null
type Answer = { questionId: number; selectedOptionId: number }

interface QuizContextType {
    gender: Gender
    setGender: (gender: Gender) => void
    answers: Answer[]
    setAnswer: (answer: Answer) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export const QuizProvider = ({ children }: {children: ReactNode }) => {
    const [gender, setGenderState] = useState<Gender>(null)
    const [answers, setAnswersState] = useState<Answer[]>([])

    const setGender = (newGender: Gender) => {
        setGenderState(newGender)
    }

    const setAnswer = (newAnswer: Answer) => {
        setAnswersState(prev => {
            const existing = prev.findIndex(a => a.questionId === newAnswer.questionId)
            if (existing !== -1) {
                return prev.map((a, index) => index === existing ? newAnswer : a)
            }
            return [...prev, newAnswer]
        })
    }
    return (
        <QuizContext.Provider value={{gender, setGender, answers, setAnswer }}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    const context = useContext(QuizContext)
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider")
    }
    return context 
}