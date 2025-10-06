import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedItems } from "@/components/featured-items"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <Hero />
      <FeaturedItems />
      <HowItWorks />
      <Footer />
    </div>
  )
}
