alert("Le fichier fonctionne !");
// Ceci un commentaire

/* ceci
un 
est 
commentaire */

console.log("Hello");
let maVariableSuperCool = "KamelCase";
console.log(maVariableSuperCool);

var unTexte = "Voici un texte";

console.log(unTexte);
unTexte = "Nouveau texte...";

console.log("unTexte");
const prenom = "Justine"
console.log(prenom)
let unChiffre = 24;

unChiffre =12;
console.log(unChiffre);
let chaine = "je suis l'autre chaine de caractère";
 
let chiffre = 47;
let nouvelleChaine = `Le chiffre attendu est : ${chiffre} dégrés`;
console.log(nouvelleChaine);

let string ="je suis une chaine";
let number =24;
let boolean = true;
let array = ["je", "suis" , 24, false];
let object = {
    prenom:"Audrey",
    age: 34,
    ville:"Bordeaux" ,
};
console.log(typeof number);
let arbre = null;
console.log(arbre);
 console.log(4 + 5);
 console.log(4 - 5);
 console.log(4 /5);
 console.log(4 ** 5);


let p =2;
let l= "5";
if (p <= l)

  console.log("x est inferieur à y");  
if (p === l) {
    console.log(" True !");
} {
    console.log("False !");
}
let a =5;
let b ="5";
if (a == b) {
    console.log("a et b ne sont pas égaux en valeur");
} else {
    console.log("a et b ne sont pas du tout égaux");
}
let k= 6;
let f="5";
if (k === f) {
    console.log("k et égaux en valeur");
} else if (k == f) {
    console.log(`${k} et ${f} ne sont pas dut tout égaux`);
    console.log(`${k} et ${f}  ne sont pas dut tout égaux`);
}
let c = 5;
let u = "5";
 c == u ? console.log("True !") : console.log("False"); 
 function faireQuelquerChose()
{
    console.log("je fais un truc !");
    console.log("trop cool");
}
faireQuelquerChose();
const  faireUneTache = (tache) => {
console.log("je fais :" + tache);
};
faireUneTache("les courses");
faireUneTache("le ménage");
function calc(x, y) {
    return x + y;
}
(function () {
    console.log("je me joue toute seule");
} )();
(()  => {
console.log("je me joue aussi toute seule");
})();
function add2() {
    let a =4;
    return a + 2;
}
console.log(a);
let total = 0;
function addition(x, y){
   total = x + y;
    return total;
}
function addition(x){
   total += x;
    return total;
}    
// function soustraction(e,y)
// function soustraction(e) {
//     total -=  e;
//     return total;
// }
// function division(t,s)
// function division(t) {
//     total /=  t;
//     return total;
// }
// function multiplication (j,m)
// function multiplication(j) {
//    total *=  j;
//     return total;
// }  
function reset() {
    total = 0;
}