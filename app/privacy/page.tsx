import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Tsikonina : identité, conditions d’utilisation, informations, propriété intellectuelle, liens, confidentialité et contact.",
  alternates: {
    canonical: "https://tsikonina.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-white mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Accueil
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="text-gray-600 font-medium">
              Politique de confidentialité
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Politique de confidentialité de « Tsikonina »
        </h1>
        <p className="text-gray-700 mb-6">
          Tsikonina est une application qui permet aux utilisateurs de découvrir
          les spécialités culinaires de Madagascar. Nous sommes engagés à
          protéger la confidentialité de nos utilisateurs et à garantir la
          sécurité de leurs données personnelles.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Identité
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Nom du site web/application</span> :
            Tsikonina
          </li>
          <li>
            <span className="font-medium">Adresse</span> :{" "}
            <a
              href="https://tsikonina.com"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.tsikonina.com
            </a>
          </li>
          <li>
            <span className="font-medium">Hébergement</span> : Vercel Inc, 650
            California St, San Francisco, CA 94108, US
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Conditions d’utilisation
        </h2>
        <p className="text-gray-700 mb-6">
          En accédant et en utilisant ce site, vous acceptez pleinement les
          conditions générales d’utilisation qui sont décrites ci-dessous. Ces
          conditions peuvent être mises à jour ou complétées à tout moment, et
          il est de votre responsabilité de les consulter régulièrement pour
          être informé des éventuelles modifications.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Informations
        </h2>
        <p className="text-gray-700 mb-6">
          Les informations et documents disponibles sur ce site sont fournis
          uniquement à des fins d&apos;information. Nous ne garantissons pas
          leur exhaustivité et nous déclinons toute responsabilité pour les
          dommages directs ou indirects qui pourraient résulter de l&apos;accès
          ou de l&apos;utilisation de ces informations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-700 mb-6">
          Tous les contenus du site, y compris les textes, sont protégés par des
          droits de propriété intellectuelle et restent la propriété exclusive
          de leurs auteurs respectifs, sauf mention contraire. Toute
          utilisation, reproduction, modification ou publication de ces éléments
          sans autorisation écrite préalable de l’auteur est strictement
          interdite et peut constituer une contrefaçon.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Liens
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Liens sortants
        </h3>
        <p className="text-gray-700 mb-4">
          Nous ne sommes pas responsables des contenus des sites tiers auxquels
          nos liens hypertextes donnent accès.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Liens entrants
        </h3>
        <p className="text-gray-700 mb-6">
          Les liens vers notre site sont autorisés à condition d&apos;ouvrir une
          nouvelle fenêtre et d&apos;être présentés de manière claire et
          transparente pour éviter toute confusion. Nous nous réservons le droit
          de demander la suppression de tout lien qui ne respecte pas ces
          conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Confidentialité
        </h2>
        <p className="text-gray-700 mb-6">
          Vous avez le droit d&apos;accéder à vos données personnelles, de les
          corriger et de vous opposer à leur traitement. Les informations que
          nous collectons sont utilisées pour fournir les fonctionnalités de
          l&apos;application, personnaliser votre expérience utilisateur,
          améliorer l&apos;application et ses fonctionnalités, ainsi que pour
          vous envoyer des notifications et des mises à jour pertinentes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Contact
        </h2>
        <p className="text-gray-700 mb-6">
          Si vous avez des questions ou des préoccupations concernant cette
          politique de confidentialité, veuillez nous contacter{" "}
          <Link
            href="www.tsikonina.com/contact"
            className="text-primary hover:underline"
          >
            page contact
          </Link>
          .
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <span className="font-medium">Date de mise à jour :</span> Août 2025
        </p>
      </div>
    </section>
  );
}
