"use client"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface GalleryItem {
  id: string
  title: string
  compliment: string
  funnyNote: string
  imageUrl: string
  bodyPart: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "hair",
    title: "Your Gorgeous Hair",
    compliment:
      "Like golden silk threads kissed by the sun, your hair flows like a Leo's mane - majestic and absolutely mesmerizing.",
    funnyNote: "I'm convinced your hair has its own Instagram account with more followers than most celebrities!",
    imageUrl: "/golden-haired-woman.png",
    bodyPart: "Hair",
  },
  {
    id: "eyes",
    title: "Those Captivating Eyes",
    compliment:
      "Your eyes sparkle like stars in the Leo constellation, holding galaxies of dreams and mischief that make my heart skip beats.",
    funnyNote: "Warning: Looking into your eyes may cause temporary loss of speech and permanent butterflies!",
    imageUrl: "/sparkling-golden-eyes.png",
    bodyPart: "Eyes",
  },
  {
    id: "smile",
    title: "That Radiant Smile",
    compliment:
      "Your smile could light up the darkest night and make the sun jealous of its brilliance. It's pure magic wrapped in the sweetest curve.",
    funnyNote: "Scientists are still trying to figure out how your smile generates more energy than solar panels!",
    imageUrl: "/radiant-smile-woman.png",
    bodyPart: "Smile",
  },
  {
    id: "neck",
    title: "Your Elegant Neck",
    compliment:
      "Graceful as a swan, your neck carries your beautiful head like a crown jewel, making every turn a work of art.",
    funnyNote: "I'm pretty sure giraffes are jealous of how elegantly you carry yourself!",
    imageUrl: "/elegant-woman-neck-shoulders.png",
    bodyPart: "Neck",
  },
  {
    id: "hands",
    title: "Your Gentle Hands",
    compliment:
      "Your hands are like poetry in motion - delicate, expressive, and capable of creating magic with every touch and gesture.",
    funnyNote: "Your hands are so perfect, I bet they could make even doing dishes look like a graceful dance!",
    imageUrl: "/delicate-elegant-hands.png",
    bodyPart: "Hands",
  },
  {
    id: "heart",
    title: "Your Beautiful Heart",
    compliment:
      "The kindest, most generous heart that beats with the fierce loyalty of a true Leo - warm, loving, and absolutely irreplaceable.",
    funnyNote: "Your heart is so big, I'm convinced it has its own zip code for all the love it contains!",
    imageUrl: "/glowing-golden-heart.png",
    bodyPart: "Heart",
  },
  {
    id: "waist",
    title: "Your Perfect Silhouette",
    compliment:
      "Your waist curves like a beautiful hourglass, marking time in the most elegant way - every moment with you is precious.",
    funnyNote: "I'm convinced hourglasses everywhere are trying to copy your perfect proportions!",
    imageUrl: "/elegant-woman-silhouette.png",
    bodyPart: "Waist",
  },
  {
    id: "legs",
    title: "Those Amazing Legs",
    compliment:
      "Your legs carry you through life with such grace and strength, like a dancer who makes every step look effortless and beautiful.",
    funnyNote: "Your legs are so stunning, I bet they could make walking to the mailbox look like a runway show!",
    imageUrl: "/elegant-woman-legs.png",
    bodyPart: "Legs",
  },
  {
    id: "feet",
    title: "Your Adorable Feet",
    compliment:
      "Even your feet are perfect - carrying you on all your adventures with such delicate beauty, like tiny works of art.",
    funnyNote: "Your feet are so cute, I'm pretty sure they could win a beauty contest against actual flowers!",
    imageUrl: "/delicate-painted-feet.png",
    bodyPart: "Feet",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-16 px-4 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-4">
            A Gallery of You
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            From head to toe, every part of you is absolutely perfect. Here's my love letter to your beautiful self.
          </p>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex justify-center mt-4"
          >
            <Heart className="text-pink-500 w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Body Part Label */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {item.bodyPart}
                  </motion.div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-lg sm:text-xl font-serif font-semibold text-pink-700 mb-3 flex items-center gap-2"
                  >
                    {item.title}
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  </motion.h3>

                  {/* Romantic Compliment */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base"
                  >
                    {item.compliment}
                  </motion.p>

                  {/* Funny Note */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="bg-pink-50 border-l-4 border-pink-400 p-3 rounded-r-lg"
                  >
                    <p className="text-pink-800 text-xs sm:text-sm italic font-medium">{item.funnyNote}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-pink-200">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mb-4"
            >
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-pink-600 mx-auto" />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-pink-700 mb-3">You Are Absolutely Perfect</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              From the crown of your beautiful head to the tips of your adorable toes, every single part of you is a
              masterpiece. You're not just beautiful on the outside - your inner light shines brighter than any star in
              the Leo constellation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
