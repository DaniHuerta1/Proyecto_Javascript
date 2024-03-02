"use strict";

const productos = [
  { id: 1, image: "./img/JuegosPS4/ghostoftsushima.webp" ,nombre: "Ghost of tsushima", precio: 49.99 },
  { id: 2, nombre: "Shadow of the Colossus", precio: 21.99 },
  { id: 3, nombre: "Red Dead Redemption 2", precio: 29.99 },
  { id: 4, nombre: "Uncharted Collection", precio: 21.99 },
  { id: 5, nombre: "Overcooked 1 y 2", precio: 32.99 },
  { id: 6, nombre: "Stray", precio: 45.99 },
  { id: 7, nombre: "Spider-Man Miles Morales", precio: 20.99 },
  { id: 8, nombre: "The Last of Us", precio: 19.99 },
  { id: 9, nombre: "The Last of Us 2", precio: 24.99 },
  { id: 10, nombre: "The Witcher 3-Wild Hunt", precio: 31.99 },
  { id: 11, nombre: "Watch Dogs", precio: 24.99 },
  { id: 12, nombre: "Watch Dogs 2", precio: 24.99 },
];

const contenedorProductos = document.querySelector("#contenedor-productos");


function cargarProductos() {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
                        <div class="card-body bg-body-secondary mt-3">
                        <img src="${producto.image}" class="card-img-top" alt="ghost-of-tsushima" id="img-card">
                            <h3 class="card-title" id="1" >${producto.nombre}</h3>
                            <p class="card-text">${producto.precio}}</p>
                            <a href="#" class="btn btn-outline-dark mx-auto d-block" id = ${producto.id}>Agregar al carrito</a>
                        </div>
    `;

    contenedorProductos.append(div);
  });
}

cargarProductos();
