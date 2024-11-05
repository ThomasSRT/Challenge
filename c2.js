let cafesVendus = parseInt(prompt("Combien de cafés avez-vous vendus aujourd'hui ?"));
let croissantsVendus = parseInt(prompt("Combien de croissants avez-vous vendus aujourd'hui ?"));
let jusVendus = parseInt(prompt("Combien de jus d'orange avez-vous vendus aujourd'hui ?"));

const prixCafe = 2;
const prixCroissant = 1.5;
const prixJus = 2.5;

let totalCafes = cafesVendus * prixCafe;
let totalCroissants = croissantsVendus * prixCroissant;
let totalJus = jusVendus * prixJus;

let totalVentes = totalCafes + totalCroissants + totalJus;

let totalArticlesVendus = cafesVendus + croissantsVendus + jusVendus;

console.log("Récapitulatif des ventes du jour :");
console.log(`Cafés vendus : ${cafesVendus} (${totalCafes}€)`);
console.log(`Croissants vendus : ${croissantsVendus} (${totalCroissants}€)`);
console.log(`Jus d'orange vendus : ${jusVendus} (${totalJus}€)`);
console.log(`Total des ventes : ${totalVentes}€`);
console.log(`Nombre total d'articles vendus : ${totalArticlesVendus}`);
