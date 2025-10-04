"use client"

import { Card } from "@/components/ui/card"
import { Heart, MessageCircle } from "lucide-react"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ChatDialog } from "@/components/chat-dialog"

const items = [
  {
    id: 1,
    title: "Tissu Wax Africain",
    price: "19 000 FCFA",
    condition: "Neuf",
    image: "/purple-african-print-fabric-folded-with-geometric-.jpg",
  },
  {
    id: 2,
    title: "Collier Perles Africaines",
    price: "13 000 FCFA",
    condition: "Bon état",
    image: "/green-and-orange-beaded-african-necklace-on-displa.jpg",
  },
  {
    id: 3,
    title: "Tunique Brodée",
    price: "18 500 FCFA",
    condition: "Très bon état",
    image: "/cream-colored-embroidered-african-tunic-shirt.jpg",
  },
  {
    id: 4,
    title: "Sandales Tissées",
    price: "18 500 FCFA",
    condition: "Bon état",
    image: "/colorful-african-woven-sandals-with-green-and-oran.jpg",
  },
  {
    id: 5,
    title: "Robe Ankara",
    price: "23 000 FCFA",
    condition: "Comme neuf",
    image: "/african-ankara-dress.jpg",
  },
  {
    id: 6,
    title: "Tissu Kente",
    price: "12 500 FCFA",
    condition: "Neuf avec étiquette",
    image: "/african-kente-cloth.jpg",
  },
  {
    id: 7,
    title: "Sac en Cuir",
    price: "14 500 FCFA",
    condition: "Bon état",
    image: "/african-leather-bag.jpg",
  },
  {
    id: 8,
    title: "Chemise Dashiki",
    price: "17 000 FCFA",
    condition: "Très bon état",
    image: "/african-dashiki-shirt.jpg",
  },
  {
    id: 9,
    title: "Boubou Traditionnel",
    price: "29 500 FCFA",
    condition: "Neuf",
    image: "/traditional-african-boubou-robe-colorful-embroider.jpg",
  },
  {
    id: 10,
    title: "Bracelet Tribal",
    price: "8 000 FCFA",
    condition: "Bon état",
    image: "/african-tribal-brass-bracelet-jewelry.jpg",
  },
  {
    id: 11,
    title: "Panier Tressé",
    price: "12 000 FCFA",
    condition: "Très bon état",
    image: "/african-woven-basket-colorful-traditional.jpg",
  },
  {
    id: 12,
    title: "Boucles d'Oreilles",
    price: "6 000 FCFA",
    condition: "Neuf",
    image: "/african-wooden-earrings-handcrafted-jewelry.jpg",
  },
  {
    id: 13,
    title: "Écharpe Bogolan",
    price: "15 000 FCFA",
    condition: "Comme neuf",
    image: "/african-mudcloth-bogolan-scarf-brown-patterns.jpg",
  },
  {
    id: 14,
    title: "Masque Décoratif",
    price: "20 000 FCFA",
    condition: "Neuf",
    image: "/african-wooden-mask-wall-decoration-tribal-art.jpg",
  },
  {
    id: 15,
    title: "Coussin Wax",
    price: "10 000 FCFA",
    condition: "Bon état",
    image: "/african-wax-print-cushion-pillow-colorful-geometri.jpg",
  },
  {
    id: 16,
    title: "Turban Headwrap",
    price: "5 500 FCFA",
    condition: "Neuf avec étiquette",
    image: "/african-headwrap-turban-colorful-fabric.jpg",
  },
  {
    id: 17,
    title: "Ensemble Enfant Ankara",
    price: "12 000 FCFA",
    condition: "Neuf",
    image: "/children-ankara-outfit-colorful-african-print.jpg",
  },
  {
    id: 18,
    title: "Boubou Enfant",
    price: "15 000 FCFA",
    condition: "Très bon état",
    image: "/children-traditional-boubou-embroidered.jpg",
  },
  {
    id: 19,
    title: "Sandales Enfant",
    price: "7 500 FCFA",
    condition: "Bon état",
    image: "/children-african-sandals-colorful.jpg",
  },
  {
    id: 20,
    title: "Robe Fillette Wax",
    price: "10 500 FCFA",
    condition: "Comme neuf",
    image: "/girl-african-wax-print-dress.jpg",
  },
  {
    id: 21,
    title: "Chemise Garçon Dashiki",
    price: "9 000 FCFA",
    condition: "Neuf avec étiquette",
    image: "/boy-dashiki-shirt-traditional.jpg",
  },
  {
    id: 22,
    title: "Sac École Africain",
    price: "8 500 FCFA",
    condition: "Bon état",
    image: "/children-school-bag-african-print.jpg",
  },
  {
    id: 23,
    title: "Chapeau Enfant Wax",
    price: "4 500 FCFA",
    condition: "Neuf",
    image: "/children-african-print-hat.jpg",
  },
  {
    id: 24,
    title: "Pagne Bébé Portage",
    price: "11 000 FCFA",
    condition: "Très bon état",
    image: "/baby-carrier-wrap-african-fabric.jpg",
  },
]

function ItemCard({ item }: { item: (typeof items)[0] }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const sellerNames = [
    "Aminata Diallo",
    "Mamadou Koné",
    "Fatou Sow",
    "Ibrahim Traoré",
    "Aïcha Ndiaye",
    "Ousmane Diop",
    "Mariam Touré",
    "Abdoulaye Ba",
  ]
  const sellerName = sellerNames[item.id % sellerNames.length]

  return (
    <>
      <Card
        className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer bg-white relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square bg-[#f5f5f0] relative">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />

          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsChatOpen(true)
            }}
            className={`absolute top-2 left-2 p-2 rounded-full bg-white shadow-md transition-all duration-200 hover:bg-[#4a1a4a] hover:text-white group ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Contacter le vendeur"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 transition-colors" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-all duration-200 ${
              isHovered || isLiked ? "opacity-100" : "opacity-0"
            }`}
            aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <Heart
              className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                isLiked ? "fill-[#4a1a4a] text-[#4a1a4a]" : "text-gray-600"
              }`}
            />
          </button>
        </div>
        <div className="p-2 md:p-3 space-y-1">
          <p className="text-xs md:text-sm font-medium text-gray-900">{item.title}</p>
          <p className="text-xs text-gray-500">{item.condition}</p>
          <p className="text-xs md:text-sm font-semibold text-gray-900">{item.price}</p>
        </div>
      </Card>

      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} item={item} sellerName={sellerName} />
    </>
  )
}

export function FeaturedItems() {
  return (
    <section className="py-8 bg-[#f8f4e3] african-pattern">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#4a1a4a]">Articles en Vedette</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 0.05}>
              <ItemCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
