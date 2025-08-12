"use client";
import { useState } from "react";
import { 
  ChevronRight, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail,
  HelpCircle,
  FileText,
  Video,
  Clock,
  CheckCircle
} from "lucide-react";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    category: "",
    description: "",
  });

  const supportCategories = [
    { id: "all", name: "Toutes les catégories", count: 45 },
    { id: "account", name: "Compte utilisateur", count: 12 },
    { id: "recipes", name: "Recettes et contenu", count: 8 },
    { id: "technical", name: "Problèmes techniques", count: 15 },
    { id: "billing", name: "Facturation", count: 6 },
    { id: "features", name: "Fonctionnalités", count: 4 },
  ];

  const faqItems = [
    {
      category: "account",
      question: "Comment créer un compte Tsikonina ?",
      answer: "Téléchargez l&apos;application depuis l&apos;App Store ou Google Play, puis suivez les instructions d&apos;inscription. Vous pouvez vous inscrire avec votre email ou vos comptes sociaux.",
    },
    {
      category: "account",
      question: "J&apos;ai oublié mon mot de passe, que faire ?",
      answer: "Utilisez l&apos;option &apos;Mot de passe oublié&apos; sur l&apos;écran de connexion. Vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.",
    },
    {
      category: "recipes",
      question: "Comment ajouter mes propres recettes ?",
      answer: "Dans l&apos;application, allez dans &apos;Mes Recettes&apos; puis appuyez sur le bouton &apos;+&apos;. Vous pouvez ajouter des photos, ingrédients et étapes de préparation.",
    },
    {
      category: "technical",
      question: "L&apos;application se ferme de manière inattendue",
      answer: "Assurez-vous d&apos;avoir la dernière version de l&apos;application. Si le problème persiste, redémarrez votre appareil et contactez notre support technique.",
    },
    {
      category: "billing",
      question: "Comment annuler mon abonnement premium ?",
      answer: "Vous pouvez annuler votre abonnement dans les paramètres de votre compte, section &apos;Abonnement&apos;. L&apos;annulation prendra effet à la fin de la période de facturation actuelle.",
    },
    {
      category: "features",
      question: "Comment utiliser la fonction de planification de repas ?",
      answer: "Allez dans l&apos;onglet &apos;Planificateur&apos;, sélectionnez les dates et choisissez vos recettes. L&apos;application générera automatiquement votre liste de courses.",
    },
  ];

  const filteredFAQ = selectedCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const searchFilteredFAQ = filteredFAQ.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de ticket
    alert("Votre ticket de support a été créé avec succès ! Vous recevrez une confirmation par email.");
    setTicketForm({
      name: "",
      email: "",
      subject: "",
      priority: "medium",
      category: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Centre d&apos;aide Tsikonina
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

      {/* Options de contact rapide */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Chat en direct</h3>
            <p className="text-gray-600 mb-4">Obtenez une aide immédiate de notre équipe</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Démarrer le chat
            </button>
            <p className="text-sm text-gray-500 mt-2">Disponible 9h-18h</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support téléphonique</h3>
            <p className="text-gray-600 mb-4">Appelez-nous pour un support personnalisé</p>
            <a href="tel:+261341234567" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              +261 34 12 345 67
            </a>
            <p className="text-sm text-gray-500 mt-2">Lun-Ven 8h-18h</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email support</h3>
            <p className="text-gray-600 mb-4">Envoyez-nous vos questions détaillées</p>
            <a href="mailto:support@tsikonina.mg" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-block">
              Envoyer un email
            </a>
            <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar avec catégories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Ressources utiles</h4>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <FileText className="w-5 h-5 mr-3" />
                    Guide d&apos;utilisation
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Video className="w-5 h-5 mr-3" />
                    Tutoriels vidéo
                  </a>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <HelpCircle className="w-5 h-5 mr-3" />
                    FAQ complète
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Questions fréquemment posées
              </h2>
              
              {searchFilteredFAQ.length === 0 ? (
                <div className="text-center py-8">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Aucune question trouvée pour votre recherche.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {searchFilteredFAQ.map((item, index) => (
                    <details key={index} className="border border-gray-200 rounded-lg">
                      <summary className="cursor-pointer p-4 hover:bg-gray-50 font-medium text-gray-900">
                        {item.question}
                      </summary>
                      <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>

            {/* Formulaire de ticket */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Créer un ticket de support
              </h2>
              <p className="text-gray-600 mb-6">
                Vous n&apos;avez pas trouvé la réponse à votre question ? Créez un ticket de support et notre équipe vous aidera.
              </p>

              <form onSubmit={handleTicketSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={ticketForm.name}
                      onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={ticketForm.email}
                      onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Résumé de votre problème"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      Priorité
                    </label>
                    <select
                      id="priority"
                      value={ticketForm.priority}
                      onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Faible</option>
                      <option value="medium">Moyenne</option>
                      <option value="high">Élevée</option>
                      <option value="urgent">Urgente</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie *
                    </label>
                    <select
                      id="category"
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      <option value="account">Compte utilisateur</option>
                      <option value="recipes">Recettes et contenu</option>
                      <option value="technical">Problèmes techniques</option>
                      <option value="billing">Facturation</option>
                      <option value="features">Fonctionnalités</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description détaillée *
                  </label>
                  <textarea
                    id="description"
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre problème en détail. Incluez les étapes pour reproduire le problème, les messages d&apos;erreur, etc."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-blue-800">Temps de réponse estimé</h4>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Faible/Moyenne: 24-48 heures</li>
                          <li>Élevée: 12-24 heures</li>
                          <li>Urgente: 2-4 heures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Créer le ticket de support
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section statut du service */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Statut du service
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Application mobile</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-700">Opérationnel</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Tous les services fonctionnent normalement</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">API & Serveurs</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-700">Opérationnel</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Temps de réponse optimal</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Synchronisation</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm text-yellow-700">Maintenance</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Maintenance programmée jusqu&apos;à 16h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
