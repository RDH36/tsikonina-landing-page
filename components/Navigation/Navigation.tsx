import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Fonction pour le défilement fluide
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href");
        if (id) {
          const element = document.querySelector(id);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            });
          }
        }
      }
    };

    // Détecte le défilement pour appliquer l'effet de flou
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Ajouter les écouteurs d'événements
    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);

    // Vérifier immédiatement si la page est déjà scrollée
    handleScroll();

    // Nettoyer les écouteurs d'événements
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/marmi.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-1"
          />
          <span className="text-3xl text-primary font-pacifico tracking-tighter">
            Tsikonina
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#features" className="text-gray-600 hover:text-primary">
            Fonctionnalités
          </a>
          <a href="#screenshots" className="text-gray-600 hover:text-primary">
            Aperçu
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary">
            Témoignages
          </a>
          <a href="#faq" className="text-gray-600 hover:text-primary">
            FAQ
          </a>
        </div>
        <Link
          href="#"
          className="transition-transform hover:scale-105 duration-300"
        >
          <button className="bg-primary text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-primary-dark transition-all duration-300 cursor-pointer">
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
            Télécharger
          </button>
        </Link>
      </div>
    </nav>
  );
}
