import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ravaka M.",
      text: "Tsikonina m'a aidé à renouer avec mon héritage malgache à travers la cuisine. Les recettes sont vraiment authentiques !",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jean-Pierre R.",
      text: "Vivant à l'étranger, la cuisine malgache me manquait. Cette application apporte les saveurs de chez moi dans ma cuisine avec des instructions faciles.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah L.",
      text: "Je suis tombée amoureuse de Madagascar lors de mes voyages. Tsikonina m'aide à recréer ces saveurs merveilleuses chez moi.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Ce que disent nos utilisateurs
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Rejoignez notre communauté d&apos;amateurs de cuisine malgache du
          monde entier
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-red-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
