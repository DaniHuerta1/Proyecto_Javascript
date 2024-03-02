"use strict";

//OPERADORES TERNARIOS O OPERADORES CONDICIONALES:
//es la expresion resumidad de un if..else, permite realizar una evaluacion de una condicion y devuelve un valor en base a

let edadCliente = 8;

if (edadCliente > 18) {
  console.log("Cliente mayor de edad, puede comprar");
} else {
  console.log("usuario menor de edad, no puede comprar");
}

// ? => if
// :=> else

// condicion a evaluar ? condicion en true  : condicion en false
edadCliente >= 18 ? console.log("es mayor") : console.log("es menor");

//OPERADOR LOGICO AND &&
//trabaja con operaciones booleanas

let usuarioRegistrado = true;
let suscripcion = true;

if (usuarioRegistrado && suscripcion) {
  document.getElementById("bienvenida").innerText = "Hola";
}

//OPERADOR LOGICO OR:
//Lo podemos utilizar para predefinir un mensaje en caso de que no retorne verdadera la condicion

/*let nombre = prompt("Ingresa tu nombre");

console.log (nombre || "invitado");*/

//OPERADOR NULLISH COLAESCING (??):
//funciona igual que el or con la diferencia que admite mas valores como verdaderos. En este caso, solo obtenemos nullish en 2 casos: 1.null 2. undefined

let name = prompt("Ingresa tu nombre");

console.log(name ?? "invitado");

function datosDeUsuario(usuario) {
  let nombre = usuario.nombre ?? "usuario anonimo";
  let correoElectronico = usuario.correoElectronico ?? "ejemplo@.com";

  console.log(`Nombre: ${nombre}`);
  console.log(`correoElectronico: ${correoElectronico}`);
}

let usuario1 = {
  nombre: "Juan",
  correoElectronico: "juan@.com",
};

let usuario2 = { nombre: "Daniela" };

datosDeUsuario(usuario2);

//ACCESO CONDICIONAL A UN OBJETO: Encadenamiento opcional
//forma segura que vamos a tener de acceder a propiedades de un objeto sin generar errores
//null y undefined


let usuario3 = {
  nombre: "Pedro",
  direccion: {calle: "luro",ciudad: "mar de plata",numero: "1234",},
  telefono: null,
};

//acceder a las propiedades de forma segura

let telefonoUsuario = usuario3.telefono?.numero;

console.log (telefonoUsuario);

let codigoPostalUsuario = usuario3.direccion?.numero;

console.log (codigoPostalUsuario);

//DESESTRUCTURACIÓN DE OBJETOS:
//permite descomponen estructura de datos, en este caso objetos o arrays.

/*const persona = {nombre: "joaquin", edad: 30, ciudad: "Santiago"};

const {nombre, edad, ciudad} = persona;

console.log (nombre);
console.log (edad);
console.log (ciudad);*/


const gato = {
    humano: "pepito", raza: "persa", edad:5, direccion:{calle:"luro", ciudad:"mar de plata", numero:"1234"}
}

let {humano, raza, edad, direccion:{calle, ciudad, numero}} = gato;

console.log (humano);

//--------------------------------------------------------------------------------
const alumno = {
    name: "pedro",
    age: 10
}

/*function darDatos (objeto){
console.log (`hola, tu eres ${objeto.name} y tenes ${objeto.age}`);
}

darDatos(alumno);*/

//desestructuracion por parametros
function darDatos({name, age}){
    console.log (`hola, tu eres ${name} y tenes ${age}`);
}

darDatos(alumno);

//---------------------------------------------------------------------------

//DESESTRUCTURACION DE ARRAYS:

const frutas = ["Banana", "Manzana", "Pera", "Naranja"];

const [fruta1, fruta2, fruta3, fruta4] = frutas;

console.log (fruta2);
console.log (fruta4);

const perro = {tipo: "caniche", edad: 2};
const {tipo, edad:edadPerro, vacuna="si" } = perro;

console.log (vacuna);