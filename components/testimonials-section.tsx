"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Captain James Wilson",
    role: "Fleet Manager, Oceanic Shipping Co.",
    quote:
      "NaviPath has reduced our fuel consumption by 15% and improved our on-time arrivals by 22%. A game-changer for our fleet operations.",
    stats: {
      fuelSavings: "15%",
      timeReduction: "22%",
      costSavings: "$1.2M",
    },
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Chen",
    role: "Operations Director, Global Marine Transport",
    quote:
      "The weather integration feature has helped us avoid severe conditions multiple times, ensuring the safety of our crew and cargo.",
    stats: {
      safetyIncidents: "-35%",
      weatherAlerts: "98% accuracy",
      routeChanges: "15 successful diversions",
    },
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, Atlantic Freight Lines",
    quote: "The ROI on NaviPath was evident within the first quarter. The fuel savings alone justified the investment.",
    stats: {
      quarterlyROI: "127%",
      annualSavings: "$3.5M",
      efficiency: "+18%",
    },
    image: "/placeholder.svg?height=100&width=100",
  },
]

function TestimonialCard({ testimonial }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-full w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full bg-white dark:bg-gray-800 p-6 flex flex-col">
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <div>
                <Quote className="h-8 w-8 text-secondary/30 mb-2" />
                <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.quote}</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-center text-gray-500">Click to see the results</div>
          </Card>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="h-full bg-primary text-white p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center">Results with NaviPath</h3>

            <div className="space-y-4">
              {Object.entries(testimonial.stats).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <span className="font-bold text-secondary">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  return (
    <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Maritime Leaders</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            See what our clients say about how NaviPath has transformed their maritime operations.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-[400px]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-secondary" : "bg-blue-700"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:bg-blue-900/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:bg-blue-900/50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="/placeholder.svg?height=60&width=180"
              alt="Partner Logo"
              className="h-12 opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

