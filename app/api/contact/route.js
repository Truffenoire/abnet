import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(req) {
  const { name, email, message } = await req.json();


  // Vérification des champs
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
  }


  // Création du transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou un autre service SMTP, ex : 'smtp.mailtrap.io'
    auth: {
      user: process.env.MAIL_USERNAME, // Adresse e-mail d'envoi
      pass: process.env.MAIL_PASSWORD, // Mot de passe d'application
    },
  });


  // Configuration du message à envoyer
  const mailOptions = {
    from: process.env.MAIL_USERNAME, // Adresse e-mail d'envoi
    to: 'belariniespacesverts@gmail.com', // Adresse e-mail du destinataire
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };


  try {
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: 'Message envoyé avec succès !' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ error: 'Une erreur est survenue lors de l\'envoi de l\'email.' }, { status: 500 });
  }
}
