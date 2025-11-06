'use client'

import { useEffect, useState } from "react"

export const CountDownTimer = () => {
    const [secondsLeft, setSecondsLeft] = useState(900)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev === 0) {
                    return 900
                }
                return prev -1
            })
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

    return (
        <div className="w-full bg-timer-yellow-bg p-3 flex items-center justify-center text-center">
            <span className="font-semibold text-text-grey text-sm">
                Special offer ends in: {formattedTime}
            </span>
        </div>
    )
}