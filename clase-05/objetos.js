"use strict"

//OBJETOS: estructura de datos que se utilizar para almacenar y organizar información. Es una colección de datos relacionados como una entidad.
//Los objetos poseen claves y valores

/*
en una silla:
CLAVE:                  VALOR:
cantidad de patas:       4
color de silla:          rojo
tipo de madera:          algarrobo
*/

/*let silla = {
    patas: 4,
    color: "rojo",
    madera: "Algarrobo"
};

console.log (silla );
console.log (silla.madera); //Llama solo a la propiedad que le indicamos despues del punto*/

//OBJETO SIN DATOS:

/*const alumno ={
    nombre: "",
    apellido:"",
    comision:"",
}

alumno.nombre = "Dani";
alumno.apellido = "Huerta";
alumno.comision = "Javascript";


console.log (alumno);

//modificar datos ya escritos
alumno ["nombre"] = "Daniel";
console.log (alumno);*/


//OBJETOS CONSTRUCTORES: es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario.

//Como se crea:

//1-La primera letra de la funcion siempre esta en mayuscula
// 2 - Todas las funciones se abren parentesis y pasan parametros

/*function Alumnos (lista, nombre, apellido, comision){
    //El this guarda la informacion = el valor que se le asigna es el parametro que va a captar la informacion
    this.lista = lista;
    this.nombre = nombre; 
    this.apellido = apellido;
    this.comision = comision;
};

const ALUMNO1 = new Alumnos (1, "Luis", "Ferrer", "Javascript");
const ALUMNO2 = new Alumnos (2, "Barbara", "Bravo", "Javascript");
console.log (ALUMNO1);
console.log (ALUMNO2);

//ALUMNO2.apellido = "Ferrer"; //modificar el apellido
ALUMNO2["apellido"] = "Ferrer"; //tambien se puede modificar de esta forma
console.log (ALUMNO2);*/

//METODOS Y OPERACIONES CON OBJETOS:

//Cuando hablamos de esto hacemos referencia a acciones o funciones que pueden realizarse en Los objetos.

/*let coche = {
    marca: "Suzuki",
    modelo: "Dzire",
    arrancar: function() {
        console.log ("El coche esta arrancando")
    }
}

coche.arrancar ();*/


//comercio =>  nombre, precio, stock, precio con IVA

/*const IVA = 1.21;

function Producto (nombre, precio, stock){
this.nombre = nombre;
this.precio = precio,
this.stock = stock;
this.precioConIva = function(){
    let precioFinal = this.precio * IVA;
    return "$" + precioFinal;
}
}

const PRODUCTO1 = new Producto ("arroz", 1200, 2);
const PRODUCTO2 = new Producto ("spaguetti", 1400, 3);
console.log (PRODUCTO1);

PRODUCTO1.precioConIva();
console.log (PRODUCTO1.precioConIva());
console.log (PRODUCTO2.precioConIva());*/

//OPERADOR IN: Devuelve true si la propiedad especifica existe en el objeto


/*let persona = {
    nombre: "Pedro",
    edad: 30,
}

if ("ciudad" in persona){
    console.log ("La propiedad nombre esta dentro del objeto");
}
else {
    console.log ("No existe la propiedad");
}*/



//For in: permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteracion

/*let persona = {
    nombre: "Pedro",
    edad: 30,
}

for (let propiedad in persona){
    console.log (propiedad + ":" + persona[propiedad]);
}*/


//CLASES EN JAVASCRIPT 

//1- Definir el objeto
//2- Definir propiedades y metodos
//3- Herencia
//Los `` se hacen con Alt Gr + la tecla donde esta la llave }

class Persona{
constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
saludar (){
    console.log (`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
}
}

const PERSONA1 = new Persona ("Maxi", 31);
const PERSONA2 = new Persona ("Nico", 35);

PERSONA1.saludar();
PERSONA2.saludar();