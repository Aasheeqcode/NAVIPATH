"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Ship, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function FooterSection() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const footer = footerRef.current

    const handleRipple = (e) => {
      const rect = footer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const ripple = document.createElement("div")
      ripple.classList.add("ripple-effect")
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`

      footer.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 1000)
    }

    footer.addEventListener("click", handleRipple)

    return () => {
      footer.removeEventListener("click", handleRipple)
    }
  }, [])

  return (
    <footer ref={footerRef} className="relative bg-primary text-white py-16 overflow-hidden">
      <style jsx>{`
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          width: 100px;
          height: 100px;
          margin-top: -50px;
          margin-left: -50px;
          animation: ripple 1s;
          opacity: 0;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(40);
            opacity: 0;
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Ship className="h-6 w-6" />
              <span>NaviPath</span>
            </div>
            <p className="text-blue-200 mb-4">Smart Navigation for Safer & Efficient Maritime Journeys</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-blue-200 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-blue-200 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-blue-200 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@navipath.com" className="text-blue-200 hover:text-white transition-colors">
                  info@navipath.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <span className="text-blue-200">123 Maritime Way, Port City, PC 12345</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-blue-200 mb-4">Stay updated with the latest maritime navigation innovations</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} NaviPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

