'use client'

import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useQuiz } from "./context/QuizContext"

export default function LandingPage() {
  const { setGender } = useQuiz()
  const router = useRouter()

  const genderSelectHandler = (gender: 'Male' | 'Female') => {
    setGender(gender)
    router.push('/quiz')
  }
  
  return (
    <main className="flex flex-col items-center min-h-screen bg-page-bg">
    
      <div className="w-full max-w-[375px] px-5">
        <div className="mt-6 mb-8 flex justify-center">
            <Image
                src="/logo.png" 
                alt="Mellow Flow Logo"
                width={62}
                height={36}
                priority 
            />
        </div>

        <h1 className="text-[24px] text-center font-semibold text-text-gray leading-tight">
          What is your gender?
        </h1>
        <p className="text-[14px] text-center text-text-gray mt-3">
          We will use this to personalize your plan
        </p>

        <div className="flex flex-row gap-3 mt-32">
          {['Male', 'Female'].map((gender) => (
            <button
              key={gender}
              onClick={() => genderSelectHandler(gender as 'Male' | 'Female')}
              className="w-[155px] h-[234px] rounded-xl overflow-hidden border-2 border-primary-purple focus:border-primary-purple focus:ring-2 focus:ring-[#C4B5FD] hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-light-purple-bg w-full flex justify-center h-[170px]">
                <Image
                  src={`/${gender.toLowerCase()}.png`} 
                  alt={gender}
                  width={160}
                  height={140}
                  className="object-cover"
                />
              </div>
              <div className="bg-primary-purple text-white text-[18px] font-semibold py-3 text-center h-[60px] flex items-center justify-center">
                {gender}
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}