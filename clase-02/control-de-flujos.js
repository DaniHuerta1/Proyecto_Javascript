"use strict";
//Condicionales: estructura sintatica que sirve para tomar una decision a partir de una condicion
//Si <condicion> existe entonces <operacion>
//Que las condiciones sean VERDADERAS o FALSAS
//IF (SI) es una construcion fundamental para la tomar de decisiones. Evalua expresiones o condiciones y siempre va a evaluar verdadero
/*if(condicion booleana){}*/

//Operadores de comparacion o relacionales:
// x == y : operador de igualdad

let variable1 = 2;
let variable2 = "2";

if (variable1 == variable2) {
  console.log("Son lo mismo para este operador");
}

// x === y : operador estrictamente igual

let variable3 = 2;
let variable4 = "2";

if ("variable3 === variable4") {
  console.log("Son lo mismo para este operador");
}
//EJEMPLO:

let variable5 = 8;
let variable6 = 9;

if (variable5 == variable6) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}

/* != : es distinto */
/* !== : este operador va a evaluar no solo que sea diferente el dato si no también el tipo */
// > : Mayor que
//>= : Mayor o igual que
//<: Menor que
//<=: Menor o igual que

//EJEMPLO >:

let var1 = 8;
let var2 = 7;

if (var1 >= var2) {
  console.log("true");
} else {
  console.log("false");
}

//estructura else if: sirve para evaluar multiples condiciones de manera secuencia
//Se inicia siempre con if y en el medio tantos else if como sea necesario y se termina siempre con else

/*let numero = prompt("Ingresa tu numero")

if (numero >0){
    console.log ("el numero es positivo")
}
else if (numero <0){
    console.log ("El numero es negativo")
}
else {
    console.log ("el numero va a ser 0")
}*/

//Programa que evalue la edad de una persona en caso de que quiera conducir:

/*const EDAD = prompt("Ingrese su edad")

if (EDAD >= 18){
    alert("Usted puede conducir")
} else {
    alert ("Usted no esta habilitado para conducir")
}*/

//OPERADORES LOGICOS:
//&& : siempre devuelve verdadero, si ambas expresiones que se evaluen son verdaderas
//Las tablas de verdad tienen sosten en la medicion de booleanos. Siempre van a evaluar verdadero o falso (true o false)

//Se compone de 2 expresiones:
// a     b :      a && b
// true  true :   true
//true   false :  false
// false false : false
// false true  : false

//EJEMPLO:

/*let EDAD = 18;
let tieneLicencia = true;*/

//manejar auto = 1 mayor de edad, 2 es que tenga registro.

/*if (edad >= 18 && tieneLicencia == true){
    console.log ("puede conducir")
}
else {
    console.log ("No puede conducir")
}*/

/*if ((EDAD >= 18) && (EDAD <= 85) && (tieneLicencia == false)){
console.log ("La persona puede manejar")
}
else {
console.log ("La persona no puede manejar")
}*/

//OPERADOR LOGICO OR || = Devuelve verdadero si solo si 1 de los 2 elementos a evaluar es verdadero

// a     b      a||b
//true   true     true
//true   false    true
//false  false    false

/*let EDAD = 14;
let tieneMultas = false;

if (EDAD >= 18 || tieneMultas) {
    console.log ("Puede manejar");
}
else {
    console.log("No puede manejar") 
}*/

// OPERADOR LOGICO "NO" = ! => se utiliza para invertir el valor de la condicion

//condicion true => false
//condicion false => true

//EJEMPLO:

//verificar si el usuario no esta bloqueado:

/*let usuarioBloqueado = false;

if (!usuarioBloqueado){
    console.log ("el usuario tiene acceso")
}
else {
    console.log ("El usuario no tiene acceso")
}*/

//EJEMPLO:

/*let nombreIngresado = prompt ("Ingresar nombre");

if ((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado == "ema"))){
    alert ("Hola Ema")
}
else {
    alert ("Error: Ingresar nombre valido");
}*/

//Precedencia de operadores:

//1. Parentesis o en corchetes
//2. operadores unitarios, ++ -- - !
//3. operadores aritmeticos * / %, sumas y restas
//4. relacionales < > >= =<
//5. igualdad == !=
//6. logicos && !!


//EJEMPLO:
//Escribe un programa que determine si un usuario puede acceder a una página web basándose en dos condiciones: el usuario debe estar registrado y debe ser mayor de edad. Si ambas condiciones son verdaderas, muestra un mensaje de bienvenida. De lo contario, muestra un mensaje de acceso denegado.

/*let estaRegistrado = true;
let edad = 18;

if (estaRegistrado && edad >= 18 ){
    console.log ("Bienvenido a la pagina")
}
else {
    console.log("Acceso denegado")
}*/

/*let estaRegistrado = prompt ("Estas registrado?")
let edad = prompt ("Cual es tu edad?")

if (estaRegistrado === "si" && edad >= 18) {
    console.log("Bienvenido")
}
else{
    console.log ("Acceso denegado")
}*/

/*let ingresaProducto = prompt ("Ingrese el producto")
let  producto1= "cafe"
let producto2 = "leche"


if(ingresaProducto === producto1 ){
    alert ("Producto Disponible")
}
else {
    alert ("Sin stock")
}*/
let ingresaNombre = prompt ("Ingresa tu nombre")
let ingresaContraseña = prompt ("Ingresa tu contraseña")
let nombreDeUsuario = "admin" 
let contraseñaDeUsuario = "123456"


if (ingresaNombre === nombreDeUsuario && ingresaContraseña === contraseñaDeUsuario){
    alert ("Contraseña correcta")
}
else {
    alert ("Contraseña Incorrecta")
}

