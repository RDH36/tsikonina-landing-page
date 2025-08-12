"use client";

import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Veuillez entrer une adresse email valide");
      return;
    }

    setStatus("loading");

    // Simuler un appel API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage(
        "Merci ! Vous serez notifié dès le lancement de l'application."
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 font-medium text-sm">
              📧 Restez informé
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Soyez les premiers informés du lancement !
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Inscrivez-vous à notre newsletter pour recevoir des mises à jour
              exclusives, des recettes en avant-première et être notifié dès que
              Tsikonina sera disponible.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 rounded-full p-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    disabled={status === "loading"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Inscription...
                    </div>
                  ) : status === "success" ? (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Inscrit !
                    </div>
                  ) : (
                    "S'inscrire"
                  )}
                </button>
              </div>

              {/* Status Message */}
              {message && (
                <div
                  className={`flex items-center justify-center p-3 rounded-lg ${
                    status === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  ) : (
                    <AlertCircle className="h-4 w-4 mr-2" />
                  )}
                  <span className="text-sm">{message}</span>
                </div>
              )}
            </form>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                2000+
              </div>
              <div className="text-gray-600">Personnes intéressées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-gray-600">Recettes prêtes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Bientôt
              </div>
              <div className="text-gray-600">Lancement prévu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
