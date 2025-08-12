import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-28">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Informations de contact
      </h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Adresse</h3>
            <p className="text-gray-600 mt-1">
              Antananarivo, Madagascar
              <br />
              101 Antananarivo
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Téléphone</h3>
            <p className="text-gray-600 mt-1">+261 34 54 543 47</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">raymond.dzeryhago36@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
