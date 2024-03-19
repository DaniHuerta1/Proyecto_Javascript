//Spread de arrays: ...

//copiar, concatenar, añadir elementos.

const arrayOriginal = [1,2,3];
const nuevoArray = [...arrayOriginal];

console.log (nuevoArray);

//concatenar arrays 

const array1 = ["pera", "manzana", "banana"];
const array2 = ["uva", "frutilla", "kiwi"];

const array3 = [...array1, ...array2];

console.log (array3);

//añadir elementos 

const array4 = [...array1, "melon", "naranja"];

//Spread de objetos: 

//copiar objetos:

const objeto = {
a:1,
b:2,
c:3
};

const nuevoObjeto = {...objeto};
console.log (nuevoObjeto);


//combinar objetos

const persona1 = {
nombre1: "Pedro",
apellido1: "Castellano"
}
const persona2 = {
nombre2 : "Carlos",
apellido2: "Perez"
}

const personas = {...persona1, ...persona2};
console.log (personas);

const datosCompletos = {
    ...personas, edad:30, ciudad:"Santiago"
}
console.log (datosCompletos);




