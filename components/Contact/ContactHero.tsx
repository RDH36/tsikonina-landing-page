import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <div className="pt-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Contactez-nous
          </h1>
          <p className="text-md md:text-lg text-gray-600 mb-8">
            Nous sommes là pour vous aider avec toutes vos questions sur
            Tsikonina
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="text-primary">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}
