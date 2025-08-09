import Image from "next/image"
import React from "react"

export default function PopularDishes() {
  return (
    <section className="py-16 md:py-24 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Recettes phares dans l&apos;app
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Un aperçu de plats traditionnels que vous pouvez découvrir et cuisiner
          avec Tsikonina.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-64 overflow-hidden">
              <Image
                src="/images/romazava.jpg"
                alt="Romazava"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Romazava</h3>
              <p className="text-gray-600 mb-4">
                Le plat national de Madagascar, un ragoût de bœuf savoureux avec
                des brèdes et des épices aromatiques.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">60 min</span>
                <span>Difficulté moyenne</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-64 overflow-hidden">
              <Image
                src="/images/ravitoto.jpg"
                alt="Ravitoto"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Ravitoto</h3>
              <p className="text-gray-600 mb-4">
                Un plat traditionnel à base de feuilles de manioc pilées et de
                porc, riche en saveur et en texture.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">90 min</span>
                <span>Difficulté moyenne</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-64 overflow-hidden">
              <Image
                src="/images/mofoGasy.jpg"
                alt="Mofo Gasy"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Mofo Gasy
              </h3>
              <p className="text-gray-600 mb-4">
                Crêpes traditionnelles malgaches à base de farine de riz,
                souvent dégustées au petit-déjeuner ou comme collation.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">30 min</span>
                <span>Facile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
