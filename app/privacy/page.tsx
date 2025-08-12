import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Tsikonina",
  description:
    "Politique de confidentialité de Tsikonina : informations collectées, utilisation, partage, sécurité, droits des utilisateurs et contact.",
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
          Informations collectées
        </h2>
        <p className="text-gray-700 mb-3">
          Nous collectons les informations suivantes :
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Informations de compte</span> : nom,
            adresse e-mail, mot de passe.
          </li>
          <li>
            <span className="font-medium">Informations de recette</span> :
            recettes favorites, recettes enregistrées.
          </li>
          <li>
            <span className="font-medium">Informations de navigation</span> :
            historique de navigation, recherche.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Utilisation des informations
        </h2>
        <p className="text-gray-700 mb-3">
          Nous utilisons les informations collectées pour :
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Fournir les fonctionnalités de l&#39;application.</li>
          <li>Personnaliser l&#39;expérience utilisateur.</li>
          <li>Améliorer l&#39;application et ses fonctionnalités.</li>
          <li>Envoyer des notifications et des mises à jour.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Partage des informations
        </h2>
        <p className="text-gray-700 mb-3">
          Nous partageons les informations collectées avec :
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Les services de paiement pour traiter les transactions, si cela est
            nécessaire.
          </li>
          <li>
            Les autorités compétentes en cas de nécessité, conformément à la
            loi.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Sécurité des données
        </h2>
        <p className="text-gray-700 mb-6">
          Nous prenons des mesures raisonnables pour protéger les données
          personnelles contre les accès non autorisés, la modification ou la
          destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Droits des utilisateurs
        </h2>
        <p className="text-gray-700 mb-3">Les utilisateurs ont le droit de :</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Accéder à leurs données personnelles.</li>
          <li>Modifier leurs données personnelles.</li>
          <li>Supprimer leurs données personnelles.</li>
          <li>
            Refuser la collecte de données personnelles, dans les limites
            prévues par la loi.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Modification de la politique de confidentialité
        </h2>
        <p className="text-gray-700 mb-6">
          Nous pouvons modifier cette politique de confidentialité à tout
          moment. Les modifications seront publiées sur notre site web et seront
          effectives immédiatement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Contact
        </h2>
        <p className="text-gray-700 mb-6">
          Si vous avez des questions ou des préoccupations concernant cette
          politique de confidentialité, veuillez nous contacter à{" "}
          <a
            href="mailto:mihajasoa308@gmail.com"
            className="text-primary hover:underline"
          >
            mihajasoa308@gmail.com
          </a>
          .
        </p>

        <p className="text-sm text-gray-500 mt-8">
          <span className="font-medium">Date de mise à jour :</span> Août 2025
        </p>
      </div>
    </section>
  );
}
