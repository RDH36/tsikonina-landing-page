export default function ContactFAQ() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Combien de temps pour une réponse ?
              </h3>
              <p className="text-gray-600">
                Nous répondons généralement dans les 24 heures ouvrables. Pour
                les demandes urgentes, contactez-nous par téléphone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Support technique disponible ?
              </h3>
              <p className="text-gray-600">
                Oui, notre équipe technique est disponible du lundi au vendredi
                de 8h à 18h pour vous aider avec l'application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
