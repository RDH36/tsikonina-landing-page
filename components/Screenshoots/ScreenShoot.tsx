import React, { useState } from "react"
import MobileFrame from "../mobile-frame"
import Image from "next/image"

export default function ScreenShoot() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const screenshots = [
    {
      title: "Découvrir la Cuisine Malgache",
      description:
        "Explorez des recettes authentiques de toutes les régions de Madagascar",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Méthodes de Cuisson Traditionnelles",
      description:
        "Apprenez les techniques authentiques avec des guides pas à pas",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Contexte Culturel",
      description:
        "Comprenez l'histoire et la signification derrière chaque plat",
      image: "/placeholder.svg?height=600&width=300",
    },
  ]
  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Aperçu de l&apos;Application
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Découvrez comment Tsikonina donne vie à la cuisine malgache
        </p>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <MobileFrame>
              <Image
                src={screenshots[activeScreenshot].image || "/placeholder.svg"}
                alt={screenshots[activeScreenshot].title}
                className="w-full h-full object-cover"
              />
            </MobileFrame>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="space-y-8">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeScreenshot === index
                      ? "bg-red-100 border-l-4 border-red-700"
                      : "bg-white hover:bg-red-50"
                  }`}
                  onClick={() => setActiveScreenshot(index)}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
