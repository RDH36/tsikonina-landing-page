import { ChevronRight, Download, Star } from "lucide-react";
import Image from "next/image";
import MobileFrame from "../mobile-frame";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center"
      aria-label="Section principale"
    >
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
        <div
          className="flex flex-col sm:flex-row gap-4"
          role="group"
          aria-label="Actions principales"
        >
          <Button
            className="bg-primary hover:bg-primary-dark text-lg h-12 px-6 cursor-pointer"
            aria-label="Télécharger l'application"
          >
            <Download className="ml-2 h-5 w-5" aria-hidden="true" />
            <span>Télécharger</span>
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary-light/10 hover:text-primary-dark text-lg h-12 px-6 cursor-pointer"
            aria-label="En savoir plus sur l'application"
          >
            <span>En savoir plus</span>
            <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <div
          className="flex items-center mt-8"
          role="complementary"
          aria-label="Évaluation des utilisateurs"
        >
          <div className="flex" aria-label="Note de 4.8 sur 5 étoiles">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">
            <span className="font-bold">4.8</span> •{" "}
            <span aria-label="Plus de 5000 avis">5k+ Avis</span>
          </span>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center" role="presentation">
        <div className="relative w-full max-w-[400px]">
          <div
            className="absolute -top-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-40 z-0 blur-2xl"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary rounded-full opacity-40 z-0 blur-2xl"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -left-12 top-16 z-20 animate-float-dish-left"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/ravitoto.png"
                alt="Ravitoto - Plat traditionnel malgache à base de feuilles de manioc pilées"
                width={160}
                height={120}
                className="rounded-full"
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
                priority
              />
            </div>
          </div>
          <div
            className="absolute -right-12 bottom-40 z-20 animate-float-dish-right"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/romazava.png"
                alt="Romazava - Bouillon traditionnel malgache aux brèdes et viande"
                width={140}
                height={120}
                className="rounded-full"
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
                priority
              />
            </div>
          </div>
          <div
            className="absolute -left-12 bottom-20 z-20 animate-float-dish-right"
            style={{ animationDelay: "2.5s" }}
          >
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/mofo.png"
                alt="Mofo gasy - Recette de cuisine malgache traditionnelle"
                width={140}
                height={120}
                className="rounded-full"
                style={{
                  objectFit: "cover",
                  backgroundColor: "transparent",
                }}
                priority
              />
            </div>
          </div>
          <div
            className="relative z-10 animate-float transform hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <MobileFrame>
              <Image
                src="/images/bg.png"
                alt="Interface de l'application Tsikonina montrant une recette de cuisine malgache"
                className="w-full h-full object-cover"
                width={400}
                height={600}
                priority
              />
            </MobileFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
