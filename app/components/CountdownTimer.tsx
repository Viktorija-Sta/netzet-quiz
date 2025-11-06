'use client'

import { useEffect, useState } from "react"

export const CountDownTimer = () => {
    const [secondsLeft, setSecondsLeft] = useState(900)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((prev) => (prev === 0 ? 900 : prev -1))
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

    return (
        
            <span className="text-lg font-bold ml-1">
                {formattedTime}
            </span>
       
    )
}