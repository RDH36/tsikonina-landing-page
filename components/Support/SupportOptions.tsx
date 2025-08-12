import { MessageCircle, Phone, Mail } from "lucide-react";

export default function SupportOptions() {
  return (
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
    </div>
  );
}
