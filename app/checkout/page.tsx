'use client'

import Image from "next/image"
import { CountDownTimer } from "../components/CountdownTimer"
import { useQuiz } from "../context/QuizContext"
import { QuizIcon } from "../components/QuizIcon"

export default function CheckoutPage() {
    const { gender } = useQuiz()

    const features = [
        'Personalized plan',
        'Daily tips and guidance',
        'Community support',
        'Progress tracking',
        'Mindfulness exercises',

    ]

    return (
        <main className="flex flex-col items-center min-h-screen bg-page-bg">
            <CountDownTimer />
            <div className="w-full max-w-[375px] px-5 py-8">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    {gender === 'male' ? (
                        <Image
                        src="/male_before_after.png"
                        alt="Male before and after"
                        width={225}
                        height={180}
                        className="w-full"
                        />
                    ) : (
                        <Image
                        src="/female_before_after.png"
                        alt="Female before and after"
                        width={225}
                        height={180}
                        className="w-full"
                        />
                    )}
                </div>
                <div className="mt-8">
                    <h1 className="text-3xl font-bold text-text-grey text-center">
                        Based pn tour answers
                    </h1>
                    <p className="tet-lg text-text-gray text-center mt-2">
                        Here&apos;s what you get:
                    </p>
                    <div className="flex flex-col gap-4 mt-6">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center">
                                <QuizIcon iconName="IconCheck" className="text-primary-purple mr-3" />
                                <span className="text-lg text-text-gray">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    className="w-full bg-primary-purple text-white text-lg font-bold py-4 rounded-xl mt-8 shadow-lg
                     hover:bg-opacity-90 transition-all"></button>
            </div>
        </main>
    )
}
