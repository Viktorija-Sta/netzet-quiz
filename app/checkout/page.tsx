'use client'

import Image from "next/image"
import { useQuiz } from "../context/QuizContext";
import { CountdownTimer } from "../components/CountdownTimer";
import { summaryData } from "../data/quizData";


export default function CheckoutPage() {
    const { gender } = useQuiz();

    return (
        <main className="flex flex-col items-center min-h-screen bg-page-bg">
            
            <div className="w-full max-w-[375px]">
                
                <div className="w-full bg-timer-yellow-bg py-3 flex justify-center px-5">
                    <div className="flex items-center w-full justify-between">
                        <Image 
                            src="/logo.png" 
                            alt="Mellow Flow" 
                            width={62} 
                            height={36} 
                            priority 
                        />
                        <span className="font-semibold text-text-gray text-sm"> 
                            Reserved price for:
                            <CountdownTimer /> 
                        </span>
                    </div>
                </div>

                <div className="w-full px-5 py-8">
                    
                    <h1 className="text-[24px] font-bold leading-tight mb-6  ">
                        Your personalized Alcohol-Free Plan is ready!
                    </h1>

                    <div className="flex flex-row items-center justify-between ">
                         <div className="p-1 flex items-center">
                            <Image 
                                src="/icons/Frame.svg" 
                                alt="Drinking patterns" 
                                width={32} 
                                height={32} 
                                className="mr-3 flex-shrink-0" 
                            />
                            <div>
                                <span className="text-xs text-gray">Drinking patterns</span>
                                <span className="block font-bold ">Imbalanced</span>
                            </div>
                        </div>
                        <div className="w-px m-3 h-12 bg-summary-purple-border"></div>
                        <div className="p-1 flex items-center">
                            <Image 
                                src="/icons/Target.svg" 
                                alt="Target" 
                                width={32} 
                                height={32} 
                                className="mr-3 flex-shrink-0" 
                            />
                            <div>
                                <span className="text-xs text-gray">Goal</span>
                                <span className="block font-bold ">Regain control and live alcohol-free</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-xl overflow-hidden mt-6">
                        <Image
                            src={gender === 'Male' ? "/male_before_after.png" : "/female_before_after.png"}
                            alt={`${gender} before and after`}
                            width={335}
                            height={240}
                            className="w-full object-cover"
                            priority
                        />
                    </div>
 
                    <div className="mt-8">
                        <h2 className="text-xl font-bold font-weight-700">
                            Your Personal Summary
                        </h2>

                        <div className="flex flex-col gap-3 mt-4 ">
                            {summaryData.map((item) => (
                                <div key={item.title} className={`rounded-xl p-3 border ${item.borderColor}`}>
                                    
                                    <div className="flex items-center w-full gap-2">
                                        
                                        <div className="flex-shrink-0">
                                            <Image 
                                                src={item.iconSrc} 
                                                alt={item.title} 
                                                width={36} 
                                                height={36} 
                                            />
                                        </div>
                                        
                                        <div className="flex-1 ml-2">
                                            <span className={`text-[10px] font-bold bg-${item.color} ${item.tagTextColor} px-2 py-0.5 rounded`}>
                                                {item.tag}
                                            </span>
                                            <span className="block text-base font-bold text-text-gray mt-1">{item.title}</span>
                                        </div>
                                        
                                        <div className="w-16 flex-shrink-0">
                                            <div className="w-full bg-summary-gray rounded-full h-1.5">
                                                <div 
                                                    className={`bg-${item.color} h-1.5 rounded-full`}
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="w-12 flex-shrink-0 text-right">
                                            <span className={`text-lg font-bold text-${item.color}`}>{item.progress}%</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}