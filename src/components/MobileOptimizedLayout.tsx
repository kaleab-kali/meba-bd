"use client"
import { motion } from "framer-motion"
import type React from "react"

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function MobileOptimizedLayout({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {children}

      {/* Mobile Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg touch-button no-select"
          style={{ minHeight: "48px", minWidth: "48px" }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Mobile-specific loading indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 z-50 opacity-0 pointer-events-none" />
    </div>
  )
}
