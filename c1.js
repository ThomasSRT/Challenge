// Demander à l'utilisateur le montant total de l'addition
let montantTotal = parseFloat(prompt("Entrez le montant total de l'addition :"));

// Demander à l'utilisateur de saisir le pourcentage de pourboire qu'il souhaite laisser
let pourcentagePourboire = parseFloat(prompt("Entrez le pourcentage de pourboire que vous souhaitez laisser (15, 20, 25) :"));

// Calculer le montant du pourboire
let montantPourboire = montantTotal * (pourcentagePourboire / 100);

// Calculer le montant total (addition + pourboire)
let montantTotalAvecPourboire = montantTotal + montantPourboire;

// Afficher le montant du pourboire et le montant total dans la console
console.log("Montant du pourboire : " + montantPourboire.toFixed(2) + " €");
console.log("Montant total avec pourboire : " + montantTotalAvecPourboire.toFixed(2) + " €");
