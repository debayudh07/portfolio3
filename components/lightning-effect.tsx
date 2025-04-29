"use client"

import { useEffect, useState, useRef } from "react"

export default function LightningEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let lightningTimer: number | null = null
    let lastLightningTime = 0

    const createLightning = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      branches = 5,
      lineWidth = 3,
    ) => {
      if (!ctx) return

      ctx.strokeStyle = "#38bdf8"
      ctx.lineWidth = lineWidth
      ctx.shadowColor = "#0ea5e9"
      ctx.shadowBlur = 30

      ctx.beginPath()
      ctx.moveTo(startX, startY)

      const drawBranch = (x1: number, y1: number, x2: number, y2: number, branchesLeft: number, lineWidth: number) => {
        if (branchesLeft <= 0) return

        const midX = (x1 + x2) / 2
        const midY = (y1 + y2) / 2

        // Add some randomness to the midpoint
        const offsetX = (Math.random() - 0.5) * 50
        const offsetY = (Math.random() - 0.5) * 50

        const newMidX = midX + offsetX
        const newMidY = midY + offsetY

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(newMidX, newMidY)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        // Create sub-branches with some probability
        if (branchesLeft > 1 && Math.random() > 0.6) {
          const branchAngle = (Math.random() * Math.PI) / 2 - Math.PI / 4
          const branchLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) * 0.5

          const branchX = newMidX + Math.cos(branchAngle) * branchLength
          const branchY = newMidY + Math.sin(branchAngle) * branchLength

          drawBranch(newMidX, newMidY, branchX, branchY, branchesLeft - 1, lineWidth * 0.7)
        }

        // Continue with smaller branches
        if (branchesLeft > 1) {
          drawBranch(newMidX, newMidY, x2, y2, branchesLeft - 1, lineWidth * 0.8)
        }
      }

      drawBranch(startX, startY, endX, endY, branches, lineWidth)
    }

    const animateLightning = (timestamp: number) => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new lightning every few seconds
      if (timestamp - lastLightningTime > 5000 + Math.random() * 5000) {
        lastLightningTime = timestamp

        // Create 1-3 lightning bolts
        const numBolts = Math.floor(Math.random() * 3) + 1

        for (let i = 0; i < numBolts; i++) {
          const startX = Math.random() * canvas.width
          const startY = 0
          const endX = Math.random() * canvas.width
          const endY = canvas.height

          createLightning(startX, startY, endX, endY, 5, 2 + Math.random() * 2)

          // Add a flash effect
          ctx.fillStyle = "rgba(56, 189, 248, 0.1)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        // Fade out the lightning after a short delay
        setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }, 100)
      }

      lightningTimer = requestAnimationFrame(animateLightning)
    }

    lightningTimer = requestAnimationFrame(animateLightning)

    return () => {
      if (lightningTimer) cancelAnimationFrame(lightningTimer)
    }
  }, [dimensions])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ opacity: 0.7 }} />
}
