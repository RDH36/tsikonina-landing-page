import { Star } from "lucide-react"
import { ChevronRight } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"
import { Download } from "lucide-react"
import MobileFrame from "../mobile-frame"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          La Cuisine <span className="text-red-700">Malgache</span> Authentique
          dans Votre Poche
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez les saveurs riches et les traditions de Madagascar avec
          notre collection de recettes authentiques, techniques de cuisine et
          contextes culturels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-red-700 hover:bg-red-800 text-lg h-12 px-6">
            Télécharger <Download className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-red-700 text-red-700 hover:bg-red-50 text-lg h-12 px-6"
          >
            En savoir plus <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">
            <span className="font-bold">4.8</span> • 5k+ Avis
          </span>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-200 rounded-full opacity-60 z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full opacity-60 z-0"></div>
          <div className="relative z-10">
            <MobileFrame>
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Application Tsikonina"
                className="w-full h-full object-cover"
              />
            </MobileFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
