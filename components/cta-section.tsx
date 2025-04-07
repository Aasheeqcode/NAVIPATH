"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const oceanRef = useRef(null)

  useEffect(() => {
    if (!oceanRef.current) return

    const canvas = oceanRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Ocean wave animation
    const waves = {
      y: canvas.height / 2,
      length: 0.01,
      amplitude: 20,
      frequency: 0.01,
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0c4a6e") // Deep blue
      gradient.addColorStop(1, "#0891b2") // Turquoise
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x < canvas.width; x++) {
        const dx = x * waves.length
        const y = Math.sin(dx - (waves.frequency * Date.now()) / 1000) * waves.amplitude + waves.y
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      const waveGradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height)
      waveGradient.addColorStop(0, "rgba(6, 182, 212, 0.7)") // Turquoise
      waveGradient.addColorStop(1, "rgba(6, 182, 212, 0.3)")
      ctx.fillStyle = waveGradient
      ctx.fill()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      <canvas ref={oceanRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to revolutionize your shipping routes?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of maritime companies already optimizing their routes with NaviPath's AI-powered technology.
          </p>

          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 pulse"
            >
              Try NaviPath Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

