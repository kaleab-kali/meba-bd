"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export default function HeroBanner() {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#ec4899", "#f97316", "#fbbf24"],
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const letters = "HAPPY BIRTHDAY MEBA".split("")

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 opacity-40" />

      <div className="relative z-10 text-center w-full">
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-pink-400 font-dancing-script break-words"
              style={{ wordBreak: 'break-word', flexBasis: 'auto' }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.07,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.2,
                color: "#f472b6",
                transition: { duration: 0.2 },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-pink-300 font-medium mb-8 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Today is Your Special Day! 🌟
        </motion.p>

        <motion.div
          className="text-6xl mb-8"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          🎂✨🎉
        </motion.div>

        {/* Downward scroll icon */}
        <div className="flex justify-center mt-4 animate-bounce">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L6 10H18L12 16Z" fill="#ec4899" />
          </svg>
        </div>
      </div>
    </section>
  )
}
