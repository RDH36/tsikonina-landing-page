import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";

interface SupportHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SupportHero({ searchQuery, setSearchQuery }: SupportHeroProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Centre d'aide Tsikonina
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Trouvez rapidement les réponses à vos questions ou contactez notre équipe de support
            </p>
            <div className="flex items-center justify-center text-sm">
              <span>Accueil</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-blue-200">Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans la base de connaissances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
