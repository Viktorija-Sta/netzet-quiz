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
    <main className="flex flex-col items-center min-h-screen bg-[#F9F5F2] pt-12">
    
      <div className="w-full max-w-[375px] px-6">
        <Image
          src="/logo.png" 
          alt="Mellow Flow Logo"
          width={62}
          height={36}
          priority 
        />

        <h1 className="text-3xl font-bold text-[#1F1F1F] mt-8">
          What is your gender?
        </h1>
        <p className="text-base text-[#717171] mt-2">
          We will use this to personalize your plan
        </p>

        <div className="flex flex-row gap-4 mt-10">
          
          <button
            onClick={() => genderSelectHandler('Male')}
            className="group w-[155px] rounded-xl overflow-hidden border-2 border-[#E5E0FA] 
                      hover:border-[#6F42E5] focus:border-[#6F42E5] 
                      focus:ring-2 focus:ring-[#C4B5FD] transition-all"
          >
            <div className="bg-[#F0EFFB] w-full flex justify-center">
              <Image
                src="/male.png" 
                alt="Male"
                width={160} 
                height={140} 
                className="object-cover"
              />
            </div>
          
            <div className="bg-[#6F42E5] text-white text-lg font-bold py-4 text-center">
              Male
            </div>
          </button>
        
          <button
            onClick={() => genderSelectHandler('Female')}
            className="group w-[155px] rounded-xl overflow-hidden border-2 border-[#E5E0FA] 
                      hover:border-[#6F42E5] focus:border-[#6F42E5] 
                      focus:ring-2 focus:ring-[#C4B5FD] transition-all"
          >
            
            <div className="bg-[#F0EFFB] w-full flex justify-center">
              <Image
                src="/female.png" 
                alt="Female"
                width={160}
                height={140}
                className="object-cover"
              />
            </div>
            <div className="bg-[#6F42E5] text-white text-lg font-bold py-4 text-center">
              Female
            </div>
          </button>
        </div>
      </div>
    </main>
  )
}