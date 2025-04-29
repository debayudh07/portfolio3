"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CardLightningProps {
  children: React.ReactNode
  className?: string
}

export default function CardLightning({ children, className = "" }: CardLightningProps) {
  const [isClicked, setIsClicked] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      })
    }
  }, [])

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 1500)
    }
  }

  // Generate lightning bolts
  const generateLightningBolts = () => {
    const bolts = []
    const numBolts = 5 + Math.floor(Math.random() * 5)

    for (let i = 0; i < numBolts; i++) {
      const startX = Math.random() * dimensions.width
      const startY = 0
      const endX = Math.random() * dimensions.width
      const endY = dimensions.height
      const midX1 = startX + (endX - startX) * 0.33 + (Math.random() - 0.5) * 40
      const midY1 = startY + (endY - startY) * 0.33
      const midX2 = startX + (endX - startX) * 0.66 + (Math.random() - 0.5) * 40
      const midY2 = startY + (endY - startY) * 0.66

      const pathData = `M${startX},${startY} L${midX1},${midY1} L${midX2},${midY2} L${endX},${endY}`

      bolts.push(
        <motion.svg
          key={i}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, times: [0, 0.1, 1] }}
        >
          <motion.path
            d={pathData}
            stroke="#38bdf8"
            strokeWidth={2 + Math.random() * 2}
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: [0, 1] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 8px #0ea5e9)" }}
          />
        </motion.svg>,
      )
    }

    return bolts
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence>{isClicked && generateLightningBolts()}</AnimatePresence>

      {/* Glow effect on click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-sky-500/20 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  )
}
