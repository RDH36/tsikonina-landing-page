import React from "react"
import { Button } from "../ui/button"
import { UtensilsCrossed } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <UtensilsCrossed className="w-8 h-8 text-primary mr-2" />
        <span className="text-3xl text-primary font-pacifico tracking-tighter">
          Tsikonina
        </span>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#features" className="text-gray-600 hover:text-primary">
          Fonctionnalités
        </a>
        <a href="#screenshots" className="text-gray-600 hover:text-primary">
          Aperçu
        </a>
        <a href="#testimonials" className="text-gray-600 hover:text-primary">
          Témoignages
        </a>
      </div>
      <Button className="bg-primary hover:bg-primary/80">Télécharger</Button>
    </nav>
  )
}
