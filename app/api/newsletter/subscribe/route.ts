import { emailTemplates, resend } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation de l'email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const { data: existingSubscription, error: checkError } =
      await supabaseAdmin
        .from("newsletter_subscriptions")
        .select("*")
        .eq("email", email.toLowerCase())
        .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Erreur lors de la vérification:", checkError);
      return NextResponse.json(
        { error: "Erreur lors de la vérification" },
        { status: 500 }
      );
    }

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return NextResponse.json(
          { error: "Cette adresse email est déjà inscrite" },
          { status: 409 }
        );
      } else {
        // Réactiver l'abonnement
        const { error: updateError } = await supabaseAdmin
          .from("newsletter_subscriptions")
          .update({ is_active: true, subscribed_at: new Date().toISOString() })
          .eq("email", email.toLowerCase());

        if (updateError) {
          console.error("Erreur lors de la réactivation:", updateError);
          return NextResponse.json(
            { error: "Erreur lors de la réactivation" },
            { status: 500 }
          );
        }
      }
    } else {
      // Créer un nouvel abonnement
      const { error: insertError } = await supabaseAdmin
        .from("newsletter_subscriptions")
        .insert([
          {
            email: email.toLowerCase(),
            subscribed_at: new Date().toISOString(),
            is_active: true,
          },
        ]);

      if (insertError) {
        console.error("Erreur lors de l'insertion:", insertError);
        return NextResponse.json(
          { error: "Erreur lors de l'inscription" },
          { status: 500 }
        );
      }
    }

    // Envoyer l'email de bienvenue
    try {
      await resend.emails.send({
        from: "Tsikonina <noreply@email.tsikonina.com>",
        to: [email],
        subject: emailTemplates.welcomeNewsletter.subject,
        html: emailTemplates.welcomeNewsletter.html(email),
        text: `Bienvenue chez Tsikonina ! 🍽️\n\nMerci de vous être inscrit à notre newsletter.\n\nVous recevrez :\n- Des recettes exclusives de cuisine malgache\n- Les dernières nouvelles sur le développement de l'app\n- Des offres spéciales pour les premiers utilisateurs\n- Des conseils de nos chefs partenaires\n\nL'équipe Tsikonina`,
        headers: {
          'X-Entity-Ref-ID': 'newsletter-welcome',
        },
      });
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError);
      // On continue même si l'email échoue
    }

    return NextResponse.json({
      message:
        "Inscription réussie ! Vérifiez votre boîte mail pour le message de bienvenue.",
    });
  } catch (error) {
    console.error("Erreur générale:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite" },
      { status: 500 }
    );
  }
}
