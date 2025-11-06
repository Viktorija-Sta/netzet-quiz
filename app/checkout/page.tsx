'use client'

import Image from "next/image"
import { CountDownTimer } from "../components/CountdownTimer"
import { useQuiz } from "../context/QuizContext"
import { summaryData } from "../data/quizData"


export default function CheckoutPage() {
    const { gender } = useQuiz();

    return (
        <main className="flex flex-col items-center min-h-screen bg-page-bg">
            
           
            <div className="w-full max-w-[375px]">
                
                <div className="w-full bg-timer-yellow-bg py-3 flex justify-center px-5">
                    <div className="flex items-center w-full justify-between">
                        <Image src="/logo.png" alt="Mellow Flow" width={62} height={36} priority />
                        <span className="font-semibold text-text-gray text-sm"> 
                            Reserved price for:
                            <CountDownTimer /> 
                        </span>
                    </div>
                </div>

                <div className="w-full px-5 py-8">
                    
                    <h1 className="text-[28px] font-bold text-text-gray text-center leading-tight">
                        Your personalized Alcohol-Free Plan is ready!
                    </h1>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                            <Image 
                                src="/icons/Frame.svg" 
                                alt="Drinking patterns" 
                                width={36} 
                                height={36} 
                                className="mr-3 flex-shrink-0" 
                            />
                            <div>
                                <span className="text-xs text-gray-500">Drinking patterns</span>
                                <span className="block font-semibold text-text-gray">Imbalanced</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                            <Image 
                                src="/icons/Target.svg" 
                                alt="Target" 
                                width={36} 
                                height={36} 
                                className="mr-3 flex-shrink-0" 
                            />
                            <div>
                                <span className="text-xs text-gray-500">Goal</span>
                                <span className="block font-semibold text-text-gray">Regain control</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden shadow-lg mt-6">
                        <Image
                            src={gender === 'Male' ? "/male_before_after.png" : "/female_before_after.png"}
                            alt={`${gender} before and after`}
                            width={335}
                            height={250}
                            className="w-full object-cover"
                            priority
                        />
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-text-gray text-center">
                            Your Personal Summary
                        </h2>

                        <div className="flex flex-col gap-3 mt-4 ">
                            {summaryData.map((item) => (
                                <div key={item.title} className={`bg-white rounded-xl shadow-md p-4 border ${item.colorClasses.border}`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Image 
                                                src={item.iconSrc} 
                                                alt={item.title} 
                                                width={36} 
                                                height={36} 
                                                className="mr-3 flex-shrink-0" 
                                            />
                                            <div>
                                                <span className={`text-[10px] font-bold ${item.colorClasses.bg} ${item.colorClasses.tagText} px-2 py-0.5 rounded`}>
                                                    {item.tag}
                                                </span>
                                                <span className="block text-base font-semibold text-text-gray mt-1">{item.title}</span>
                                            </div>
                                        </div>
                                        <span className={`text-lg font-bold ${item.colorClasses.text}`}>{item.progress}%</span>
                                    </div>
                                
                                    <div className="w-full bg-summary-gray rounded-full h-1.5 mt-3">
                                        <div 
                                            className={`${item.colorClasses.bg} h-1.5 rounded-full`}
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}