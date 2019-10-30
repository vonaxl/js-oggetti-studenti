// student object name surename age
var studente = {
    "nome" : "",
    "cognome" : "",
    "eta" : 0
};

// array of the class
var classe = [
    studente1 = {
        "nome" : "Simone",
        "cognome" : "Icardi",
        "eta" : 120
    },
    studente2 = {
        "nome" : "Fabbrizia",
        "cognome" : "Lorenzion",
        "eta" : 30
    },
    studente3 = {
        "nome" : "Rosales",
        "cognome" : "Garcia",
        "eta" : 20
    }
];



// a "while" that ask 3 prompts wether to add a new student object and 3 properties (name, surename, age)
var continuare = "si";
while (continuare=="si") {

    var nomeInput = prompt("Inserisci il nome dello studente");
    studente.nome = nomeInput;

    var cognomeInput = prompt("Inserisci il cognome dello studente");
    studente.cognome = cognomeInput;    

    var etaInput = parseInt(prompt("Inserisci l'età"));
    studente.eta = etaInput;

    classe.push(studente);
    continuare = prompt(("Vuoi inserire un'altro studente? si o no"));
}

// print object properties
// for (var key in studente3) {
//    console.log("proprieta: "+ key +" ha il valore  : "+ studente3[key]);
// }

//   console.log(classe);
 // in while print student object name and surename properties 
 for (let index = 0; index < classe.length; index++) {
     console.log(classe[index]);
 }