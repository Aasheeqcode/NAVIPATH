"use client"

import { useEffect, useState } from "react"
import { LoadingAnimation } from "@/components/loading-animation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { InteractiveShipModel } from "@/components/three-d/interactive-ship"
import { DataVisualizationSection } from "@/components/data-visualization-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { Ship } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleNavigation = (e, href) => {
    e.preventDefault()
    setPageTransition(true)
    setTimeout(() => {
      window.location.href = href
    }, 2000)
  }

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <div className="flex min-h-screen flex-col">
      {pageTransition && <PageTransition />}

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Ship className="h-6 w-6" />
            <span>NaviPath</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-primary nav-link px-3 py-2 rounded-[5%]"
              onClick={(e) => handleNavigation(e, "/")}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-black hover:text-primary nav-link px-3 py-2 rounded-[5%]"
            >
              Features
            </Link>
            <Link
              href="#visualization"
              className="text-sm font-medium text-black hover:text-primary nav-link px-3 py-2 rounded-[5%]"
            >
              Visualization
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-black hover:text-primary nav-link px-3 py-2 rounded-[5%]"
            >
              Testimonials
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-black hover:text-primary nav-link px-3 py-2 rounded-[5%]"
              onClick={(e) => handleNavigation(e, "/dashboard")}
            >
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" onClick={(e) => handleNavigation(e, "/login")}>
              <button className="auth-button px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Login
              </button>
            </Link>
            <Link href="/signup" onClick={(e) => handleNavigation(e, "/signup")}>
              <button className="auth-button px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* 3D Ship Model Section */}
      <section id="visualization" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Interactive Route Visualization</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore your maritime routes with our interactive 3D visualization. Click on waypoints to see detailed
              information.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <InteractiveShipModel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Data Visualization Section */}
      <DataVisualizationSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}

