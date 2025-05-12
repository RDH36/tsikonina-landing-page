import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Comment installer l'application Tsikonina ?",
      answer:
        "Téléchargez simplement le fichier APK depuis notre site et installez-le sur votre appareil Android. Vous pouvez également attendre nos versions à venir sur Google Play et App Store.",
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
        "Actuellement, les utilisateurs ne peuvent pas ajouter leurs propres recettes. Cependant, vous pouvez contribuer en notant les recettes existantes et en laissant des commentaires pour partager vos astuces ou suggestions. Vos retours nous aident à améliorer l'application et à enrichir l'expérience de tous les utilisateurs.",
    },
    {
      question: "Y a-t-il des options de recherche avancée ?",
      answer:
        "Oui, l'application dispose de filtres permettant de rechercher des recettes par ingrédients, temps de préparation, niveau de difficulté et région d'origine à Madagascar.",
    },
    {
      question: "Les recettes sont-elles adaptées aux débutants ?",
      answer:
        "Tout à fait ! L'application propose des recettes pour tous les niveaux, des plus simples aux plus élaborées. Chaque recette inclut des instructions détaillées étape par étape.",
    },
    {
      question: "Puis-je noter et partager mes recettes préférées ?",
      answer:
        "Cette fonctionnalité est en cours de développement ! Vous pourrez bientôt attribuer une note aux recettes que vous avez essayées et partager vos favoris avec la communauté. Nous prévoyons également d'introduire un système de commentaires pour échanger des astuces et variantes.",
    },
  ]

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
  )
}
