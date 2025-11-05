'use client'

import { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useRouter } from "next/navigation";
import { Question, quizQuestions, TOTAL_QUESTIONS } from "../data/quizData";
import Image from 'next/image'

export default function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const { setAnswer, answers } = useQuiz()
    const router = useRouter()

    const currentQuestion: Question = quizQuestions[currentIndex]

    const progressPercent = ((currentIndex + 1) / TOTAL_QUESTIONS * 100).toFixed(0)

    const answerSelectHandler = (questionId: number, optionId: number) => {
        setAnswer({ questionId: questionId, selectedOptionId: optionId })
        if ( currentIndex + 1 < TOTAL_QUESTIONS) {
            setCurrentIndex(currentIndex + 1)
        } else {
            router.push('/checkout')
        }
    }

    const getSelectedOptionId = (questionId: number) => {
        return answers.find(a => a.questionId === questionId)?.selectedOptionId
    }

    const selectedOptionId = getSelectedOptionId(currentQuestion.id)

    return (
        <main className="flex flex-col min-h-screen bg-page-bg">
            <div className="w-full max-w-[375px] mx-auto px-5">
                <header className="py-4">
                    <div className="flex items-center justify-between mb-4">
                        <button onClick={() => router.back()} className="p-2 -ml-2">
                            <Image
                                src="/backButton.png" 
                                alt="Back button"
                                width={48}
                                height={13.5}
                                priority 
                            />
                        </button>
                        <div className="font-semibold text-text-gray">
                        {currentIndex + 1}
                        <span className="text-gray-400"> / {TOTAL_QUESTIONS}</span>
                        </div>
                    </div>
                </header>

                <div className="mt-8">
                    <h1 className="text-[28px] font-bold text-[#303030] text-center leading-tight">
                        {currentQuestion.questionText}
                    </h1>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                    {currentQuestion.options.map((option) => {
                        const isSelected = selectedOptionId === option.id
                        return (
                            <button 
                                key={option.id}
                                onClick={() => answerSelectHandler(currentQuestion.id, option.id)}
                                className={`
                                    flex items-center w-full p-4 rounded-xl border-2 
                                    transition-all duration 200 text-left
                                    ${isSelected ? 'bg-primary-purple border-primary-purple text-white' :
                                    'bg-white border-transparent hover:border-gray-300'
                                    }
                                `}
                                >
                                <span className="font-semibold text-lg">{option.text}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </main>
    )

}
