"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Box, Sphere, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Heart, Gift, Sparkles, Crown } from "lucide-react"
import type * as THREE from "three"

// 3D Gift Box Component
function Gift3D({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const boxRef = useRef<THREE.Group>(null)
  const lidRef = useRef<THREE.Mesh>(null)

  return (
    <group ref={boxRef} onClick={onClick}>
      {/* Gift Box Base */}
      <Box args={[2, 1.5, 2]} position={[0, -0.75, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#ff69b4" roughness={0.3} metalness={0.1} />
      </Box>

      {/* Gift Box Lid */}
      <Box
        ref={lidRef}
        args={[2.1, 0.3, 2.1]}
        position={[0, isOpen ? 1.5 : 0, isOpen ? -1 : 0]}
        rotation={[isOpen ? -Math.PI / 4 : 0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#ff1493" roughness={0.3} metalness={0.1} />
      </Box>

      {/* Ribbon Horizontal */}
      <Box args={[2.2, 0.2, 0.3]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#ffd700" roughness={0.2} metalness={0.8} />
      </Box>

      {/* Ribbon Vertical */}
      <Box args={[0.3, 1.8, 2.2]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#ffd700" roughness={0.2} metalness={0.8} />
      </Box>

      {/* Bow */}
      <group position={[0, 0.9, 0]}>
        <Sphere args={[0.3, 8, 6]} position={[-0.3, 0, 0]} castShadow>
          <meshStandardMaterial color="#ffd700" roughness={0.2} metalness={0.8} />
        </Sphere>
        <Sphere args={[0.3, 8, 6]} position={[0.3, 0, 0]} castShadow>
          <meshStandardMaterial color="#ffd700" roughness={0.2} metalness={0.8} />
        </Sphere>
        <Sphere args={[0.15, 8, 6]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#ffb6c1" roughness={0.2} metalness={0.8} />
        </Sphere>
      </group>

      {/* Gift Content - appears when opened */}
      {isOpen && (
        <group position={[0, 0.5, 0]}>
          {/* Floating Hearts */}
          <Sphere args={[0.1]} position={[-0.5, 0.5, 0.5]} castShadow>
            <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.3} />
          </Sphere>
          <Sphere args={[0.08]} position={[0.3, 0.8, -0.3]} castShadow>
            <meshStandardMaterial color="#ff1493" emissive="#ff1493" emissiveIntensity={0.3} />
          </Sphere>
          <Sphere args={[0.12]} position={[0.6, 0.3, 0.2]} castShadow>
            <meshStandardMaterial color="#ffb6c1" emissive="#ffb6c1" emissiveIntensity={0.3} />
          </Sphere>

          {/* 3D Text */}
          <Text
            position={[0, 1.2, 0]}
            fontSize={0.3}
            color="#ff1493"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter_Bold.json"
          >
            My Love
          </Text>
          <Text
            position={[0, 0.8, 0]}
            fontSize={0.2}
            color="#ffd700"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter_Regular.json"
          >
            For You
          </Text>
        </group>
      )}
    </group>
  )
}

// Gift Messages
const giftMessages = [
  {
    title: "A Year of Adventures",
    message:
      "May this new year bring you countless adventures, beautiful memories, and all the joy your heart can hold!",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Endless Love & Happiness",
    message:
      "You deserve all the love in the world and happiness that never ends. You are truly special and loved beyond measure!",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Your Crown of Dreams",
    message:
      "Like the true Leo queen you are, may all your dreams come true and your reign of awesomeness continue forever!",
    icon: <Crown className="w-6 h-6" />,
  },
]

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentGift, setCurrentGift] = useState(0)

  const handleBoxClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const nextGift = () => {
    setCurrentGift((prev) => (prev + 1) % giftMessages.length)
  }

  const resetBox = () => {
    setIsOpen(false)
    setCurrentGift(0)
  }

  return (
    <section
      id="gift"
      className="py-16 px-4 bg-gradient-to-b from-pink-100 to-rose-100 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-4">
            Your Special Gift
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {!isOpen ? "Click the gift box to reveal your special surprise!" : "Your gift has been revealed!"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 3D Gift Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-96 md:h-[500px] bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200 overflow-hidden">
              <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }} className="cursor-pointer">
                <ambientLight intensity={0.4} />
                <directionalLight
                  position={[5, 5, 5]}
                  intensity={1}
                  castShadow
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff69b4" />
                <pointLight position={[5, -5, -5]} intensity={0.3} color="#ffd700" />

                <Gift3D isOpen={isOpen} onClick={handleBoxClick} />

                <Environment preset="sunset" />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>
            </div>

            {/* Click Instruction */}
            {!isOpen && (
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200"
              >
                <p className="text-pink-600 font-medium flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Click to open!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Gift Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200 shadow-xl"
              >
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="inline-block text-pink-500 mb-4"
                  >
                    {giftMessages[currentGift].icon}
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-pink-700 mb-4">
                    {giftMessages[currentGift].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{giftMessages[currentGift].message}</p>
                </div>

                {/* Gift Controls */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextGift}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Next Gift
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetBox}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Gift className="w-4 h-4" />
                    Close Box
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="text-pink-500 mb-4"
                  >
                    <Gift className="w-16 h-16 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-pink-700 mb-4">A Special Surprise Awaits</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I've prepared something very special for you. Click on the gift box to discover what's inside!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-8 max-w-2xl mx-auto border-2 border-pink-300">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mb-4"
            >
              <Heart className="w-12 h-12 text-pink-600 mx-auto" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-pink-700 mb-4">Happy Birthday, Beautiful!</h3>
            <p className="text-gray-700 leading-relaxed">
              May this special day mark the beginning of another amazing year filled with love, laughter, and all the
              wonderful things you deserve. You are truly one of a kind!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
