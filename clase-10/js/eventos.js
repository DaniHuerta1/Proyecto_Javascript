"use strict"

//EVENTOS: SON LA MANERA QUE TENEMOS EN JS DE COLNTROLAR LAS ACCIONES DE LOS USUARIOS Y DEFINIR UN COMPORTAMIENTO DE LA PAGINA O APLICACION CUANDO SE PRODUZCAN

//COMO DEFINIR EVENTOS EN JS:

const btn = document.getElementById("btn");

//primera manera de ejecutar eventos:

//es traves de addEventListener (evento, funcion que queremos que se ejecute)

btn.addEventListener('click', function(){
    alert("Se esta ejecutando el evento")
})

const cambiarColor = document.getElementById("cambiarColor");

cambiarColor.addEventListener("click", function(){
document.body.style.backgroundColor = "blue";
});


//segunda manera de ejecutar eventos:
//la segunda manera que tenemos es a traves de los nodos

const btnNodo = document.getElementById("btnNodo");

//el evento es click
btnNodo.onclick = function(){
    alert("Se esta ejecutando el evento")
}


let menuBoton = document.getElementById("menuBoton");
let menu = document.getElementById("menu");

menuBoton.onclick = function(){ //Menu desplegable
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

//tercera manera de ejecutar eventos: esta es la que menos se recomienda, se ve en react.js

function jsEnHTML(){
   alert ("Este evento esta corriendo en HTML");
}


//------------------------------------------------------------------------------

//EVENTOS MAS COMUNES:

//EVENTOS CON MOUSE: nos permite interactuar a traves del mouse con HTML

const caja = document.getElementById("caja"); //nos muestra las veces que el mouse ingreso a la caja
//mouseover: se ejecuta cuando estamos sobre el elemento
caja.onmouseover = ()=>{
    console.log ("ingreso el mouse");
}
//mouseout: se ejecuta cuando el mouse no esta sobre el elemento
caja.addEventListener("mouseout", function(){
    console.log ("El mouse esta afuera")
})

//mousemove = va a detectar el movimiento del mouse sobre el elemento.

caja.addEventListener("mousemove", function(){
    console.log ("Se esta moviendo")
});

//----------------------------------------------------------------
let enlace = document.getElementById("enlace");

enlace.addEventListener("mouseover", function(){
    alert("Pasaste por encima campeon")
});


//-------------------------------------------------------------------
//mousedown y mouseup: oprimen y sueltan el boton
caja.onmousedown = function(){
    console.log ("deja oprimido el boton")
}

caja.onmouseup = function(){
    console.log ("soltaste el mouse")
}

//----------------------------------------------------------------------

//EVENTOS DE TECLADO:

//keydown y keyup: cuando se presiona una tecla y cuando se deja de presionar

let campoTexto = document.getElementById("campoTexto");

campoTexto.addEventListener("keydown", function (){
console.log ("presionaste una tecla KD")
})

campoTexto.addEventListener("keyup", function (){
    console.log ("soltaste una tecla KU")
    })

    //---------------------------------------------------------------------------

    const pizarra = document.getElementById("pizarra");
const contexto = pizarra.getContext("2d");
let dibujando = false;

//EVENTO MOUSE PARA DIBUJAR:

pizarra.addEventListener("mousedown", function(event){
dibujando = true;
dibujar(event.pageX - pizarra.offsetLeft, event.pageY - pizarra.offsetTop);
});

pizarra.addEventListener("mousemove", function(event){
if (dibujando){
dibujar(event.pageX - pizarra.offsetLeft, event.pageY - pizarra.offsetTop);
}
})

pizarra.addEventListener("mouseup", function(){
    dibujando = false;
})

function dibujar(x,y){
contexto.fillstyle= "black";
contexto.fillRect(x,y,5,5);
}

/*document.addEventListener("keydown", function(event){
    if (event.key === "delete"){
        contexto.clearReact (0,0, pizarra.clientWidth, pizarra.clientHeight);
    }
})*/

//EVENTO CHANGE: nos permite modificar valores

let seleccion = document.getElementById("seleccion");
let contenido = document.getElementById("contenido");

seleccion.addEventListener("change", function(){
    if(this.value === "opcion1"){
contenido.textContent = "Se selecciono la opcion1"
    }
    else if (this.value === "opcion2"){
contenido.textContent = "Se selecciono la opcion2"
    }
})

//-------------------------------------------------------------------

