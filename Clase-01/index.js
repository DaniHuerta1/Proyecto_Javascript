"use strict"

/*let numeroUno = 1;
console.log (numeroUno)*/

//Operaciones Basicas
let numeroUno = 6;
let numeroDos = 5;

let suma = numeroUno + numeroDos;

console.log (suma);

let resta = numeroUno - numeroDos;
console.log (resta);

let multiplicación = numeroUno * numeroDos ;
console.log (multiplicación);

let división = numeroUno / numeroDos ;
console.log (división);

//resto es lo que sobra de una división (5/6 sobra 1)
let resto = numeroUno % numeroDos;
console.log (resto)

//concatenacion = podemos unir valores de tipo string alojados en variables

let nombre = "Daniel"
let apellido = "Huerta"

let nombreCompleto = nombre + " " + apellido;
console.log (nombreCompleto)

//PROMPT: mostrara un cuadro de dialogo para que el usuario ingrese un dato. 

let nombre1 = prompt("Ingresa tu Nombre");
let apellido1 = prompt("Ingresa tu apellido");

let nombreCompleto1 = nombre1 + " " + apellido1;
console.log ("Hola mi nombre es " + nombreCompleto1)

//alert: es una función que nos muestra un cuadro de dialogo 

alert ("Hola mi nombre es " + nombreCompleto);