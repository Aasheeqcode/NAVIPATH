"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Ship, ArrowRight } from "lucide-react"
import Link from "next/link"

function OceanWaves() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden">
      <div className="wave wave1 bg-secondary/30"></div>
      <div className="wave wave2 bg-secondary/20"></div>
      <div className="wave wave3 bg-secondary/10"></div>
      <div className="wave wave4 bg-secondary/5"></div>
    </div>
  )
}

function AnimatedShip() {
  const shipRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      if (shipRef.current) {
        shipRef.current.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 10}px) rotate(${Math.sin(Date.now() / 1500) * 5}deg)`
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={shipRef}
      className="absolute bottom-40 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out"
    >
      <Ship className="h-16 w-16 text-white" />
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavigation = (e, href) => {
    if (href !== window.location.pathname) {
      e.preventDefault()
      setPageTransition(true)
      setTimeout(() => {
        window.location.href = href
      }, 2000)
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary-foreground/5">
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart AI-Powered Ship Routing with NaviPath
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Optimize maritime routes with real-time AI-driven analytics and weather forecasting
          </p>
          <Link href="/dashboard" onClick={(e) => handleNavigation(e, "/dashboard")}>
            <button className="auth-button px-6 py-3 rounded-md bg-secondary text-white hover:bg-secondary/90 transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </Link>
        </motion.div>
      </div>

      <AnimatedShip />
      <OceanWaves />

      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
    </section>
  )
}

