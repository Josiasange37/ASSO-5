"use client"

import {
  Search,
  Menu,
  X,
  Camera,
  HelpCircle,
  ChevronDown,
  Grid3x3,
  Shirt,
  Footprints,
  ShoppingBag,
  Watch,
  Sparkles,
  Diamond,
  Home,
  Sofa,
  Lamp,
  Smartphone,
  Laptop,
  Headphones,
  Gamepad2,
  Music,
  Book,
  Palette,
  Wrench,
  Trophy,
  Dumbbell,
  Info,
  Building,
  Users,
  LifeBuoy,
  Mail,
  Bell,
  Heart,
  Baby,
  Zap,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ImageUploadDialog } from "@/components/image-upload-dialog"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [imageSearchOpen, setImageSearchOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("Voir tout")
  const [authMode, setAuthMode] = useState<"login" | "register">("login")

  const dropdownMenus: Record<string, Array<{ label: string; icon: any }>> = {
    Femmes: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Vêtements", icon: Shirt },
      { label: "Chaussures", icon: Footprints },
      { label: "Sacs", icon: ShoppingBag },
      { label: "Accessoires", icon: Watch },
      { label: "Beauté", icon: Sparkles },
      { label: "Articles de créateurs", icon: Diamond },
    ],
    Hommes: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Vêtements", icon: Shirt },
      { label: "Chaussures", icon: Footprints },
      { label: "Sacs", icon: ShoppingBag },
      { label: "Accessoires", icon: Watch },
    ],
    Enfants: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Vêtements", icon: Shirt },
      { label: "Chaussures", icon: Footprints },
      { label: "Accessoires", icon: Watch },
    ],
    Maison: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Décoration", icon: Home },
      { label: "Meubles", icon: Sofa },
      { label: "Luminaires", icon: Lamp },
      { label: "Textile", icon: Shirt },
    ],
    Électronique: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Téléphones", icon: Smartphone },
      { label: "Ordinateurs", icon: Laptop },
      { label: "Audio", icon: Headphones },
      { label: "Accessoires", icon: Watch },
    ],
    Divertissement: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Jeux vidéo", icon: Gamepad2 },
      { label: "Musique", icon: Music },
      { label: "Livres", icon: Book },
      { label: "Films", icon: Sparkles },
    ],
    "Loisirs et collections": [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Art", icon: Palette },
      { label: "Collections", icon: Diamond },
      { label: "Bricolage", icon: Wrench },
      { label: "Instruments", icon: Music },
    ],
    Sport: [
      { label: "Voir tout", icon: Grid3x3 },
      { label: "Vêtements de sport", icon: Shirt },
      { label: "Chaussures de sport", icon: Footprints },
      { label: "Équipement", icon: Trophy },
      { label: "Fitness", icon: Dumbbell },
    ],
    "À propos": [
      { label: "Notre histoire", icon: Info },
      { label: "Comment ça marche", icon: HelpCircle },
      { label: "Conditions", icon: Book },
      { label: "Contact", icon: Building },
    ],
    "Notre plateforme": [
      { label: "Fonctionnalités", icon: Grid3x3 },
      { label: "Sécurité", icon: Diamond },
      { label: "Communauté", icon: Building },
      { label: "Blog", icon: Book },
    ],
  }

  const navItems = [
    "Femmes",
    "Hommes",
    "Enfants",
    "Maison",
    "Électronique",
    "Divertissement",
    "Loisirs et collections",
    "Sport",
    "À propos",
    "Notre plateforme",
  ]

  const mobileMenuCategories = [
    { label: "Femmes", icon: Shirt },
    { label: "Hommes", icon: Shirt },
    { label: "Articles de créateurs", icon: Diamond },
    { label: "Enfants", icon: Baby },
    { label: "Maison", icon: Lamp },
    { label: "Électronique", icon: Zap },
  ]

  const mobileFilters = [
    "Voir tout",
    "Femmes",
    "Hommes",
    "Enfants",
    "Maison",
    "Électronique",
    "Sport",
    "Beauté",
    "Accessoires",
    "Sacs",
    "Chaussures",
  ]

  const languages = [
    { code: "FR", label: "Français (French)" },
    { code: "EN", label: "English (English)" },
    { code: "ES", label: "Español (Spanish)" },
    { code: "NL", label: "Nederlands (Dutch)" },
  ]

  const articlesMenuItems = [
    { label: "Articles", icon: Grid3x3 },
    { label: "Membres", icon: Users },
    { label: "Centre d'aide", icon: LifeBuoy },
  ]

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="border-b border-gray-200/50">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#4a1a4a]">ASSO</span>
                <div className="relative">
                  <button
                    onClick={() => setArticlesDropdownOpen(!articlesDropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  >
                    Articles
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {articlesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md min-w-[180px] py-2 z-50 border border-gray-200">
                      {articlesMenuItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={item.label}
                            onClick={() => {
                              setArticlesDropdownOpen(false)
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left"
                          >
                            <Icon className="h-4 w-4 text-gray-600" />
                            <span>{item.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 max-w-2xl hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Rechercher des articles"
                    className="w-full bg-gray-50 pl-10 pr-12 h-11 rounded-md border border-gray-300 focus-visible:ring-1 focus-visible:ring-[#4a1a4a]"
                  />
                  <button
                    onClick={() => setImageSearchOpen(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                  >
                    <Camera className="h-5 w-5 text-[#4a1a4a]" />
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => setSignInModalOpen(true)}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-2 border border-gray-300 rounded-md bg-white whitespace-nowrap"
                >
                  S'inscrire | Se connecter
                </button>
                <Button className="bg-[#4a1a4a] hover:bg-[#3d1540] text-white font-semibold px-5 h-10 rounded-md hidden lg:flex">
                  Vends tes articles
                </Button>
                <button className="p-2 hover:bg-gray-100 rounded-full hidden lg:flex">
                  <HelpCircle className="h-5 w-5 text-gray-700" />
                </button>
                <div className="relative hidden lg:block">
                  <button
                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 px-2"
                  >
                    FR
                  </button>
                  {languageDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] py-2 z-50 border border-gray-200">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setLanguageDropdownOpen(false)
                          }}
                          className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left"
                        >
                          {language.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Rechercher des articles"
                className="w-full bg-gray-50 pl-10 pr-12 h-10 rounded-md border border-gray-300"
              />
              <button
                onClick={() => setImageSearchOpen(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
              >
                <Camera className="h-5 w-5 text-[#4a1a4a]" />
              </button>
            </div>
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-thin">
              {mobileFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors flex-shrink-0 ${
                    activeFilter === filter
                      ? "bg-[#4a1a4a] text-white border-[#4a1a4a]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Vinted-style navigation bar */}
        <div className="bg-[#4a1a4a] relative hidden md:block">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-center h-12">
              <div className="flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item, index) => {
                  // Logique de positionnement intelligent
                  const isFirstItems = index < 3
                  const isLastItems = index >= navItems.length - 3
                  
                  let positionClasses = "left-1/2 transform -translate-x-1/2" // Position par défaut (centrée)
                  
                  if (isFirstItems) {
                    positionClasses = "left-0" // Aligné à gauche pour les premiers items
                  } else if (isLastItems) {
                    positionClasses = "right-0" // Aligné à droite pour les derniers items
                  }

                  return (
                    <div
                      key={item}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-sm font-medium text-white hover:text-white/80 whitespace-nowrap h-12 flex items-center px-2 lg:px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10">
                        {item}
                      </button>
                      {dropdownMenus[item] && activeDropdown === item && (
                        <div className={`absolute top-full ${positionClasses} mt-2 bg-white shadow-2xl rounded-xl border border-gray-200 w-[300px] lg:w-[320px] xl:w-[400px] py-4 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-300`}>
                        {/* Header du dropdown */}
                        <div className="px-5 pb-3 border-b border-gray-100">
                          <h3 className="text-base font-semibold text-[#4a1a4a] capitalize">{item}</h3>
                        </div>
                        
                        {/* Grid des items */}
                        <div className="grid grid-cols-2 gap-1 px-3 pt-3">
                          {dropdownMenus[item].map((subItem) => {
                            const Icon = subItem.icon
                            return (
                              <button
                                key={subItem.label}
                                onClick={() => {
                                  setActiveDropdown(null)
                                }}
                                className="w-full flex flex-col items-center gap-2 px-3 py-4 text-sm text-gray-700 hover:bg-[#4a1a4a]/8 hover:text-[#4a1a4a] rounded-lg transition-all duration-200 group/item"
                              >
                                <Icon className="h-6 w-6 text-[#4a1a4a] group-hover/item:scale-110 transition-transform duration-200" />
                                <span className="font-medium text-center leading-tight">{subItem.label}</span>
                              </button>
                            )
                          })}
                        </div>
                        
                        {/* Footer avec "Voir tout" */}
                        <div className="px-5 pt-3 border-t border-gray-100 mt-3">
                          <button 
                            onClick={() => setActiveDropdown(null)}
                            className="w-full text-center py-2 text-sm font-semibold text-[#4a1a4a] hover:text-[#6b2a6b] transition-colors duration-200"
                          >
                            Voir tout dans {item}
                          </button>
                        </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[100] md:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-white z-[101] md:hidden overflow-y-auto scroll-smooth">
            <div className="p-4 pb-8 min-h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-[#4a1a4a]">ASSO</span>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Bell className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <Button className="w-full bg-[#4a1a4a] hover:bg-[#3d1540] text-white font-semibold py-3 rounded-md mb-4">
                Vends tes articles
              </Button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setSignInModalOpen(true)
                }}
                className="w-full text-sm font-medium text-gray-700 hover:text-gray-900 px-4 py-3 border border-gray-300 rounded-md bg-white mb-4"
              >
                S'inscrire | Se connecter
              </button>

              <a href="#" className="block text-center text-[#4a1a4a] hover:underline font-medium mb-6 text-sm">
                Ton guide ASSO
              </a>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-4 px-2">Parcourir</h3>
                <nav className="space-y-1 pb-6">
                  {mobileMenuCategories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.label}
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full flex items-center gap-4 px-2 py-3 text-gray-700 hover:bg-gray-50 rounded-md text-left"
                      >
                        <Icon className="h-5 w-5 text-[#4a1a4a]" />
                        <span className="text-base">{category.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>
        </>
      )}

      {signInModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setSignInModalOpen(false)
                setAuthMode("login")
              }}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex justify-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-[#4a1a4a]">ASSO</span>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
              {authMode === "login" ? "Connecte-toi ou inscris-toi" : "Crée ton compte"}
            </h2>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-900">Continuer avec Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-900">Continuer avec Apple</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-900">Continuer avec Facebook</span>
              </button>
            </div>
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-white text-gray-500">Ou</span>
              </div>
            </div>
            <form className="space-y-3 sm:space-y-4">
              {authMode === "register" && (
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <Input id="name" type="text" placeholder="Jean Dupont" className="w-full h-10 sm:h-11 text-sm" />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  className="w-full h-10 sm:h-11 text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <Input id="password" type="password" placeholder="••••••••" className="w-full h-10 sm:h-11 text-sm" />
              </div>
              {authMode === "register" && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Confirmer le mot de passe
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-10 sm:h-11 text-sm"
                  />
                </div>
              )}
              <Button className="w-full bg-[#4a1a4a] hover:bg-[#3d1540] text-white font-semibold h-10 sm:h-11 text-sm sm:text-base">
                {authMode === "login" ? "Se connecter" : "S'inscrire"}
              </Button>
            </form>
            {authMode === "login" && (
              <div className="mt-4 sm:mt-6 text-center">
                <a href="#" className="text-xs sm:text-sm text-[#4a1a4a] hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
            )}
            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
              {authMode === "login" ? (
                <>
                  Pas encore de compte ?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setAuthMode("register")
                    }}
                    className="text-[#4a1a4a] font-medium hover:underline"
                  >
                    S'inscrire
                  </a>
                </>
              ) : (
                <>
                  Déjà un compte ?{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setAuthMode("login")
                    }}
                    className="text-[#4a1a4a] font-medium hover:underline"
                  >
                    Se connecter
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <ImageUploadDialog open={imageSearchOpen} onClose={() => setImageSearchOpen(false)} />
    </>
  )
}
