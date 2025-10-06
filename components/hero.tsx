"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <section className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
      {/* High-quality responsive background image with zoom-out effect */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          {/* Format WebP pour une meilleure compression */}
          <source 
            srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?format=webp&quality=95&width=1920 1920w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?format=webp&quality=90&width=1440 1440w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?format=webp&quality=85&width=1024 1024w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?format=webp&quality=80&width=768 768w"
            sizes="100vw"
            type="image/webp" 
          />
          
          {/* Fallback PNG haute qualité */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?quality=95&width=1920"
            srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?quality=95&width=1920 1920w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?quality=90&width=1440 1440w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?quality=85&width=1024 1024w,
                    https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2006%2C%202025%20-%2010_58AM-xQXYzhRuAIDCk3xuhF7ONZGm16qzoG.png?quality=80&width=768 768w"
            sizes="100vw"
            alt="Boutique ASSO avec clientes africaines - Marketplace de mode authentique"
            className="w-full h-full object-cover object-center 
                       scale-105 sm:scale-102 md:scale-100 lg:scale-100 xl:scale-100
                       transition-all duration-500 ease-out
                       filter brightness-105 contrast-105 saturate-110"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={handleImageLoad}
            onError={() => setImageLoaded(true)}
          />
        </picture>
      </div>

      {/* Enhanced gradient overlay for better text readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Call-to-action box with improved responsive positioning */}
      <div
        className={`absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 
          bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20
          bg-white/95 backdrop-blur-sm rounded-2xl 
          p-4 sm:p-5 md:p-6 lg:p-7
          shadow-2xl 
          w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:max-w-sm lg:max-w-md xl:max-w-lg
          transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight">
          Tu veux faire ton business avec style ?
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
          Transforme ton style en cash et découvre des pièces uniques
        </p>

        <Button className="w-full bg-[#4a1a4a] hover:bg-[#6b2a6b] text-white px-5 py-3 sm:py-4 md:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-md mb-3 sm:mb-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          Commencer à vendre
        </Button>

        <button className="w-full text-[#4a1a4a] hover:text-[#6b2a6b] font-medium text-xs sm:text-sm md:text-base transition-colors duration-300 hover:underline">
          Découvrir comment ça marche
        </button>
      </div>

      {/* Mobile-specific content positioning indicator */}
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 md:hidden">
        <div className="w-1 h-8 bg-white/30 rounded-full animate-pulse"></div>
      </div>
    </section>
  )
}
