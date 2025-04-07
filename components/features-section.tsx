"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Cloud, Fuel, Globe, Ship } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "AI-Powered Route Optimization",
    description: "Our advanced algorithms analyze thousands of variables to find the most efficient routes.",
    icon: Ship,
    color: "bg-blue-500",
  },
  {
    title: "Live Weather Forecast Integration",
    description: "Real-time weather data helps you avoid storms and dangerous conditions.",
    icon: Cloud,
    color: "bg-cyan-500",
  },
  {
    title: "Fuel Efficiency Analysis",
    description: "Reduce fuel consumption by up to 15% with our smart routing technology.",
    icon: Fuel,
    color: "bg-green-500",
  },
  {
    title: "Global Port Connectivity",
    description: "Access information on thousands of ports worldwide with real-time updates.",
    icon: Globe,
    color: "bg-indigo-500",
  },
]

function FeatureCard({ feature, index }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={cardVariants} className="w-full">
      <Card className="feature-card h-full border-2 border-secondary/10 hover:border-secondary/30 bg-white dark:bg-gray-900">
        <CardContent className="p-6">
          <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
            <feature.icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight mb-4 text-primary"
          >
            Cutting-Edge Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            NaviPath combines advanced AI technology with maritime expertise to deliver an unparalleled navigation
            experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

