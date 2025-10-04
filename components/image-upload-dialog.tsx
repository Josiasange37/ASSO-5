"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, Upload, Camera, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageUploadDialogProps {
  open: boolean
  onClose: () => void
}

export function ImageUploadDialog({ open, onClose }: ImageUploadDialogProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!open) return null

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleSearch = () => {
    console.log("[v0] Searching for similar items with image:", uploadedImage)
    // This would typically send the image to a backend API for visual search
    onClose()
  }

  const handleReset = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-[150] flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors z-10 bg-white"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
        </button>

        <div className="mb-4 sm:mb-5 md:mb-6 pr-8 sm:pr-10 clear-right">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
              <Camera className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#4a1a4a]" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Téléchargez votre article</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Téléchargez votre article et trouvez un acheteur potentiel
          </p>
        </div>

        {!uploadedImage ? (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-xl p-6 sm:p-8 md:p-10 text-center transition-all ${
              isDragging ? "border-[#4a1a4a] bg-purple-50 scale-[1.02]" : "border-gray-300 bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              <div className="p-3 sm:p-4 bg-white rounded-full shadow-md">
                <Upload className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#4a1a4a]" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Glissez-déposez votre image ici</p>
                <p className="text-xs sm:text-sm text-gray-500">ou</p>
              </div>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#4a1a4a] hover:bg-[#3d1540] text-white px-6 sm:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base font-medium"
              >
                Parcourir les fichiers
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">PNG, JPG, JPEG jusqu'à 10MB</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200">
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded preview"
                className="w-full h-40 sm:h-52 md:h-64 object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1 border-2 border-gray-300 bg-white hover:bg-gray-50 py-3 sm:py-4 md:py-5 text-sm sm:text-base font-medium"
              >
                Changer l'image
              </Button>
              <Button
                onClick={handleSearch}
                className="flex-1 bg-[#4a1a4a] hover:bg-[#3d1540] text-white py-3 sm:py-4 md:py-5 text-sm sm:text-base font-medium"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Publier l'article
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
          <p className="text-xs sm:text-sm font-semibold text-[#4a1a4a] mb-2 flex items-center gap-2">
            <span className="text-base sm:text-lg">💡</span>
            Conseils pour de meilleurs résultats
          </p>
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1 sm:space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-[#4a1a4a] font-bold">•</span>
              <span>Utilisez des images claires et bien éclairées</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4a1a4a] font-bold">•</span>
              <span>Centrez l'article dans la photo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4a1a4a] font-bold">•</span>
              <span>Évitez les arrière-plans encombrés</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
