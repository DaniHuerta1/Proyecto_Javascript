"use strict";
//MANIPULACION DE LOS NODOS:

//innerText => Forma de acceder al texto visible dentro de un elemento.

//Ejemplo:

const h1Elementos = document.getElementById("hElementos");
console.log(h1Elementos);

h1Elementos.innerText = "Elementos en JS";

//innerHTML => lo utilizamos para obtener o crear contenido HTML dentro de un elemento
//innerHTML incluye a todas las etiquetas HTML

const contenedorSection = document.getElementById("contenedorSection");
contenedorSection.innerHTML = ` 
<div>
<h1>card1</h1>
<p>parrafo de mi contenedor</p>
</div>
`;


//createElement => es el metodo con el cual nosotros podemos crear nuevos NODOS
//HTML en el DOM.

const crearElemento = document.getElementById("crearElemento");

const parrafo = document.createElement("p");

parrafo.innerText = "creamos un parrafo desde JS";

parrafo.className = "claseJs";

//appendChild => es el metodo que utilizamos para agregar un nodo como hijo
// a UNA ETIQUETA(nodo) YA EXISTENTE

crearElemento.appendChild(parrafo);

/*CLASSLIST => ES UN OBJETO QUE NOS VA A PERMITIR, AGREGAR, QUITAR, ALTERAR
CLASES EN CSS*/

const parrafoList = document.getElementById("parrafoList");
//agrega una clase al elemento:
parrafoList.classList.add("pepito");

//remover una clase
parrafoList.classList.remove("pepito");

//ayuda a alternar entre clases:
parrafoList.classList.toggle("pepito");
