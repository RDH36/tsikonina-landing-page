import Image from "next/image";
import Link from "next/link";

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
                <Link
                  href="/#features"
                  className="text-gray-400 hover:text-white"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="/#screenshots"
                  className="text-gray-400 hover:text-white"
                >
                  Aperçu
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-gray-400 hover:text-white"
                >
                  Témoignages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} Tsikonina. Made with ❤️ by{" "}
            <Link
              href="https://github.com/RDH36"
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
  );
}
