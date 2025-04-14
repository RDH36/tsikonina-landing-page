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
          La Cuisine{" "}
          <span className="text-primary font-pacifico">Malagasy</span>{" "}
          Authentique dans Votre Poche
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez les saveurs riches et les traditions de Madagascar avec
          notre collection de recettes authentiques, techniques de cuisine et
          contextes culturels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary hover:bg-primary-dark text-lg h-12 px-6 cursor-pointer">
            <Download className="ml-2 h-5 w-5" /> Télécharger
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary-light/10 hover:text-primary-dark text-lg h-12 px-6 cursor-pointer"
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
        <div className="relative w-full max-w-[400px]">
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-40 z-0 blur-2xl"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary rounded-full opacity-40 z-0 blur-2xl"></div>
          <div className="absolute -left-12 top-16 z-20 animate-float-dish-left">
            <div>
              <Image
                src="/images/ravitoto.png"
                alt="Romazava - Plat traditionnel malgache"
                width={160}
                height={100}
                className="rounded-full shadow-lg"
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div
            className="absolute -right-12 bottom-32 z-20 animate-float-dish-right"
            style={{ animationDelay: "2s" }}
          >
            <div>
              <Image
                src="/images/ravitoto.png"
                alt="Ravitoto - Plat traditionnel malgache"
                width={140}
                height={100}
                className="rounded-full shadow-lg"
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <div className="relative z-10 animate-float">
            <MobileFrame>
              <Image
                src="https://placehold.co/400x600"
                alt="Application Tsikonina"
                className="w-full h-full object-cover"
                width={400}
                height={600}
              />
            </MobileFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
