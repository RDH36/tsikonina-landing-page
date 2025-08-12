import { AlertTriangle, Clock, Mail, Wrench } from "lucide-react";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-100 p-6 rounded-full">
            <Wrench className="w-16 h-16 text-yellow-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Site en Développement
        </h1>

        {/* Description */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-800">
              Pré-Production
            </span>
          </div>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Nous travaillons actuellement sur l&apos;application <strong>Tsikonina</strong>, 
            votre future compagne pour découvrir la richesse de la cuisine malgache authentique.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">En cours de développement</h3>
                <p className="text-gray-600 text-sm">
                  Nous peaufinons chaque détail pour vous offrir la meilleure expérience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Restez informé</h3>
                <p className="text-gray-600 text-sm">
                  Inscrivez-vous à notre newsletter pour être averti du lancement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Découvrir Tsikonina
          </Link>
          
          <p className="text-gray-500 text-sm">
            Ou contactez-nous à{" "}
            <a 
              href="mailto:contact@tsikonina.com" 
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              contact@tsikonina.com
            </a>
          </p>
        </div>

        {/* Warning */}
        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            ⚠️ Ce site est en phase de développement et ne doit pas être référencé par les moteurs de recherche.
          </p>
        </div>
      </div>
    </div>
  );
}
