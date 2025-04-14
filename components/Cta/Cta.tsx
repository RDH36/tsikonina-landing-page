import { Download } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"

export default function Cta() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à explorer la cuisine malgache ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Téléchargez Tsikonina aujourd&apos;hui et commencez votre voyage à
          travers les riches traditions culinaires de Madagascar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-red-700 hover:bg-gray-100 h-14 px-8 text-lg">
            <Download className="mr-2 h-5 w-5" /> Télécharger pour iOS
          </Button>
          <Button className="bg-white text-red-700 hover:bg-gray-100 h-14 px-8 text-lg">
            <Download className="mr-2 h-5 w-5" /> Télécharger pour Android
          </Button>
        </div>
      </div>
    </section>
  )
}
