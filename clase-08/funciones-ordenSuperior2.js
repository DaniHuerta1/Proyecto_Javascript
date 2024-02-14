"use strict";

//Math: funciona como un contenedor de herramientas y metodos para realizar operaciones matematicas

//constante Euler

//representar una base algoritmica natural => 2.7182

console.log(Math.E);

//numero PI nos sirve para calcular principalmente la circunferencia de circulos diametro, geometricos.

console.log(Math.PI);

//PROPIEDADES:

//Min&Max reciben una serie de argumentos numeros y devuelven aquel de valor maximo o minimo.

let minimo = Math.min(54, 76, 13);

console.log(minimo);

let maximo = Math.max(54, 76, 13);
console.log(maximo);

//CEIL = Nos va a retornar el numero que indiquemos siempre para arriba

let ceil = Math.ceil(3.14);
console.log(ceil);

//FLOOR: Nos va a retornar el numero que indiquemos siempre para abajo.

let floor = Math.floor(3.14);
console.log(floor);

//ROUND: Redondea el numero al mas cercano de los enteros.

let round = Math.round(3.5);
console.log(round);

//SQUARE ROOT: retorna la raiz cuadrada de un numero

let squareRoot = Math.sqrt(25);
console.log(squareRoot);

//POW (base, exponente): devuelve la base elevada a la potencia

let potencia = Math.pow(2, 3);
console.log(potencia);

//SENO COSENO TANGENTE:

let seno = Math.sin(Math.PI / 2);
console.log(seno);

let cos = Math.cos(Math.PI);
console.log(cos);

let tangente = Math.tan(Math.PI / 4);
console.log(tangente);

//RANDOM: nos sirve para retornar numeros aleatorios pero que siempre van a ir desde el 0 al 1

console.log(Math.random);

//numeros que vayan del 0 a 10

console.log(Math.random() * 10);

console.log(Math.round(Math.random() * 10)); //redondea a numeros enteros

//numeros del 20 al 50

console.log(Math.round(Math.random() * 40 + 10)); //no toma numeros que esten por debajo de 10.

//JUEGO DE TIRAR LOS DADOS:

/*function lanzarDados(){
    return Math.floor(Math.random()*5 + 1); 
}

function simularElTiro (){
    const LANZAR_DADOS = prompt("Queres lanzar los dados? (si / no)").toLowerCase();
    if (LANZAR_DADOS === "si"){
        let resultadoDado1 = lanzarDados();
        let resultadoDado2 = lanzarDados();

        console.log (`dado1: ${resultadoDado1}`);
        console.log (`dato 2: ${resultadoDado2}`);
        console.log (`total: ${resultadoDado1+resultadoDado2}`);
    }
    else {
        console.log ("Fin del juego")
    }
}

simularElTiro();

//ADIVINANZA DE NUMEROS:

function adivinanza (){
    const numeroAleatorio = Math.floor(Math.random()*10);

    let intentos = 0;
    let adivinanza;

do {
    adivinanza = parseInt(prompt("Selecciona numeros entre 0 y 10"));

    if (!isNaN(adivinanza)&& adivinanza >= 0 && adivinanza <= 10){
intentos++;
if (adivinanza < numeroAleatorio){
    console.log ("El numero es mayor, volver a jugar")
}
else if (adivinanza > numeroAleatorio){
    console.log ("El numero es menor, vuelve a jugar")
}else {
    console.log (Adivinaste);
}
    }else {
        console.log ("ingresa un numero valido");
    }
}

while(adivinanza !== numeroAleatorio){

}
}

adivinanza();*/

//CLASE DATE: En JS nos sirve para manipular las fechas y horas:

let fechaActual = new Date();

console.log(fechaActual);

let fechaEspecifica = new Date(2021, 0, 12, 14, 51, 45); //0 corresponde al mes de enero. //el 14,51,45 corresponde a las horas, minutos y segundos.
console.log(fechaEspecifica);

//obtener componentes de la fecha
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
console.log(anio, mes, dia, hora, minutos, segundos);


//--------------------------------------------------------------------------------

//programar tarea:

function programarTarea() {
  //solicitar al usuario la tarea
  let descripcionTarea = prompt("Ingresa tu tarea");
  //solicitar hora
  let horaTarea = parseInt(prompt("Ingresa la hora"));

  if (isNaN(horaTarea) || horaTarea < 0 || horaTarea >= 24){
    console.log("Hora no valida, ingresa otra");
    return;
  }
  //solicitar minutos
  let minutosTarea = parseInt(prompt("Ingresa minutos"));
  if (isNaN(minutosTarea) || minutosTarea < 0 || minutosTarea >= 60) {
    console.log("Ingresa minutos validos");
    return;
  }

  //crear la fecha con la hora y el minuto:
let fechaTarea = new Date();
  fechaTarea.setHours(horaTarea, minutosTarea, 0,0);

  //calcular el tiempo que falta para la ejecucion de la tarea:

  let tiempoRestante = fechaTarea.getTime() - new Date().getTime();

  //programar la tarea:

  setTimeout(function(){
    console.log (`Es hora de la tarea ${descripcionTarea}`);
  }, tiempoRestante);
  console.log (`tarea programada: ${descripcionTarea} a las ${horaTarea},${minutosTarea}} `);
}

programarTarea();


