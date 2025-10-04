import { ShoppingBag, Wallet, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    icon: ShoppingBag,
    number: "1",
    title: "Vendez vos trésors",
    description: "",
  },
  {
    icon: Wallet,
    number: "2",
    title: "Gagnez de l'argent",
    description: "",
  },
  {
    icon: Package,
    number: "3",
    title: "Achetez unique",
    description: "",
  },
]

export function HowItWorks() {
  return (
    <section className="py-8 md:py-12 bg-[#f5f3ed]">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">COMMENT ÇA MARCHE ?</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} direction="up" delay={index * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#4a1a4a] flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-[#4a1a4a]" />
                </div>
                <p className="text-sm text-[#4a1a4a] mb-2">{step.number}.</p>
                <p className="font-medium text-[#4a1a4a]">{step.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#4a1a4a] to-[#6b2a6b] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez le mouvement</h3>
              <p className="text-base md:text-lg mb-2 text-white/90 max-w-2xl mx-auto font-medium">
                Ici on recycle le swag, on partage le flow
              </p>
              <p className="text-base md:text-lg mb-8 text-white/90 max-w-2xl mx-auto font-medium">
                Trouve ton style, vends ton drip, fais ton cash easy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base w-full sm:w-auto bg-transparent"
                >
                  Voir tous les articles
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-[#4a1a4a] hover:bg-gray-100 font-semibold px-8 py-6 text-base w-full sm:w-auto border-2 border-[#4a1a4a]"
                >
                  Commencer à vendre
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
