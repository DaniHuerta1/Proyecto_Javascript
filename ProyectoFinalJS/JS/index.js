
alert ("Hola, Bienvenido/a");

function verificarEmail (){
    let preguntaSuscribir = Number(prompt("¿Deseas suscribirte a nuestras novedades? \n 1)Si \n 2)No \n Responde con 1 o 2"));

while (isNaN(preguntaSuscribir)){
    preguntaSuscribir = Number(prompt ("Ingresa solo numeros"))
}
    preguntaSuscribir == "1" ? alert ("A partir de ahora recibiras todas nuestras novedades")
    :alert ("Espero nuestra pagina sea de tu agrado!")
    
}

verificarEmail ();




let carrito = JSON.parse (localStorage.getItem("carrito")) || [];

const contenedorProductos = document.querySelector("#contenedor-productos");
const verCarrito = document.getElementById ("ver-carrito")
const modalContenedor = document.getElementById("modalContenedor")
const cantidadCarrito = document.getElementById("cantidadCarrito")





  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="card pt-3">
                <img src="${producto.image}" class="card-img-top" alt="ghost-of-tsushima" id="img-card">
                <div class="card-texto">
                    <h3 class="card-title" id="1" >${producto.nombre}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    </div>
                    </div>
`;
    contenedorProductos.append(div);

let comprar = document.createElement("button");
comprar.innerHTML= `<a class="btn btn-outline-dark mx-auto d-block">Agregar al carrito</a>`
comprar.className = "comprar";

div.append(comprar)

comprar.addEventListener("click", ()=> {

const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
if (repeat){
  carrito.map((prod) => {
    if (prod.id === producto.id){
      prod.cantidad++;
    }
  })
} else {
  carrito.push ({
    id: producto.id,
    image: producto.image,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: producto.cantidad,
  });
}
carritoCounter();
saveLocal ();
});

});


const saveLocal =  () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse (localStorage.getItem("carrito"));