import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-pacifico mb-4">Tsikonina</h3>
            <p className="text-gray-400 mb-6">
              Apporter la cuisine malgache authentique dans les cuisines du
              monde entier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/downloads/tsikonina.apk"
                className="transition-transform hover:scale-105 duration-300"
              >
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 text-sm cursor-pointer">
                  <svg
                    className="w-5 h-5"
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
                  width={120}
                  height={36}
                  className="h-10 object-contain grayscale opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                  <span className="text-white text-xs font-medium">
                    Bientôt disponible
                  </span>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <Image
                  src="/images/app-store-badge.png"
                  alt="Bientôt sur App Store"
                  width={120}
                  height={36}
                  className="h-10 object-contain grayscale opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                  <span className="text-white text-xs font-medium">
                    Bientôt disponible
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="text-gray-400 hover:text-white"
                >
                  Aperçu
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white"
                >
                  Témoignages
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} Tsikonina. Made with ❤️ by{" "}
            <Link
              href="https://github.com/RDH36  "
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Raymond Dzery Hago
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
