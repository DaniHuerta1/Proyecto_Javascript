"use strict"

alert ("Hola, Bienvenido/a");

function verificarEmail (){
    let preguntaSuscribir = Number(prompt("¿Deseas suscribirte a nuestras novedades? \n 1)Si \n 2)No \n Responde con 1 o 2"));

while (isNaN(preguntaSuscribir)){
    preguntaSuscribir = Number(prompt ("Ingresa solo numeros"))
}
    if (preguntaSuscribir == "1"){
         alert ("A partir de ahora recibiras todas nuestras novedades")
    }
    else if (preguntaSuscribir != "1" && preguntaSuscribir != "2"){
        alert ("Por favor introduce una respuesta valida")
        preguntaSuscribir = Number(prompt("¿Deseas suscribirte a nuestras novedades? \n 1)Si \n 2)No \n Responde con 1 o 2"));
}
    else {
        alert ("Espero nuestra pagina sea de tu agrado!")
    }
}

verificarEmail ();

const productos = [
    {id: 1, nombre: "Ghost of tsushima", tipo: "Ps4", categoria: "accion y aventura", precio: 49.990},
    {id: 2, nombre: "Shadow of the Colossus", tipo: "Ps4", categoria: "accion y aventura", precio: 21.990},
    {id: 3, nombre: "Red Dead Redemption 2", tipo: "Ps4", categoria: "accion y aventura", precio: 29.990},
    {id: 4, nombre: "Uncharted Collection", tipo: "Ps4", categoria: "accion y aventura", precio: 21.990},
    {id: 5, nombre: "Overcooked 1 y 2", tipo: "Ps4", categoria: "aventura, multijugador", precio: 32.990},
    {id: 6, nombre: "Stray", tipo: "Ps4", categoria: "aventura", precio: 45.990},
    {id: 7, nombre: "Spider-Man Miles Morales", tipo: "Ps4", categoria: "accion y aventura", precio: 20.990},
    {id: 8, nombre: "The Last of Us", tipo: "Ps4", categoria: "accion, aventura, suspenso", precio: 19.990},
    {id: 9, nombre: "The Last of Us 2", tipo: "Ps4", categoria: "accion, aventura, suspenso", precio: 24.990},
    {id: 10, nombre: "The Witcher 3-Wild Hunt", tipo: "Ps4", categoria: "accion y aventura", precio: 31.990},
    {id: 11, nombre: "Watch Dogs", tipo: "Ps4", categoria: "accion y aventura", precio: 24.990},
    {id: 12, nombre: "Watch Dogs 2", tipo: "Ps4", categoria: "accion y aventura", precio: 24.990},
]

let carrito = [];
let seleccion = prompt("Deseas comprar un juego?");

if (seleccion === "si"){
    alert("Juegos disponibles:")
    let juegosDisponibles = productos.map((producto) => producto.nombre + producto.precio);
    alert (juegosDisponibles.join(" - "));
} else if (seleccion === "no"){
    alert("Hasta pronto");
}

function agregarAlCarrito(nombreProducto){
const productoEncontrado = productos.find(productos => productos.nombre == nombreProducto);
if (productoEncontrado){
    carrito.push(productoEncontrado);
    console.log (`Producto ${productoEncontrado.nombre} agregado al carrito`)

}else {
    console.log ("Producto no encontrado")
}
}

agregarAlCarrito("Ghost of tsushima");
agregarAlCarrito("The Last of Us 2");

console.log ("Contenido del carrito:", carrito);


