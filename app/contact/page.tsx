import ContactFAQ from "@/components/Contact/ContactFAQ";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <ContactHero />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <ContactFAQ />
    </div>
  );
}
