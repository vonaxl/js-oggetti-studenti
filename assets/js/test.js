// https://www.w3schools.com/js/js_object_constructors.asp


function student(first, last, age) {
    this.nome = first;
    this.cognome = last;
    this.eta = age;
  }

var classe=[];
var x;
var continuare = "si";
while (continuare=="si") {
    x = new student(
        prompt("Inserisci il nome dello studente"),
        prompt("Inserisci il cnome dello studente"),
        parseInt(prompt("Inserisci eta dello studente"))
    )
    classe.push(x);
    continuare = prompt("Vuoi continuare? si/no")
}
console.log(classe);

