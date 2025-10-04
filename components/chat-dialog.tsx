"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, X, ImageIcon, Paperclip } from "lucide-react"
import { useState } from "react"

interface ChatDialogProps {
  isOpen: boolean
  onClose: () => void
  item: {
    id: number
    title: string
    price: string
    image: string
  }
  sellerName: string
}

export function ChatDialog({ isOpen, onClose, item, sellerName }: ChatDialogProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seller",
      text: `Bonjour! Je suis disponible pour répondre à vos questions sur ${item.title}.`,
      time: "10:30",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate seller response
      setTimeout(() => {
        const sellerResponse = {
          id: messages.length + 2,
          sender: "seller",
          text: "Merci pour votre message! Je vous réponds dans quelques instants.",
          time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, sellerResponse])
      }, 1500)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl h-[85vh] sm:h-[80vh] max-h-[700px] p-0 gap-0 flex flex-col">
        {/* Header */}
        <DialogHeader className="border-b px-3 sm:px-4 py-2.5 sm:py-3 bg-[#4a1a4a] text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white flex-shrink-0">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-white text-[#4a1a4a] text-sm">{sellerName[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <DialogTitle className="text-white text-sm sm:text-base truncate">{sellerName}</DialogTitle>
                <p className="text-xs text-white/80">En ligne</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </DialogHeader>

        {/* Product Info */}
        <div className="border-b px-3 sm:px-4 py-2 sm:py-3 bg-[#f8f4e3] flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded border flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{item.title}</p>
              <p className="text-xs sm:text-sm font-semibold text-[#4a1a4a]">{item.price}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex gap-2 max-w-[85%] sm:max-w-[70%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.sender === "seller" && (
                  <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="bg-[#4a1a4a] text-white text-xs">{sellerName[0]}</AvatarFallback>
                  </Avatar>
                )}
                <div className="min-w-0 flex-1">
                  <div
                    className={`rounded-2xl px-3 sm:px-4 py-2 ${
                      msg.sender === "user"
                        ? "bg-[#4a1a4a] text-white rounded-br-sm"
                        : "bg-white border border-gray-200 text-gray-900 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-xs sm:text-sm break-words">{msg.text}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-3 sm:p-4 bg-white flex-shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-[#4a1a4a] flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
            >
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-[#4a1a4a] flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
            >
              <Paperclip className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Tapez votre message..."
              className="flex-1 border-gray-300 focus:border-[#4a1a4a] focus:ring-[#4a1a4a] text-sm h-9 sm:h-10"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-[#4a1a4a] hover:bg-[#6b2a6b] text-white flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 p-0"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
