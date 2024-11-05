let firstNumber= 8;

let secondNumber= 3;

let additionResult =firstNumber + secondNumber;
console.log(sum);

let subbstractionResult =firstNumber - secondNumber;
console.log(diference);

let multiplicationResult=firstNumber*secondNumber;
console.log(multiplicationResult);

let divisionResult=firstNumber/secondNumber;
console.log(divisionResult)

let moduloResult=firstNumber%secondNumber;
console.log(moduloResult);

let sumResult=additionResult;
console.log(sumResult);

sumResult = additionResult;

sumResult +=5;

sumResult-=2;

sumResult *3;

sumResult /2;

let isEquelSum= (sumResult==10)
console.log(isEquelSum);

console.log("SumResult n'est pas égal à isEqualSum" +isEquelSum);

let outOutputMessage="Ceci est une chaîne de caractère";

let outOutputMessage2="Voici une autre chaîne de caractère";

let maPharase2=outOutputMessage +" "+ outOutputMessage2;

console.log(maPharase2);

/* Les templates litérals ou littéraux de gabarit

Les templates litérals ou littéraux de gabarit ont été introduits en ES6.
Il proposent une syntaxe plus simple pour crée des chaines de caracteres en utilisant les backticks(``) plutot que les apostrophes('') ou les guillemets("") */

let fName= "Martin";
let lName="Leblanc";
let age= 25;
let Ucity= "Paris";

let presentation=`Bonjour je suis ${fName} ${lName}, j'ai ${age} ans et j'habite à ${uCity}`;

console.log(presentation);
// On peut faire des opérations sur les variables dans le template

let productPrice=2.45;
let productName="iphone";
let productQuantity=77;

let detail =`Bonjour le prix de ${productName} est de ${productPrice} € et le prix total est de ${productPrice*productQuantity}€`;
console.log(detail);

// Chaînes de caractères multilignes
let prhaseTresLongue=`
Hello ceci est une phrase très longue et je vais la mettre sur plusieurs lignes pour voir comment sa se passe
`;

/* Les déclarations multiples ou declaration chaining */

let schoolName, schoolAdress,schoolCity="Chartres",schoolZipCode="28000";

console.log(schoolName);
console.log(schoolAdress);
console.log(schoolCity);
console.log(schoolZipCode);

/* Ceci est une déclaration multiple et chaque variable est séparée par une virgule.Si je n'attribut de valeur à la variable alors elle sera undefined
 */


/* Prompt() confirm et alert */

let votreNom= prompt("Quel est votre nom ?");
console.log(votreNom);

//alert() permet d'afficher une boite avec un message dans le navigateur pour l'utilisateur.


//confirm() permet d'afficher une boite avec un message dans le navigateur pour l'utilisateur.Cette boite de dialogue permet a l'utilisateur de confirmer ou annuler une action