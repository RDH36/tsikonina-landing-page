import { ChefHat, Heart, Users } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Testimonial() {
  const testimonials = [
    {
      name: "Ravaka M.",
      text: "J'ai hâte de redécouvrir mon héritage malgache à travers cette application. Les recettes semblent vraiment authentiques !",
      badge: "heritage",
      image: "/images/ravaka.jpg",
    },
    {
      name: "Jean-Pierre R.",
      text: "Vivant à l'étranger, la cuisine malgache me manque. Cette application pourrait m'aider à retrouver les saveurs de chez moi.",
      badge: "diaspora",
      image: "/images/rakoto.jpg",
    },
    {
      name: "Sarah L.",
      text: "Passionnée par Madagascar depuis mes voyages, j'espère pouvoir recréer ces saveurs merveilleuses chez moi grâce à Tsikonina.",
      badge: "passion",
      image: "/images/sarah.jpg",
    },
  ]
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Ce que notre communauté attend
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Découvrez les attentes de notre future communauté d&apos;amateurs de cuisine malgache
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-red-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "https://placehold.co/100x100"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  width={100}
                  height={100}
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center">
                    {testimonial.badge === "heritage" && (
                      <div className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                        <Heart className="h-3 w-3 mr-1" />
                        Héritage
                      </div>
                    )}
                    {testimonial.badge === "diaspora" && (
                      <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        Diaspora
                      </div>
                    )}
                    {testimonial.badge === "passion" && (
                      <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        <ChefHat className="h-3 w-3 mr-1" />
                        Passionné
                      </div>
                    )}
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
