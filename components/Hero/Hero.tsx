import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileFrame from "../mobile-frame"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      aria-label="Section principale"
    >
      {/* Arrière-plan de la section Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF8E1]/50 to-[#FFF8E1] -z-10"></div>

      {/* Éléments décoratifs d'arrière-plan */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary rounded-full opacity-20 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-40 right-1/4 w-6 h-6 bg-primary rounded-full animate-ping opacity-70 hidden md:block"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-4 h-4 bg-secondary rounded-full animate-ping opacity-70 hidden md:block"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center py-20">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <span className="inline-block px-4 py-1 bg-amber-100 text-primary rounded-full mb-4 font-medium text-sm animate-pulse">
            🍲 Nouvelle Application de Cuisine
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            La Cuisine{" "}
            <span className="text-primary font-pacifico relative">
              Malagasy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,5 Q40,0 80,5 T160,5 T240,5"
                  fill="none"
                  stroke="#FF9800"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Authentique dans Votre Poche
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez les saveurs riches et les traditions de Madagascar avec
            notre collection de recettes authentiques, techniques de cuisine et
            contextes culturels.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            role="group"
            aria-label="Actions principales"
          >
            {/* Store badges */}
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/downloads/tsikonina.apk"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 3H6.5C5.4 3 4.5 3.9 4.5 5V19C4.5 20.1 5.4 21 6.5 21H17.5C18.6 21 19.5 20.1 19.5 19V5C19.5 3.9 18.6 3 17.5 3ZM12 19.5C11.17 19.5 10.5 18.83 10.5 18C10.5 17.17 11.17 16.5 12 16.5C12.83 16.5 13.5 17.17 13.5 18C13.5 18.83 12.83 19.5 12 19.5ZM17 15.5H7V5.5H17V15.5Z"
                    fill="currentColor"
                  />
                </svg>
                Télécharger APK
              </Link>
              <div className="relative group cursor-pointer">
                <Image
                  src="/images/google-play-badge.png"
                  alt="Bientôt sur Google Play"
                  width={160}
                  height={60}
                  className="h-14 object-contain grayscale opacity-70 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                  <span className="text-white text-sm font-medium">
                    Bientôt disponible
                  </span>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-10 left-0 right-0 mx-auto w-48 p-2 bg-black/80 text-white text-xs rounded text-center">
                  Application en cours d&apos;approbation sur le Google Play
                  Store
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <Image
                  src="/images/app-store-badge.png"
                  alt="Bientôt sur App Store"
                  width={160}
                  height={60}
                  className="h-14 object-contain grayscale opacity-70 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                  <span className="text-white text-sm font-medium">
                    Bientôt disponible
                  </span>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-10 left-0 right-0 mx-auto w-48 p-2 bg-black/80 text-white text-xs rounded text-center">
                  Application en cours de développement pour iOS
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm w-fit"
            role="complementary"
            aria-label="Évaluation des utilisateurs"
          >
            <div className="flex" aria-label="Note de 4.8 sur 5 étoiles">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= 4
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
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
        <div className="md:w-1/2 flex justify-center z-10" role="presentation">
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
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
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
              className="absolute -right-12 bottom-32 z-20 animate-float-dish-right"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
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
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
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
              className="relative z-10 animate-float transform hover:scale-105 transition-transform duration-300 cursor-pointer"
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
      </div>

      {/* Vague de séparation */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
