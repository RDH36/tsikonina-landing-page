import { Check } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Tarification Simple
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Choisissez le forfait qui vous convient le mieux
        </p>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Gratuit</h3>
            <div className="text-3xl font-bold mb-6 text-gray-800">
              0€
              <span className="text-lg text-gray-500 font-normal">/mois</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-red-700 mr-2" />
                <span>Accès aux recettes malgaches de base</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-red-700 mr-2" />
                <span>Enregistrez jusqu&apos;à 10 favoris</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-red-700 mr-2" />
                <span>Fonctionnalité de recherche basique</span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full border-red-700 text-red-700 hover:bg-red-50"
            >
              Télécharger maintenant
            </Button>
          </div>

          <div className="flex-1 bg-red-700 rounded-xl p-8 shadow-lg text-white relative">
            <div className="absolute top-0 right-0 bg-red-900 text-white text-xs font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl">
              POPULAIRE
            </div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="text-3xl font-bold mb-6">
              4,99€<span className="text-lg font-normal">/mois</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Accès à TOUTES les recettes authentiques</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Collections de recettes régionales</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Contexte culturel et historique</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Sans publicités</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Guides de substitution d&apos;ingrédients</span>
              </li>
            </ul>
            <Button className="w-full bg-white text-red-700 hover:bg-gray-100">
              Obtenir Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
