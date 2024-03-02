"use strict"

const agregarAlCarritoBoton = document.querySelectorAll(".agregarAlCarrito");

agregarAlCarritoBoton.forEach(agregarAlCarritoBoton => {
    agregarAlCarritoBoton.addEventListener("click", agregarAlCarritoClicked);
});

const carritoCardContainer = document.querySelector("container");

function agregarAlCarritoClicked (event){
    const button = event.target;
const card = button.closest (".card")

const cardTittle = card.querySelector (".card-title").textContent;
const cardPrice = card.querySelector (".card-text").textContent;
const cardImage = card.querySelector (".card-img-top").src;

agregarAlCarrito (cardTittle, cardPrice, cardImage);
}

function agregarAlCarrito (cardTittle, cardPrice, cardImage){
const filaCarrito = document.createElement ("div");
const contenidoCarrito = `
<div class="col-md-6 col-lg-3">
                    <div class="card pt-3">
                        <img src=${cardImage} class="card-img-top" alt="ghost-of-tsushima" id="img-card">
                        <div class="card-body bg-body-secondary mt-3">
                            <h3 class="card-title">${cardTittle}</h3>
                            <p class="card-text">${cardPrice}</p>
                            <a href="#" class="btn btn-outline-dark mx-auto d-block agregarAlCarrito">Agregar al carrito</a>
                        </div>
                    </div>
`
filaCarrito.innerHTML = contenidoCarrito;
carritoCardContainer.append(filaCarrito);
}



const juegosPs4 = document.getElementById("juegos-ps4");
const productos = document.getElementById("productos");
const carrito = document.getElementById("carrito");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.getElementById("vaciarCarrito");

cargarEventListener();

function cargarEventListener() {
  productos.addEventListener("click", comprar);
  //carrito.addEventListener("click", eliminar);
  vaciarCarrito.addEventListener("click", vaciarCarrito);
}

function comprar(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregarAlCarrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
  const infoElemento = {
    imagen: elemento.querySelector("img").src,
    titulo: elemento.querySelector(".card-title").textContent,
    precio: elemento.querySelector(".cardText").textContent,
  };
  insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" width =100
     </td>
    <td>
    ${elemento.titulo}
    </td>
    <td>
    ${elemento.precio}
     </td>

    `;
    lista.appendChild(row);
}

/*function eliminar (e){
    e.preventDefault();
    let elemento,
    elementoNombre;

    if (e.target.classList.contains("borrar")){
e.target.parentElement.parentElement.remove();
elemento = e.target.parentElement.parentElement;
elementoNombre = elemento.querySelector("")
    }
}*/


/*function vaciarCarrito (){
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}*/