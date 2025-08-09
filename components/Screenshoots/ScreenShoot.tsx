import Image from "next/image";
import { useState } from "react";
import MobileFrame from "../mobile-frame";

export default function ScreenShoot() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const screenshots = [
    {
      title: "Écran d'accueil",
      description:
        "Vue principale de l'application Tsikonina avec les catégories de recettes.",
      image:
        "/images/screenshoots/Screenshot_2025-08-09-11-53-03-663_com.rdh36.reciperecettemalagasy.jpg",
    },
    {
      title: "Parcourir les recettes",
      description:
        "Parcourez les recettes et trouvez l'inspiration facilement.",
      image:
        "/images/screenshoots/Screenshot_2025-08-09-11-55-04-526_com.rdh36.reciperecettemalagasy.jpg",
    },
    {
      title: "Détail d'une recette",
      description: "Informations complètes sur la recette avec visuels.",
      image:
        "/images/screenshoots/Screenshot_2025-08-09-11-53-16-876_com.rdh36.reciperecettemalagasy.jpg",
    },
    {
      title: "Vos favoris",
      description: "Liste des recettes que vous avez ajoutées.",
      image:
        "/images/screenshoots/Screenshot_2025-08-09-11-54-08-774_com.rdh36.reciperecettemalagasy.jpg",
    },
    {
      title: "Communauté",
      description: "Partagez vos expériences et commentez les articles.",
      image:
        "/images/screenshoots/Screenshot_2025-08-09-11-54-01-439_com.rdh36.reciperecettemalagasy.jpg",
    },
  ];
  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Aperçu de l&apos;Application
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Découvrez comment Tsikonina donne vie à la cuisine malgache
        </p>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <MobileFrame>
              <Image
                src={
                  screenshots[activeScreenshot].image ||
                  "/images/screenshoots/Screenshot_2025-08-09-11-53-03-663_com.rdh36.reciperecettemalagasy.jpg"
                }
                alt={screenshots[activeScreenshot].title}
                className="w-full h-full object-cover"
                width={400}
                height={600}
              />
            </MobileFrame>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="space-y-8">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeScreenshot === index
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "bg-white hover:bg-primary/10"
                  }`}
                  onClick={() => setActiveScreenshot(index)}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
