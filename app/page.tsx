"use client"

import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import LoadingCountdown from "@/components/LoadingCountdown"
import HeroBanner from "@/components/HeroBanner"
import HorizontalGallery from "@/components/HorizontalGallery"
import AnimatedWishes from "@/components/AnimatedWishes"
import ThreeGiftBoxes from "@/components/ThreeGiftBoxes"

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(true)
  const [confettiActive, setConfettiActive] = useState(false)

  useEffect(() => {
    let confettiInterval: NodeJS.Timeout | null = null
    if (confettiActive) {
      confettiInterval = setInterval(() => {
        confetti({
          particleCount: 18,
          spread: 120,
          origin: { x: Math.random(), y: Math.random() * 0.2 + 0.1 }, // y between 0.1 and 0.3
          colors: ["#ec4899", "#f97316", "#fbbf24"],
          gravity: 0.18,
          ticks: 160,
        })
      }, 700)
    }
    return () => {
      if (confettiInterval) clearInterval(confettiInterval)
    }
  }, [confettiActive])

  const handleCountdownComplete = () => {
    setShowCountdown(false)
    setConfettiActive(true)
  }

  return (
    <main className="min-h-screen">
      {showCountdown ? (
        <LoadingCountdown onComplete={handleCountdownComplete} />
      ) : (
        <>
          <HeroBanner />
          <HorizontalGallery />
          <AnimatedWishes />
          <ThreeGiftBoxes />
          {/* Subtle confetti will continue in the background */}
        </>
      )}
    </main>
  )
}
