"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Gift } from "lucide-react"

const gifts = [
  {
    id: 1,
    title: "Princess Dinner Experience",
    color: "from-pink-400 to-pink-600",
    message:
      "A beautiful dinner with a princess treatment awaits you! Get ready to be pampered and celebrated like royalty on your special day. �🍽️✨",
    emoji: "👸",
  },
  {
    id: 2,
    title: "Custom Chocolate Surprise",
    color: "from-orange-400 to-orange-600",
    message:
      "Indulge in a beautiful, custom chocolate made just for you. Sweet, unique, and crafted with love—just like you! 🍫�",
    emoji: "🍫",
  },
  {
    id: 3,
    title: "Secret Special Day",
    color: "from-yellow-400 to-yellow-600",
    message:
      "A special surprise day planned just for you! The details are a secret, but it will be unforgettable and filled with joy. 🤫�",
    emoji: "�",
  },
]

export default function ThreeGiftBoxes() {
  const [openBoxes, setOpenBoxes] = useState<number[]>([])

  const handleBoxClick = (giftId: number) => {
    if (!openBoxes.includes(giftId)) {
      setOpenBoxes([...openBoxes, giftId])

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ec4899", "#f97316", "#fbbf24"],
      })
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-pink-50">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-pink-500 mb-16 font-dancing-script"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Special Gifts Just for You! 🎁
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {gifts.map((gift) => {
          const isOpen = openBoxes.includes(gift.id)

          return (
            <motion.div
              key={gift.id}
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gift.id * 0.2, duration: 0.8 }}
            >
              <motion.div
                className={`relative w-full h-80 bg-gradient-to-br ${gift.color} rounded-2xl shadow-2xl cursor-pointer overflow-hidden`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBoxClick(gift.id)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gift Box Lid */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl border-4 border-white/30"
                  animate={isOpen ? { rotateX: -120, y: -50 } : { rotateX: 0, y: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gift className="w-16 h-16 text-white/80" />
                  </div>

                  {/* Ribbon */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-white/40 rounded-full" />
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-white/40 rounded-full" />
                </motion.div>

                {/* Gift Box Base */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{gift.emoji}</div>
                    <h3 className="text-xl font-bold font-dancing-script">{gift.title}</h3>
                    {!isOpen && <p className="text-sm mt-2 opacity-80">Click to open!</p>}
                  </div>
                </div>

                {/* Gift Message */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-4">{gift.emoji}</div>
                        <h3 className="text-xl font-bold text-pink-600 mb-4 font-dancing-script">{gift.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{gift.message}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    {/* Signature card */}
    <div className="flex justify-center mt-12">
      <div className="bg-pink-100 border border-pink-300 rounded-xl px-6 py-3 shadow text-center text-pink-700 font-medium text-base">
        Made with love by K G
      </div>
    </div>
  </section>
  )
}
