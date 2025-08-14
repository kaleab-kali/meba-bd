"use client"
import { motion, useInView } from "framer-motion"
import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Heart, Star, Sparkles, Crown } from "lucide-react"

interface Compliment {
  id: string
  text: string
  animationType: "typewriter" | "letterFade" | "bounce" | "slide" | "glow" | "wave" | "scale"
  icon: React.ReactNode
  color: string
}

const compliments: Compliment[] = [
  {
    id: "1",
    text: "You shine brighter than all the stars in the Leo constellation",
    animationType: "typewriter",
    icon: <Star className="w-5 h-5" />,
    color: "text-yellow-500",
  },
  {
    id: "2",
    text: "Your smile could light up the entire universe",
    animationType: "letterFade",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-500",
  },
  {
    id: "3",
    text: "You are the queen of hearts and the empress of dreams",
    animationType: "bounce",
    icon: <Crown className="w-5 h-5" />,
    color: "text-purple-500",
  },
  {
    id: "4",
    text: "Every day with you feels like a celebration",
    animationType: "slide",
    icon: <Heart className="w-5 h-5" />,
    color: "text-rose-500",
  },
  {
    id: "5",
    text: "Your laughter is the most beautiful melody in the world",
    animationType: "glow",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-400",
  },
  {
    id: "6",
    text: "You turn ordinary moments into magical memories",
    animationType: "wave",
    icon: <Star className="w-5 h-5" />,
    color: "text-yellow-400",
  },
  {
    id: "7",
    text: "Your kindness makes the world a more beautiful place",
    animationType: "scale",
    icon: <Heart className="w-5 h-5" />,
    color: "text-red-400",
  },
  {
    id: "8",
    text: "You are proof that angels exist on earth",
    animationType: "letterFade",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-600",
  },
  {
    id: "9",
    text: "Your strength and grace inspire everyone around you",
    animationType: "typewriter",
    icon: <Crown className="w-5 h-5" />,
    color: "text-purple-600",
  },
  {
    id: "10",
    text: "You make being fabulous look absolutely effortless",
    animationType: "bounce",
    icon: <Star className="w-5 h-5" />,
    color: "text-yellow-600",
  },
  {
    id: "11",
    text: "Your heart is as golden as your Leo spirit",
    animationType: "glow",
    icon: <Heart className="w-5 h-5" />,
    color: "text-yellow-500",
  },
  {
    id: "12",
    text: "You deserve all the happiness in the universe",
    animationType: "wave",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-500",
  },
  {
    id: "13",
    text: "Your beauty radiates from the inside out",
    animationType: "slide",
    icon: <Star className="w-5 h-5" />,
    color: "text-rose-400",
  },
  {
    id: "14",
    text: "You are the definition of grace and elegance",
    animationType: "scale",
    icon: <Crown className="w-5 h-5" />,
    color: "text-purple-400",
  },
  {
    id: "15",
    text: "Your presence makes every room brighter",
    animationType: "letterFade",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-yellow-400",
  },
  {
    id: "16",
    text: "You are loved more than words can express",
    animationType: "typewriter",
    icon: <Heart className="w-5 h-5" />,
    color: "text-red-500",
  },
  {
    id: "17",
    text: "Your dreams are as limitless as your potential",
    animationType: "bounce",
    icon: <Star className="w-5 h-5" />,
    color: "text-pink-400",
  },
  {
    id: "18",
    text: "You make the impossible seem possible",
    animationType: "glow",
    icon: <Crown className="w-5 h-5" />,
    color: "text-purple-500",
  },
  {
    id: "19",
    text: "Your birthday marks another year of pure awesomeness",
    animationType: "wave",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-pink-600",
  },
  {
    id: "20",
    text: "Here's to another year of being absolutely incredible",
    animationType: "slide",
    icon: <Heart className="w-5 h-5" />,
    color: "text-rose-600",
  },
]

// Typewriter Animation Component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 50 + delay)

    return () => clearTimeout(timer)
  }, [currentIndex, text, isInView, delay])

  return (
    <span ref={ref} className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

// Letter Fade Animation Component
const LetterFadeText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + index * 0.03 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// Bounce Animation Component
const BounceText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
            type: "spring",
            bounce: 0.4,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// Slide Animation Component
const SlideText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="inline-block"
    >
      {text}
    </motion.span>
  )
}

// Glow Animation Component
const GlowText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="inline-block"
    >
      <motion.span
        animate={{
          textShadow: ["0 0 5px currentColor", "0 0 20px currentColor", "0 0 5px currentColor"],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

// Wave Animation Component
const WaveText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={
            isInView
              ? {
                  y: [0, -10, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            delay: delay + index * 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

// Scale Animation Component
const ScaleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
      className="inline-block"
    >
      {text}
    </motion.span>
  )
}

// Animation Component Selector
const AnimatedText = ({ compliment, delay = 0 }: { compliment: Compliment; delay?: number }) => {
  const animations = {
    typewriter: <TypewriterText text={compliment.text} delay={delay} />,
    letterFade: <LetterFadeText text={compliment.text} delay={delay} />,
    bounce: <BounceText text={compliment.text} delay={delay} />,
    slide: <SlideText text={compliment.text} delay={delay} />,
    glow: <GlowText text={compliment.text} delay={delay} />,
    wave: <WaveText text={compliment.text} delay={delay} />,
    scale: <ScaleText text={compliment.text} delay={delay} />,
  }

  return animations[compliment.animationType]
}

export default function AnimatedCompliments() {
  return (
    <section id="compliments" className="py-16 px-4 bg-gradient-to-b from-rose-50 to-pink-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-4">
            Birthday Wishes & Compliments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every word here is crafted with love, just for you. Watch them come to life with magic.
          </p>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex justify-center mt-6"
          >
            <Sparkles className="text-pink-500 w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Animated Compliments */}
        <div className="space-y-8 md:space-y-12">
          {compliments.map((compliment, index) => (
            <motion.div
              key={compliment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`${compliment.color} flex-shrink-0 mt-1`}
                  >
                    {compliment.icon}
                  </motion.div>

                  {/* Animated Text */}
                  <div className="flex-1">
                    <p className={`text-lg md:text-xl font-medium leading-relaxed ${compliment.color}`}>
                      <AnimatedText compliment={compliment} delay={index * 0.2} />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-8 md:p-12 border-2 border-pink-300">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="mb-6"
            >
              <Crown className="w-16 h-16 text-yellow-500 mx-auto" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-pink-700 mb-4">
              You Are Simply Extraordinary
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
            >
              May this new year of your life be filled with endless joy, boundless love, and all the magic your Leo
              heart desires. You deserve nothing but the absolute best!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
