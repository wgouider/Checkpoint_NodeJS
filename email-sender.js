const nodemailer = require("nodemailer");

// Creation  d'un objet  transporter en utilisant SMTP de gmail
let transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: "",
    pass: "",
  },
});

// Contenu de l'email 
let mailOptions = {
  from: "gouider.walid@gmail.com",
  to: "wgouider@yahoo.fr",
  subject: "Email de Tes ",
  text: "Ceci est un  email de test ",
};

// Envoi de l'email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Erreur d'envoi:", error);
  } else {
    console.log("Email envoyé:", info.response);
  }
});