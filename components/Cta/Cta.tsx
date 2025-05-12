import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="py-16 md:py-28 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-white opacity-5"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à explorer la cuisine malgache ?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Téléchargez Tsikonina aujourd&apos;hui et commencez votre voyage à
            travers les riches traditions culinaires de Madagascar.
          </p>

          {/* Avantages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5C10.93 6.5 9.85 6.74 8.83 7.22C7.8 7.7 6.9 8.39 6.17 9.17C4.67 10.68 3.75 12.65 3.75 15C3.75 18.5 6 21.5 9 22.5V19.63C9 18.83 9.17 18.5 10 17.5L11.75 15.5C12.07 15.13 12.5 14.96 13 14.96H18C18.55 14.96 19 14.55 19 14V13C19 12.45 18.55 12 18 12H14.54C14.22 12 13.98 11.84 13.77 11.65L12.47 10.42C12.26 10.24 12 10.15 11.8 10.15H9.5C8.4 10.15 8 10.6 8 11.5V14C8 14.41 7.66 14.75 7.25 14.75C6.84 14.75 6.5 14.41 6.5 14V6.89C6.5 5.5 7.31 5.5 8 5.5H13.1C13.96 5.5 14.08 5.71 14.5 6.5L15 7.5C15.24 7.98 15.76 8 16 8H20C20.55 8 21 8.45 21 9V10C21 10.55 20.55 11 20 11H18C17.45 11 17 10.55 17 10C17 9.45 17.45 9 18 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Recettes authentiques</h3>
              <p className="opacity-80 text-sm text-center">
                Découvrez des recettes malgaches authentiques transmises de
                génération en génération.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Guide culturel</h3>
              <p className="opacity-80 text-sm text-center">
                Explorez l&apos;histoire et la culture derrière chaque plat pour
                une expérience complète.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Nouvelles recettes</h3>
              <p className="opacity-80 text-sm text-center">
                Ajouts réguliers de nouvelles recettes et contenus pour enrichir
                votre répertoire culinaire.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Notez vos recettes préférées
              </h3>
              <p className="opacity-80 text-sm text-center">
                Bientôt disponible : évaluez et partagez vos plats favoris avec
                la communauté.
              </p>
            </div>
          </div>

          {/* Avis et badges */}
          <div className="flex flex-col items-center">
            <div className="flex items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-8">
              <div className="flex" aria-label="Étoiles">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 4
                        ? "fill-amber-300 text-amber-300"
                        : "fill-white/30 text-white/30"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium">
                4.8/5 •{" "}
                <span className="font-normal">+5000 téléchargements</span>
              </span>
            </div>

            {/* Boutons de téléchargement */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/downloads/tsikonina.apk"
                className="transition-transform hover:scale-105 duration-300 cursor-pointer"
              >
                <button className="bg-white text-primary py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg cursor-pointer">
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
                </button>
              </Link>
              <div className="relative group cursor-pointer">
                <Image
                  src="/images/google-play-badge.png"
                  alt="Bientôt sur Google Play"
                  width={180}
                  height={53}
                  className="h-14 object-contain grayscale opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                  <span className="text-white text-sm font-medium">
                    Bientôt disponible
                  </span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <Image
                  src="/images/app-store-badge.png"
                  alt="Bientôt sur App Store"
                  width={180}
                  height={53}
                  className="h-14 object-contain grayscale opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                  <span className="text-white text-sm font-medium">
                    Bientôt disponible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
