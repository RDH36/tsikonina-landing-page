import React from "react"

const features = [
  {
    title: "Recettes Authentiques",
    description:
      "Découvrez des recettes malgaches traditionnelles transmises de génération en génération, du Romazava au Ravitoto et Mofo Gasy.",
    icon: "🍲",
  },
  {
    title: "Variétés Régionales",
    description:
      "Explorez des plats de différentes régions de Madagascar, chacun avec ses saveurs et techniques uniques.",
    icon: "🗺️",
  },
  {
    title: "Contexte Culturel",
    description:
      "Découvrez la signification culturelle et l'histoire derrière chaque plat traditionnel malgache.",
    icon: "📚",
  },
  {
    title: "Ingrédients Locaux",
    description:
      "Découvrez les ingrédients traditionnels malgaches et apprenez à les utiliser dans votre cuisine.",
    icon: "🌿",
  },
]

export default function Feature() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Explorez l&apos;Héritage Culinaire de Madagascar
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Tsikonina apporte les saveurs authentiques de Madagascar dans votre
          cuisine avec ces fonctionnalités uniques
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-50 rounded-xl p-6 transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
