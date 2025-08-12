import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// Templates d'emails
export const emailTemplates = {
  welcomeNewsletter: {
    subject: "🎉 Bienvenue dans la communauté Tsikonina !",
    html: (email: string) => `
      <div style="font-family: 'Roboto', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; font-size: 28px; margin-bottom: 10px;">Bienvenue chez Tsikonina ! 🍽️</h1>
          <p style="color: #6b7280; font-size: 16px;">Merci de vous être inscrit à notre newsletter</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
          <h2 style="color: #9a3412; margin-bottom: 15px;">Que pouvez-vous attendre ?</h2>
          <ul style="color: #9a3412; line-height: 1.6;">
            <li>🍳 Des recettes exclusives de cuisine malgache</li>
            <li>📱 Les dernières nouvelles sur le développement de l'app</li>
            <li>🎁 Des offres spéciales pour les premiers utilisateurs</li>
            <li>👨‍🍳 Des conseils de nos chefs partenaires</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <p style="color: #6b7280; margin-bottom: 20px;">Restez connecté avec nous :</p>
          <div style="margin-bottom: 20px;">
            <a href="#" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: #ea580c; color: white; text-decoration: none; border-radius: 6px;">Suivez-nous</a>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 14px;">
            Vous recevez cet email car vous vous êtes inscrit à la newsletter Tsikonina avec l'adresse ${email}.
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 10px;">
            © 2025 Tsikonina. Tous droits réservés.
          </p>
        </div>
      </div>
    `,
  },

  contactConfirmation: {
    subject: "✅ Votre message a été reçu - Tsikonina",
    html: (name: string) => `
      <div style="font-family: 'Roboto', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; font-size: 28px; margin-bottom: 10px;">Message reçu ! ✅</h1>
          <p style="color: #6b7280; font-size: 16px;">Bonjour ${name},</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 12px; border-left: 4px solid #ea580c; margin-bottom: 30px;">
          <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
            Merci de nous avoir contactés ! Nous avons bien reçu votre message et notre équipe vous répondra dans les plus brefs délais.
          </p>
          <p style="color: #374151; line-height: 1.6;">
            En attendant, n'hésitez pas à découvrir notre blog ou à vous inscrire à notre newsletter pour rester informé des dernières actualités de Tsikonina.
          </p>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="display: inline-block; padding: 12px 24px; background: #ea580c; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
            Retour au site
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
          <p style="color: #9ca3af; font-size: 14px;">
            L'équipe Tsikonina 🍽️
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 10px;">
            © 2025 Tsikonina. Tous droits réservés.
          </p>
        </div>
      </div>
    `,
  },

  newContactNotification: {
    subject: "📧 Nouveau message de contact - Tsikonina",
    html: (name: string, email: string, subject: string, message: string) => `
      <div style="font-family: 'Roboto', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #ea580c; font-size: 24px; margin-bottom: 20px;">Nouveau message de contact</h1>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
        </div>
        
        <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin-bottom: 15px;">Message :</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  },
};
