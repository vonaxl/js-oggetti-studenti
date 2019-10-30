// student object name surename age
var studente = {
    "nome" : "",
    "cognome" : "",
    "eta" : 0
};
// print object properties


// array of the students
var classe = [];

// in while print student object name and surename properties 


// a "while" that ask 3 prompts wether to add a new student object and 3 properties (name, surename, age)
var continuare = "si";
while (continuare=="si") {

    var nomeInput = prompt("Inserisci il nome dello studente");
    studente.nome = nomeInput;

    var cognomeInput = prompt("Inserisci il cognome dello studente");
    studente.cognome = cognomeInput;    

    var etaInput = parseInt(prompt("Inserisci l'età"));
    studente.eta = etaInput;
    
    continuare = prompt(("Vuoi inserire un'altro studente? si o no"));
}
console.log(studente);
