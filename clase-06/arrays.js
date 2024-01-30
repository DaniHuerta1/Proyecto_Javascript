"use strict"

//ARRAYS: estructura de datos que se utiliza para almacenar una coleccion de valores (Listas indexadas)
// todos los indice de array inician en 0

/*let productos = ["Arroz", "Fideos", "Banana", "Gaseosa"]; // array de string
let numeros = [1, 2, 3, 4, 5, 6]; //array de numeros
let boolean = [true, false, false, true]; //array de boolean
let popurri = ["arroz", 1, "true"]; //array de mezcla de datos

const USUARIOS = [
{nombre: "Dani",
apellido: "Huerta",
edad: 31
},
{
    nombre: "Maxi",
    apellido: "Cardenas",
    edad: 25,
}
]

console.log (productos);
//accedemos a uno de los valores que contiene el array a traves de su indice
console.log (productos[3]);

console.log (USUARIOS[1]);
console.log (USUARIOS);*/

//length: longitud


let productos = ["Arroz", "Fideos", "Banana", "Gaseosa"];

for (let i =0; i < 4; i++){
    console.log (productos[i]);
}

//METODOS Y PROPIEDADES:

//LENGTH: es un metodo que nos va a proporcionar el dato de la cantidad de elementos que posee el array
let cantidadDeProductos= productos.length;
console.log ("la cantidad de productos que posee el array es: " + cantidadDeProductos);

let texto = "mundoCoder";
let longitudTexto = texto.length
console.log (longitudTexto);



//PUSH: metodo que se utiliza para agregar uno o más datos al final del array

let numero = [1,2,3,4,5];
numero.push(4,);

console.log (numero);

//POP: elimina el ultimo elemento de un array

let actualizarNumero = numero.pop();
console.log (actualizarNumero);
console.log (numero);


//SHIFT: elimina el primer elemento de un array 

let numeroEliminado = numero.shift();
console.log (numeroEliminado);
console.log (numero);

//SPLICE: este metodo nos sirve para agregar, eliminar o reemplazar elemento de un array

let colores = ["rojo", "naranja", "amarillo"];
colores.splice(1,1, "azul");

console.log (colores);

//splice => (indice, cantidad, tipo de datos)

//JOIN => convierte los elementos de un array en una cadena de texto, y los une utilizando separadores especificados por nosotros

let stringColores = colores.join(" ");
console.log (stringColores);

//CONCAT => Nos permite combinar 2 o mas arrays en uno nuevo

let autos = ["Suzuki", "Toyota", "Nissan"];

let masAutos = autos.concat (["Honda", "Liffan", "Chery"]);

console.log (masAutos);

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

const NUEVO_ARRAY = array1.concat (array2,array3);
console.log (NUEVO_ARRAY);

//SLICE => Nos permite extraer una parte de un array y crear un array con esos elementos que sacamos

//array.slice(indice,fin) => indice donde comienza, fin donde termina

let arrayNumero = [1,2,3,4,5];

let parteDelArray = arrayNumero.slice(1,4);

console.log (parteDelArray);

//INDEX-OF => Busca la primera aparicion de un elemento en un array y nos devuelve el indice (la posicion donde este ese elemento)

let fruta = ["manzana", "banana", "frutilla", "naranja", "manzana"];

let indice = fruta.indexOf("manzana");
console.log (indice);


//INCLUDES => nos dice si un valor esta incluido en el array, el dato lo muestra de manera booleana, si esta da true si no esta da false

let estaEnFrutas = fruta.includes("kiwi");
console.log (estaEnFrutas);

//REVERSE: DA VUELTA AL ARRAY

let frutaAlReves = fruta.reverse ();

console.log (frutaAlReves);

//UN-SHIFT: nos permite agregar elementos al inicio del array, pero desplaza los que existen

let fruta1 = ["manzana", "banana", "frutilla", "naranja", "manzana"];

const NuevoArray = fruta1.unshift("kiwi");
console.log (NuevoArray);

//ARRAY DE OBJETOS: son estructuras que nos permiten almacenar colecciones de objetos en un solo lugar


const PERSONAS = [
{nombre: "Pedro", edad:30},
{nombre: "Carlos", edad:25},
{nombre: "Exequiel", edad:21}
]

console.log (PERSONAS);


//FOR... OF: es la estructura de control de flujos, devuelve los datos por separado

for (const personaObjetos of PERSONAS){
    console.log (personaObjetos); 
    console.log (personaObjetos.nombre); //llamamos a solo los nombres del array 
}

//EJEMPLO:

const personas = [
    {nombre: "Juan", edad:30},
    {nombre: "Maria", edad:30},
    {nombre: "Luis", edad:30},
]

function calcularPromedioEdades (arrayPersonas){
    let sumaEdades = 0;
    for (let i = 0; i < arrayPersonas.length; i++){
        sumaEdades += arrayPersonas[i].edad;
    }
    const PROMEDIO = sumaEdades / arrayPersonas.length;
    return PROMEDIO;
}

const PROMEDIO_EDADES = calcularPromedioEdades (personas);
console.log ("El promedio es : " + PROMEDIO_EDADES);