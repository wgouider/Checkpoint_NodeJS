// Import du package generate-password
const generatePassword = require('generate-password');

// Fonction de gé,ération d'un mot de passe aléatoire
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 25, 
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,
    });
    return password;
}

// Afficher le mot de passe généré dans la console 
console.log("Generated Password:", generateRandomPassword());
