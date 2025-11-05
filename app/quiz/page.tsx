'use client'; 

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuiz } from '../context/QuizContext';
import { Question, quizQuestions, TOTAL_QUESTIONS } from '../data/quizData';
import { QuizIcon } from '../components/QuizIcon';
import BackButton from '../../assets/icons/BackButton.svg'


export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const { setAnswer, answers } = useQuiz();
  const router = useRouter();

  const currentQuestion: Question = quizQuestions[currentIndex];
  const progressPercent = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100; 

  const handleAnswerSelect = (questionId: number, optionId: number) => {
    setAnswer({ questionId: questionId, selectedOptionId: optionId });

    setTimeout(() => {
      if (currentIndex + 1 < TOTAL_QUESTIONS) { 
        setCurrentIndex(currentIndex + 1);
      } else {
        router.push('/checkout');
      }
    }, 200);
  };
  
  const getSelectedOptionId = (questionId: number) => {
    return answers.find(a => a.questionId === questionId)?.selectedOptionId;
  }
  const selectedOptionId = getSelectedOptionId(currentQuestion.id);

  return (
    <main className="flex flex-col min-h-screen bg-page-bg">
      <div className="w-full max-w-[375px] mx-auto px-5">
        
        <header className="py-4">
          <div className="flex items-center justify-between mb-4 h-9">
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <BackButton 
                src='/BackButton.svg'
                alt='Back Button'
                width={24} 
                height={24} 
                />
            </button>
            
            <div className="flex-1 flex justify-center">
              <Image
                src="/logo.png"
                alt="Mellow Flow Logo"
                width={62}
                height={36}
              />
            </div>
            
            <div className="font-semibold text-text-gray">
              {currentIndex + 1}
              <span className="text-gray-400"> / {TOTAL_QUESTIONS}</span> 
            </div>
          </div>
          
          <div className="w-full bg-[#E5E0FA] rounded-full h-1.5">
            <div 
              className="bg-primary-purple h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        <div className="mt-8">
          <h1 className="text-[28px] font-bold text-[#1F1F1F] text-center leading-tight">
            {currentQuestion.questionText}
          </h1>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            let buttonClasses = 'flex items-center w-full p-4 rounded-xl border-2 transition-all duration-200 text-left';

            if (currentQuestion.variantType === 'colored' && option.colorClasses) {
              const colors = option.colorClasses;
              if (isSelected) {
                buttonClasses += ` ${colors.selectedBg} ${colors.selectedBorder} text-white`;
              } else {
                buttonClasses += ` ${colors.bg} ${colors.border} ${colors.text}`;
              }
            } else {
              if (isSelected) {
                buttonClasses += ' bg-primary-purple border-primary-purple text-white';
              } else {
                buttonClasses += ' bg-white border-transparent hover:border-gray-300 text-text-gray';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                className={buttonClasses}
              >
                <QuizIcon iconName={option.icon} className="flex-shrink-0" />
                <span className="font-semibold text-lg">{option.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}