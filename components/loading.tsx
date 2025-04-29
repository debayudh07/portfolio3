"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const pathRef = useRef<SVGPathElement>(null)
  const pathLength = useRef(0)

  useEffect(() => {
    if (pathRef.current) {
      pathLength.current = pathRef.current.getTotalLength()

      // Set initial state - fully hidden
      pathRef.current.style.strokeDasharray = `${pathLength.current} ${pathLength.current}`
      pathRef.current.style.strokeDashoffset = `${pathLength.current}`
    }
  }, [])

  useEffect(() => {
    const duration = 12 // Total duration in seconds
    const interval = 50 // Update interval in milliseconds

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / ((duration * 1000) / interval)
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (pathRef.current && pathLength.current) {
      // Calculate how much of the path should be visible
      const drawLength = pathLength.current * (1 - progress / 100)
      pathRef.current.style.strokeDashoffset = drawLength.toString()
    }
  }, [progress])

  // Generate random mini lightning bolts for background effect
  const generateLightningBolts = () => {
    const bolts = []
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const width = 20 + Math.random() * 30
      const height = 20 + Math.random() * 30
      const opacity = 0.1 + Math.random() * 0.3
      const delay = Math.random() * 5

      bolts.push(
        <motion.div
          key={i}
          className="absolute bg-sky-500"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 40% 50%, 100% 100%, 60% 50%, 100% 0%, 40% 50%, 0% 0%)",
            width: width,
            height: height,
            left: `${x}%`,
            top: `${y}%`,
            opacity: opacity,
          }}
          animate={{
            opacity: [opacity, opacity * 2, opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />,
      )
    }
    return bolts
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background mini lightning bolts */}
      {generateLightningBolts()}

      <div className="w-64 relative">
        {/* Main lightning bolt */}
        <div className="relative h-64 w-full flex items-center justify-center">
          <svg viewBox="0 0 100 200" className="w-32 h-64" style={{ filter: "drop-shadow(0 0 8px #0ea5e9)" }}>
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M60,10 L40,80 L65,90 L30,190 L45,120 L20,110 L60,10"
              fill="none"
              stroke="url(#lightningGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lightning-path"
            />
          </svg>

          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-40 bg-sky-500 rounded-full blur-3xl"
              style={{ opacity: 0.2 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>

        {/* Percentage text */}
        <div className="mt-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Loading text with lightning effect */}
        <motion.div
          className="mt-2 text-center text-gray-400 text-sm relative"
          animate={{
            textShadow: [
              "0 0 0px rgba(14, 165, 233, 0)",
              "0 0 10px rgba(14, 165, 233, 0.8)",
              "0 0 0px rgba(14, 165, 233, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Charging...
        </motion.div>
      </div>
    </div>
  )
}
