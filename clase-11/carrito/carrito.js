"use strict"

document.getElementById("loginFormulario").addEventListener("submit", function(e){
    e.preventDefault(); //e.preventDefaul es para que el formulario no se recargue
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    //verificar las credenciales
if (usuario === "usuario" && password === "password"){
    localStorage.setItem("logCorrecto", true)

    //esta linea de codigo lo que hace es redireccionarnos a otro HTML
    window.location.href = "sesion.html";
} 
else {
    document.getElementById("mensajeLogin").innerText = "Datos invalidos";
}

})

//Comprobar si el usuario esta conectado

window.addEventListener("load",function(){
    if (localStorage.getItem("logCorrecto")){
        this.window.location.href = "sesion.html"; //redirigiendo a la pagina asignada
    }
})


//--------------------------------------------------------------------------------------------------

//CARRITO DE COMPRAS:

//datos de productos:

const productos = [
{id: 1, nombre: "Amd64", precio: 40},
{id: 2, nombre: "Placa de video", precio: 50},
{id: 3, nombre: "Memoria RAM 64MB", precio: 30},
]

//RENDERIZAR LOS PRODUCTOS

function renderizarProductos(){
    const contenedorProductos = document.getElementById("contenedor-Productos");
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const elementoProducto = document.createElement("div");
        elementoProducto.classList.add("producto");
        elementoProducto.textContent = `
        ${producto.nombre} - ${producto.precio};
        `
        elementoProducto.addEventListener("click", ()=> agregarCarrito(producto));
        contenedorProductos.appendChild(elementoProducto);
    })
}


//RENDERIZAR SIGNIFICA MOSTRAR EN PANTALLA. 

//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO:

function agregarCarrito(producto){
const itemCards = JSON.parse (localStorage.getItem("cards")) || [];
itemCards.push(producto);
localStorage.setItem("cards", JSON.stringify(itemCards));
renderCards();
}

//FUNCION PARA RENDERIZAR LOS PRODUCTOS EN EL CARRITO:

function renderCards(){
    const cardItem = JSON.parse(localStorage.getItem("cards")) || [];
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";

    cardItem.forEach(item =>{
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.nombre} - ${item.precio}`
        cartList.appendChild(cartItem);
    })
}


//RENDERIZAR PRODUCTOS:

window.addEventListener("load",()=>{
    renderizarProductos();
    renderCards();
});


//-----------------------------------------------



const contenidoCarrito = document.getElementById("juegos-ps4");

//functions:

loadEventListener();
function loadEventListener(){
contenidoCarrito.addEventListener("click", addProduct);
}


function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains("btn")){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}
