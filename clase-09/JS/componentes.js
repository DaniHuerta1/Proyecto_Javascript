"use strict";

/*const links = [
  {
    text: "Inicio",
    url: "#",
  },
  {
    text: "elementos",
    url: "../elementos.html",
  },
  {
    text: "componentes",
    url: "./componentes.html",
  },
];

const navBar = document.getElementById("navBar");

links.forEach((link) => {
  const ancla = document.createElement("a");
  ancla.textContent = link.text;
  ancla.href = link.url;
  navBar.appendChild(ancla);
});*/

//-------------------------------------------------------------------
//cards

//definimos la clase producto (La que contendra toda la información de nuestros productos)
class Producto{
  constructor(id, nombre, descripcion, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
  }
}

//array de objetos de productos

const productosArray =[
  new Producto("1", "Arroz", "Tucapel", "url", 1500),
  new Producto("2", "Fideos", "Lider", "url", 2500),
  new Producto("3", "Aceite", "Patito", "url", 3500),
  new Producto("4", "Azucar", "Pat", "url", 4500),
];

//llamamos a nuestros nodos desde HTML

const contenedorProductos = document.getElementById("productos-container");

//Ahora vamos a crear una funcion que esta funcion lo que hara es iterar y cree una nueva card

function agregarCards(productos) {
  productos.forEach(producto =>{
    const card = document.createElement("div"); //creando un div
    card.classList.add("card"); //agregando una clase al elemento div
    card.innerHTML = ` 
    <h2>${producto.nombre}</h2>
    <img src="${producto.imagen}" alt="">
<p>${producto.descripcion}</p>
<p>$${producto.precio}</p>
    `
    contenedorProductos.appendChild(card);
  });
}

agregarCards(productosArray);