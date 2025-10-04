import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main footer content with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* ASSO Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">ASSO</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                À propos de ASSO
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Carrière
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Le développement durable
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Presse
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Publicités
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Accessibilité
              </a>
            </nav>
          </div>

          {/* Découvrir Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Découvrir</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Comment ça marche ?
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Vérification de l'article
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Applications mobiles
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Tableau de bord
              </a>
            </nav>
          </div>

          {/* Aide Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Aide</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Centre d'aide
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Vendre
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Acheter
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#4a1a4a] hover:underline">
                Confiance et sécurité
              </a>
            </nav>
          </div>
        </div>

        {/* Social media and app downloads */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray-200">
          {/* Social media icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-[#4a1a4a] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4a1a4a] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4a1a4a] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* App store buttons */}
          <div className="flex items-center gap-3">
            <a href="#" className="block hover:opacity-80 transition-opacity">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0HeGVZlaOjLXUgvyg96HB1UgjxyFWl.png"
                alt="Télécharger dans l'App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3HBjXXTZrVU3aurqFYcAVHSRnP0GG7.png"
                alt="Disponible sur Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Bottom legal links */}
        <div className="pt-6 border-t border-gray-200">
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-[#4a1a4a] hover:underline">
              Centre de protection de la vie privée
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#4a1a4a] hover:underline">
              Politique de cookies
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#4a1a4a] hover:underline">
              Paramètres des cookies
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#4a1a4a] hover:underline">
              Termes et Conditions
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#4a1a4a] hover:underline">
              Notre plateforme
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
