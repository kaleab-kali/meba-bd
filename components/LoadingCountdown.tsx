"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"



interface LoadingCountdownProps {
  onComplete: () => void
}
// @ts-ignore
export default function LoadingCountdown({ onComplete }: LoadingCountdownProps) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ec4899", "#f97316", "#fbbf24"],
          })
          setTimeout(onComplete, 1000)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/glowing-heart-golden-light.png"
          alt="Glowing Heart Golden Light"
          className="w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <header className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <motion.div
            className="text-8xl md:text-9xl font-bold text-yellow-300 mb-4 drop-shadow-lg"
            key={count}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {count > 0 ? count : "🎂"}
          </motion.div>
        </div>
      </header>
    </div>
  )
}
