import React from "react"
import { Button } from "../ui/button"

export default function Navigation() {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-red-700">Tsikonina</span>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#features" className="text-gray-600 hover:text-red-700">
          Fonctionnalités
        </a>
        <a href="#screenshots" className="text-gray-600 hover:text-red-700">
          Aperçu
        </a>
        <a href="#testimonials" className="text-gray-600 hover:text-red-700">
          Témoignages
        </a>
      </div>
      <Button className="bg-red-700 hover:bg-red-800">Télécharger</Button>
    </nav>
  )
}
