import React from "react"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-pacifico mb-4">Tsikonina</h3>
            <p className="text-gray-400">
              Apporter la cuisine malgache authentique dans les cuisines du
              monde entier.
            </p>
          </div>
          {/* <div>
            <h4 className="font-bold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Ingrédients malgaches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Conditions d&apos;utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Politique de cookies
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
