"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "MON GARS SUR POUR MES ACHATS"
  const [hasTyped, setHasTyped] = useState(false)

  useEffect(() => {
    if (hasTyped) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setHasTyped(true)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [hasTyped])

  return (
    <section className="bg-[#f8f4e3] african-pattern py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <div className="relative max-w-5xl mx-auto rounded-lg overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] flex">
              {/* Left image - Woman in purple */}
              <div className="w-1/2 relative">
                <img
                  src="/smiling-african-woman-in-purple-traditional-geomet.jpg"
                  alt="Femme africaine en tenue traditionnelle violette"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right image - Man in green */}
              <div className="w-1/2 relative">
                <img
                  src="/african-man-in-green-geometric-patterned-tradition.jpg"
                  alt="Homme africain en tenue traditionnelle verte"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/30" />

              {/* Text overlay centered across both images */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
                  {displayedText}
                  <span
                    className="inline-block w-1 h-8 md:h-12 lg:h-16 bg-white ml-1 animate-pulse"
                    style={{ opacity: hasTyped ? 0 : 1 }}
                  />
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium max-w-3xl">
                  Trouve ton style, vends ton drip, fais ton cash easy
                </p>
                <Button className="bg-[#4a1a4a] hover:bg-[#3a1438] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-md shadow-lg">
                  DÉCOUVRIR
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
