import { emailTemplates, resend } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Le message doit contenir au moins 10 caractères" },
        { status: 400 }
      );
    }

    // Sauvegarder le message dans Supabase
    const { data, error: insertError } = await supabaseAdmin
      .from("contact_messages")
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          subject: subject.trim(),
          message: message.trim(),
          created_at: new Date().toISOString(),
          status: "new",
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Erreur lors de la sauvegarde:", insertError);
      return NextResponse.json(
        { error: "Erreur lors de la sauvegarde du message" },
        { status: 500 }
      );
    }

    // Envoyer l'email de confirmation au client
    try {
      await resend.emails.send({
        from: "Tsikonina <noreply@email.tsikonina.com>",
        to: [email],
        subject: emailTemplates.contactConfirmation.subject,
        html: emailTemplates.contactConfirmation.html(name),
        text: `Bonjour ${name},\n\nMerci de nous avoir contactés ! Nous avons bien reçu votre message et notre équipe vous répondra dans les plus brefs délais.\n\nEn attendant, n'hésitez pas à découvrir notre blog ou à vous inscrire à notre newsletter.\n\nL'équipe Tsikonina 🍽️`,
      });
    } catch (emailError) {
      console.error(
        "Erreur lors de l'envoi de l'email de confirmation:",
        emailError
      );
    }

    // Envoyer une notification à l'équipe
    try {
      const contactEmail = process.env.CONTACT_EMAIL || "contact@tsikonina.com";
      await resend.emails.send({
        from: "Tsikonina <noreply@email.tsikonina.com>",
        to: [contactEmail],
        subject: emailTemplates.newContactNotification.subject,
        html: emailTemplates.newContactNotification.html(
          name,
          email,
          subject,
          message
        ),
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de la notification:", emailError);
    }

    return NextResponse.json({
      message:
        "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
      id: data.id,
    });
  } catch (error) {
    console.error("Erreur générale:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite" },
      { status: 500 }
    );
  }
}
