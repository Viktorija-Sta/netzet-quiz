'use client'

import { useState } from "react";
import { useQuiz } from "../context/QuizContext";
import { useRouter } from "next/navigation";
import { Question, quizQuestions, TOTAL_QUESTIONS } from "../data/quizData";

export default function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const { setAnswer, answers } = useQuiz()
    const router = useRouter()

    const currentQuestion: Question = quizQuestions[currentIndex]

    const progressPercent = ((currentIndex + 1) / TOTAL_QUESTIONS * 100).toFixed(0)

    
}
