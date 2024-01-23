"use strict";

//FUNCIONES: son bloques de codigo que realizan una tarea especifica y pueden ser reutilizados en diferentes partes del codigo, nos ayuda a organizar, estructurar y nos permite que el codigo sea mas modular y facil de entender.


//Las funciones se declaran de la siguiente manera:
//Las funciones tienen que tener el nombre de la acción que van a ejecutar, suelen ser VERBO y se declaran con CamelCase

//Declarar: 
/*function saludar(){

    //se ejecutan las instrucciones de la funcion
console.log ("Hola, Bienvenido")
}

// Las funciones se deben llamar para ser ejecutadas 
//Llamar o invocar:
saludar ();

//Las funciones tienen la posibilidad de aceptar parametros y argumentos
//nombre es el parametro, es como una variable que se utiliza para ingresar a la funcion 
//se incorpora un parametro que va a recibir el valor que se aplique en el argumento
function saludarPersona (nombre){
    console.log("Hola, " + nombre + " " + "¿Como estas?");
}

//el argumento se ejecuta cuando se incorpora un valor dentro de la funcion 
saludarPersona("Dani");*/


//Scope, ambito o alcance: habla sobre lo visible y lo accesible de una variable dentro de un programa.


//Variable de tipo local: a diferencia de la tipo global si la declaramos dentro de la funcion esta variable solo podra vivir dentro del bloque donde fueron creadas

/*function ingresarNombre (){
    let ingresoDeNombre = prompt ("Ingresar Nombre");
    console.log ("Tu nombre es: " + ingresoDeNombre);
}

ingresarNombre ();



//Variable de tipo global: son variables que se pueden llamar en cualquier bloque de codigo

let ingresoDeNombre = prompt ("Ingresar Nombre");
function ingresarNombre (nombre){
    console.log ("Tu nombre es: " + nombre);
}
ingresarNombre (ingresoDeNombre);*/

//EJEMPLOS:

/*let variableGlobal = "Soy la variable GLOBAL";

function ejemploScope() {
    let variableLocal = "Soy la variable LOCAL";
    console.log (variableGlobal);
    console.log (variableLocal);
}

console.log(variableGlobal);
console.log(variableLocal);*/

//EJEMPLO: 

/*let ingresoDeNombre = prompt ("Ingresar Nombre");
let ingresoDeApellido = prompt ("Ingresar Apellido")
let ingresoDeEdad = parseFloat(prompt ("Ingresa tu edad"));

function ingresarDatos (nombre, apellido, edad){
    console.log ("Tu nombre es: " + nombre +  "El apellido es " + apellido + "Tu edad es :" + edad );
}
ingresarDatos (ingresoDeNombre, ingresoDeApellido, ingresoDeEdad);*/

//EJEMPLOS: 


/*function ingresarNombre (){
    let ingresoDeNombre = prompt ("Ingresa tu nombre");
    console.log ("El nombre ingresado es " + ingresoDeNombre);
}

let numero = 0;
while (numero < 2){
    ingresarNombre()
    numero ++
}*/


//Un programa que nos verifique si una persona es mayor de edad: 

/*function comprobarEdad (){
    const EDAD = parseFloat (prompt("Ingresa tu edad") )
    if (EDAD >= 18){
        return ("Eres mayor de edad")
    }
    else{
        return ("No eres mayor de edad")
    }
}

const resultadoEdad = comprobarEdad();
console.log (resultadoEdad);*/

/*function sumar(a, b){
return a + b ;
}

let resultado = sumar(3,5); 
console.log (resultado);*/


//FUNCIONES ANONIMAS Y FUNCIONES FLECHAS:

//FUNCIONES ANONIMAS: se define sin nombre y se utiliza para ser para como parametro o asignada a una variable. Podemos alojar una funcion dentro de una variable

/*let suma = function (a, b){
    return a + b;
}

console.log (suma(2,3));*/

//FUNCIONES FLECHAS: son funciones de expresion corta donde la fecha no solo declara que es una funcion si no que dentro tiene un return implicito

/*let suma = (a,b) => a + b;
console.log (suma (5,2));*/

let num1 = parseInt (prompt ("Ingresa tu numero"))
let num2 = parseInt (prompt ("Ingresa tu numero"))

let suma = (a,b) => a + b;

console.log (suma(num1, num2));

