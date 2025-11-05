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
    <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mt-12 mb-8 text-center text-gray-800">
        What is your gender?
      </h1>
       <p className="mt-8 text-sm text-gray-500 text-center">
        We will use this to personalize your plan
      </p>
      <div className="mb-10">
        <div className="w-80 h-60 bg-gray-200 flex items-center justify-center text-gray-500">
            
        </div>
      </div>
        <button
          onClick={() => genderSelectHandler('Female')}
          className="py-4 rounded-xl text-lg font-semibold bg-pink-500 text-white hover:bg-pink-600 transition duration-150 shadow-md flex items-center justify-center space-x-3"
        >
        <Image src="/female.png" alt="Female" width={50} height={50} />
          <span>Female</span>
        </button>
        

        <button
          onClick={() => genderSelectHandler('Male')}
          className="py-4 rounded-xl text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-150 shadow-md"
        >
          <Image src="/male.png" alt="Male" width={50} height={50} />
          <span>Male</span>
        </button>
      </div>
  )
}