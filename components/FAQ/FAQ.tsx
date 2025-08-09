import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Comment installer l'application Tsikonina ?",
      answer:
        "L’application sera bientôt disponible sur Google Play et App Store. Restez informé ici : les boutons deviendront actifs dès la mise en ligne.",
    },
    {
      question: "Quelles recettes sont disponibles dans l'application ?",
      answer:
        "L'application propose une large collection de recettes authentiques malgaches, du ravitoto au romazava, en passant par le mofo gasy et bien d'autres plats traditionnels.",
    },
    {
      question: "Les recettes sont-elles utilisables hors ligne ?",
      answer:
        "Actuellement, l'application nécessite une connexion internet pour fonctionner. Nous travaillons activement sur l'implémentation d'un mode hors ligne qui sera disponible dans une prochaine mise à jour.",
    },
    {
      question: "Comment puis-je contribuer à l'application ?",
      answer:
        "Participez via l’espace communautaire : partagez vos expériences, échangez des conseils et commentez les articles. L’ajout de recettes et la notation arriveront prochainement.",
    },
    {
      question: "Y a-t-il des options de recherche avancée ?",
      answer:
        "La recherche avancée arrive bientôt. Pour l’instant, parcourez par catégories et régions et utilisez les suggestions pour trouver vos recettes.",
    },
    {
      question: "Les recettes sont-elles adaptées aux débutants ?",
      answer:
        "Tout à fait ! L'application propose des recettes pour tous les niveaux, des plus simples aux plus élaborées. Chaque recette inclut des instructions détaillées étape par étape.",
    },
    {
      question: "Puis-je noter et partager mes recettes préférées ?",
      answer:
        "Bientôt disponible : vous pourrez attribuer une note et partager vos favoris. Les commentaires sont déjà possibles via l’espace communautaire.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l&apos;application Tsikonina et la
            cuisine malgache.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-gray-50 rounded-xl p-4 shadow-sm"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
