"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import React from "react";

const compliments = [
  {
    title: "Your Golden Hair",
    description:
      "Like sunshine captured in silk strands, your hair flows with the grace of a goddess and the warmth of summer mornings.",
    media: "/images/vid4.mp4",
    type: "video"
  },
  {
    title: "Your Sparkling Eyes",
    description:
      "Two stars that fell from heaven and decided to make your face their home, twinkling with mischief and wonder.",
    media: "/images/img6.jpeg",
    type: "image"
  },
  {
    title: "Your Radiant Smile",
    description:
      "A smile so bright it could power a small city and make flowers bloom in winter. Pure magic in motion!",
    media: "/images/vid7.mp4",
    type: "video"
  },
  {
    title: "Your Rosy Cheeks",
    description: "Like two perfect peaches kissed by morning dew, they glow with the sweetness of your beautiful soul.",
    media: "/images/vid3.mp4",
    type: "video"
  },
  {
    title: "Your Button Nose",
    description:
      "Perfectly sculpted by angels who clearly had too much time and wanted to show off their artistic skills.",
    media: "/images/img3.jpeg",
    type: "image"
  },
  {
    title: "Your Sweet Lips",
    description: "Soft as rose petals and twice as lovely, they speak words of kindness and laughter that heal hearts.",
    media: "/images/vid14.mp4",
    type: "video"
  },
  {
    title: "Your Graceful Neck",
    description: "Like a swan's elegant curve, it holds your beautiful head high with the confidence of a queen.",
    media: "/images/vid12.mp4",
    type: "video"
  },
  {
    title: "Your Gentle Shoulders",
    description:
      "Strong enough to carry the world's worries, yet soft enough to be the perfect place for a friend's tears.",
    media: "/images/img2.jpeg",
    type: "image"
  },
  {
    title: "Your Caring Arms",
    description: "Two branches of love that wrap around hearts and make everything better with their warm embrace.",
    media: "/images/img9.jpeg",
    type: "image"
  },
  {
    title: "Your Magical Hands",
    description:
      "Five-star artists that create beauty wherever they touch, turning ordinary moments into extraordinary memories.",
    media: "/images/vid28.mp4",
    type: "video"
  },
  {
    title: "Your Kind Heart",
    description:
      "A treasure chest overflowing with love, compassion, and enough kindness to make the world a better place.",
    media: "/images/vid3.mp4",
    type: "video"
  },
  {
    title: "Your Graceful Waist",
    description: "Like a willow tree swaying in a gentle breeze, moving with natural elegance and timeless beauty.",
    media: "/images/vid31.mp4",
    type: "video"
  },
  {
    title: "Your Beautiful Legs",
    description:
      "Two pillars of grace that carry you through life's adventures with style, strength, and unstoppable determination.",
    media: "/images/img5.jpeg",
    type: "image"
  },
  {
    title: "Your Dancing Feet",
    description: "They don't just walk, they dance through life, leaving trails of joy and rhythm wherever they go!",
    media: "/images/vid32.mp4",
    type: "video"
  },
  {
    title: "Your Brilliant Mind",
    description: "A universe of thoughts and dreams, creating ideas that sparkle brighter than any constellation.",
    media: "/images/img12.jpeg",
    type: "image"
  },
  {
    title: "Your Infectious Laugh",
    description: "A melody that turns gray skies blue and makes even the grumpiest hearts smile with pure joy.",
    media: "/images/vid16.mp4",
    type: "video"
  },





 
]

export default function HorizontalGallery() {
  // Scroll logic
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 relative">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-pink-400 mb-12 font-dancing-script"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Every Part of You is Perfect 💖
      </motion.h2>

      <div ref={scrollRef} className="overflow-x-auto horizontal-scroll pb-4 scroll-smooth">
        <div className="flex gap-6 w-max">
          {compliments.map((compliment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Card className="w-80 h-96 bg-background border-pink-400 hover:border-pink-500 transition-all duration-300 animate-pulse-glow text-foreground">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-900 to-pink-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {compliment.type === "video" ? (
                      <video
                        src={compliment.media}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={(e) => {
                          // Fallback if video fails to load
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="flex items-center justify-center w-full h-full text-white text-sm">${compliment.title}</div>`;
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={compliment.media}
                        alt={compliment.title}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = `https://via.placeholder.com/300x200/ff69b4/ffffff?text=${encodeURIComponent(compliment.title)}`;
                        }}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 mb-3 font-dancing-script">{compliment.title}</h3>
                  <p className="text-pink-200 text-sm leading-relaxed flex-grow">{compliment.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation arrows in bottom right corner */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <button
          className="bg-pink-700/80 hover:bg-pink-500 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
          aria-label="Scroll left"
          onClick={() => scrollBy(-320)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="bg-pink-700/80 hover:bg-pink-500 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
          aria-label="Scroll right"
          onClick={() => scrollBy(320)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}