"use-strict";

//ABSTRACCION: la manera en que nosotros podemos llegar a reducir la complejidad de un codigo. Permitiendonos implementar maneras y diseños mas eficientes en los datos

/*ventajas:
-Evitar codigo duplicado.
-Podemos crear multiples instancias con una sola abastraccion
-Encapsular datos.
-Evitar codigo de bajo nivel (mejores practicas)
*/

//funcion para sumar.

/*function sumar (a , b ){
    return a + b;
}
let resultado = sumar (10, 3);
console.log (resultado);*/

//Funciones de Orden Superior:

//RETONAR FUNCIONES:

function mayorQue(x) {
  return (num) => num > x;
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueDiez(9));

//FUNCIONES QUE POSEEN FUNCIONES:

function asignacionOperacion(operacion) {
  if (operacion === "sumar") {
    return function (num1, num2) {
      return num1 + num2;
    };
  } else if (operacion === "restar") {
    return (num1, num2) => num1 - num2;
  }
}

let sumar = asignacionOperacion("sumar");
let restar = asignacionOperacion("restar");

console.log(sumar(4, 6));
console.log(restar(6, 4));

//funciones pasadas por parametros:

//callback => es una funcion que se pasa como argumento a otra funcion y se ejecuta despues de que ocurra algun evento especifico

//CALLBACKS => van a ser fundamentales cuando trabajen funciones asincronas, eventos.

function operar(num1, num2, operacion) {
  return operacion(num1, num2);
}

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}

console.log(operar(5, 3, suma));
console.log(operar(5, 3, resta));

//METODOS DE BUSQUEDA Y TRANSFORMACION:

//forEach => se utiliza para iterar sobre cada elemento del array

//FORMA ANTERIOR
const letras = ["a", "b", "c"];

for (let i = 0; i < letras.length; i++) {
  const elemento = letras[i];
  console.log(elemento);
}

//CON FOR.EACH

letras.forEach((item) => console.log(item));

//OTRO EJEMPLO:

const numeros = [1, 2, 3, 4];

numeros.forEach(function (numero) {
  const resultado = numero * 2;
  console.log(resultado);
});

//FILTER: podemos crear nuevos arrays a traves de indicaciones dadas

const entregas = [
  {
    usuario: "joaquin",
    total: 60,
    seEntrego: true,
  },
  {
    usuario: "daniel",
    total: 160,
    seEntrego: false,
  },
  {
    usuario: "barbara",
    total: 180,
    seEntrego: true,
  },
  {
    usuario: "dani",
    total: 200,
    seEntrego: false,
  },
];

const respuesta = entregas.filter(
  (item) => item.seEntrego && item.total >= 100
);

console.log(respuesta);

const search = (letra) => {
  return entregas.filter((item) => {
    return item.usuario.includes(letra); //includes: es un metodo que podemos utilizar para mencionar un elemento especifico
  });
};

console.log(search("dani"));

//SOME: sirve para verificar si algo del array existe dentro si almenos uno cumple con la condicion.

const numeros1 = [1, 2, 3, 4, 20, 31, 45, 40];

//verificamos si algun numero es mayor a 40

const numeroMayor = numeros.some(function (numeroArray) {
  return numeroArray > 40;
});

console.log(numeroMayor); //true

//MAP: nos sirve para crear un nuevo array con los resultados que se den a traves de una funcion

const productos = [
  {nombre: "monitor",precio: 1500},
  {nombre: "teclado",precio: 2500},
  {nombre: "auricular",precio: 3000},
  {nombre: "mouse",precio: 4000},
];


const cambiarLetras = productos.map(function(productoArray){
    return productoArray.nombre.toUpperCase();
})

console.log (cambiarLetras);

const porcentajeProducto = 0.1;

const actualizarPrecio = productos.map (function(productoArray){
    return {
        nombre: productoArray.nombre,
        precio: productoArray.precio * (1 + porcentajeProducto)
    }
})

console.log (actualizarPrecio);

//REDUCE: lo utilizamos cuando queremos reducir un array a un solo valor o generar una operacion que sea acumulativa en cuanto a los elementos (se utiliza mucho en carritos de compra)

//FORMA ANTIGUA:
const total = [1, 2, 3, 4]
    let sum = 0;

    for (let i = 0; i < total.length; i++){
        const elemento = total[i];
        sum = sum + elemento;
    }

    console.log(sum);

    //CON REDUCE:

    const totalFinal = total.reduce((sum, elemento) => sum + elemento, 0); //reduce trabaja de la siguiente manera: (function(acumulador, elemento),0)

    console.log (totalFinal);


    //sumar carrito de compras:

    const productos1 = [
        {nombre: "monitor",precio: 1500},
        {nombre: "teclado",precio: 2500},
        {nombre: "auricular",precio: 3000},
        {nombre: "mouse",precio: 4000},
      ];
      

    const precioTotal = productos1.reduce (function(acumulador, producto){
        return acumulador + producto.precio;
    }, 0)

    console.log (precioTotal);

//SORT =>: nos permite ordenar el array

/*//mayor a menos
productos.sort(function(a,b){
    return b.precio - a.precio;
})

console.log (productos);

//Menor a mayor
productos.sort(function(a,b){
    return a.precio - b.precio;
})*/

//ordenar de manera alfabetico

productos.sort (function(a,b){
const nombreA = a.nombre.toLocaleLowerCase();
const nombreB = b.nombre.toLowerCase();

if (nombreA < nombreB){
    return -1;
}
if (nombreA > nombreB){
    return 1;
}
return 0;
})

console.log (productos);