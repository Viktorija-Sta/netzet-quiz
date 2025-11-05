'use client'

import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useQuiz } from "./context/QuizContext"

const PRIMARY_COLOR = '#6F42E5'
const LIGHT_PURPLE_BG = '#F7F5FE'
const TEXT_GRAY = '#717171'
const PAGE_BACKGROUND = '#F9F5F2'

export default function LandingPage() {
  const { setGender } = useQuiz()
  const router = useRouter()

  const genderSelectHandler = (gender: 'Male' | 'Female') => {
    setGender(gender)
    router.push('/quiz')
  }
  return (
    <main className={`flex flex-col items-center min-h-screen bg-[${PAGE_BACKGROUND}]`}>
    
      <div className="w-full max-w-[375px] px-5">
        <div className="mt-12 mb-8 flex justify-center">
            <Image
                src="/logo.png" 
                alt="Mellow Flow Logo"
                width={62}
                height={36}
                priority 
            />
        </div>

        <h1 className="text-[34px] font-bold text-[#1F1F1F] leading-tight">
          What is your gender?
        </h1>
        <p className={`text-[17px] text-[${TEXT_GRAY}] mt-3`}>
          We will use this to personalize your plan
        </p>

        <div className="flex flex-row gap-4 mt-10">
          {['Male', 'Female'].map((gender) => (
            <button
              key={gender}
              onClick={() => genderSelectHandler(gender as 'Male' | 'Female')}
              className={`w-[155px] h-[234px] rounded-xl overflow-hidden border-2 border-transparent 
                         focus:border-[${PRIMARY_COLOR}] focus:ring-2 focus:ring-[#C4B5FD] 
                         hover:shadow-lg transition-all duration-300`}
            >
              <div className={`bg-[${LIGHT_PURPLE_BG}] w-full flex justify-center h-[170px]`}>
                <Image
                  src={`/${gender.toLowerCase()}.png`} 
                  alt={gender}
                  width={155}
                  height={170}
                  className="object-cover"
                />
              </div>
              <div className={`bg-[${PRIMARY_COLOR}] text-white text-[17px] font-bold py-3 text-center h-[64px] flex items-center justify-center`}>
                {gender}
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}