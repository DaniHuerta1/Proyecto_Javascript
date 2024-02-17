"use strict"

//MODELO DE OBJETOS DEL DOCUMENTO(DOM): Es una estructura de objetos generada por el navegador, la cual representa la pagina HTML actual.
//Con JS la empleamos para acceder y modificar de forma dinamica elementos de la interfaz.
//con js cada etiqueta HTML es un objeto, al que podemos llamar nodo.
//CUANDO ESTAMOS MANIPULANDO EL DOM DESDE JS LAS ETIQUETAS PASAN A LLAMARSE NODOS.

//DOCUMENT => OBJETO GLOBAL CON EL CUAL NOSOTROS DESDE JS PODEMOS ACCEDER A LAS ETIQUETAS DE HTML.
//ESTE OBJETO NOS PROPORCIONA UNA INTERFAZ PARA INTERACTUAR CON ELEMENTOS, NOSOTROS PODEMOS CREAR, ELIMINAR, ETC.

//5 MANERAS PARA ACCEDER AL DOM:

//getElementById => es un metodo del objeto document, y lo utilizamos para seleccionar los id del HTML.

const pId = document.getElementById('pId'); //van con comillas simples
console.log (pId);

//getElementsByClassName => se utiliza para seleccionar las clases declaradas en HTML.

const pClass = document.getElementsByClassName('pClass'); //cuando hay mas de una clase los ordena
console.log (pClass);

//getElementsByTagName => se utiliza si queremos llamar a una etiqueta en html.

const li = document.getElementsByTagName('li');
console.log (li);

//querySelector => nos recuerda a la manera de trabajar de CSS. Con este metodo solo se llama a 1
//querySelector => nos llama una etiqueta a la vez

const queryTag = document.querySelector("span");
console.log (queryTag);

const queryClass = document.querySelector(".queryClass"); //para llamar a la clase es como css con .
console.log (queryClass);

const queryId = document.querySelector("#queryId");
console.log (queryId);

//querySelectorAll => con este llamamos a todos. Ejemplo todos los parrafos.
















