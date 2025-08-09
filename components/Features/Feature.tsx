const features = [
  {
    title: "Espace communautaire",
    description:
      "Partagez vos expériences culinaires malgaches, commentez les articles et découvrez les idées de la communauté.",
    icon: "👥",
  },
  {
    title: "Étapes guidées",
    description:
      "Suivez des instructions claires, étape par étape, avec astuces et temps de préparation.",
    icon: "👩‍🍳",
  },
  {
    title: "Favoris",
    description:
      "Enregistrez vos recettes préférées pour y revenir en un clic, même en cuisine.",
    icon: "❤️",
  },
  {
    title: "Découvertes régionales",
    description:
      "Explorez les spécialités des différentes régions pour un voyage culinaire authentique.",
    icon: "🗺️",
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Fonctionnalités de l&apos;application Tsikonina
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Tout ce qu&apos;il faut pour cuisiner malgache au quotidien : trouvez,
          suivez, enregistrez et découvrez des recettes authentiques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-red-50 rounded-xl p-6 transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
