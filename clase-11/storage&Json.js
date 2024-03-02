"use strict"

//STORAGE: API de almacenamiento WEB, permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexión con el servidor.

// Existen 2 tipos de Storage:

//LocalStorage y sessionStorage

//localStorage: la info se va a guardar en el navegador de forma indefinida. Cuando cerramos el navegador y lo volvemos a abrir y permanecen los cambios.

//sessionStorage: La info se guarda de forma temporal. Los datos almacenados los vamos a mantener, siempre y cuando tengamos el navegador abierto.


//setItem: es un metodo para almacenar datos de manera local en el navegador.
//localStorage.setItem(llave, valor)

/*localStorage.setItem("saludo", "buenas gente");
localStorage.setItem("numero", 1234);
localStorage.setItem("booleano",true);*/


//getItem=> es el metodo con el cual nosotros vamos a recuperar el valor asocionado a las llaves.

/*let saludo = localStorage.getItem("saludo");
console.log (saludo);*/

//parseInt() cambia un string a numero

//----------------------------------------------------------------------------------------------

const modo = document.getElementById("modo");
//setear la info, dar las instrucciones
modo.addEventListener("click",()=> {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark");
}else {
    localStorage.setItem("modo", "claro");
}
})

//document.body =>accedemos a los elementos HTML en Body
//classList. => propiedad con la que accedemos a CSS
//.toggle=> sirve para modificar el estado de una clase especifica
//contains => verifica si el nombre de una clase esta presente en el elemento


//recuperar la información

const bodyModo = localStorage.getItem("modo");

if (bodyModo === "dark"){
    document.body.classList.add("dark");
}else {
    document.body.classList.remove("dark");
}
//-------------------------------------------------------------------------------------------------------------------

localStorage.setItem("saludo", "buenas gente");
localStorage.setItem("numero", 1234);
localStorage.setItem("booleano",true);

//removeItem => elimina especificamente un elemento almacenado, a través de su clave.

//EJEMPLO:

localStorage.removeItem("saludo");

//clear=> elimina todos los elementos almacenados en el localStorage

localStorage.clear();


//JSON => JavaScript object Notion: formato de intercambio de datos, que tiene una sintaxis ligeray facil de leer.
//JSON convierte datos en string (cadena de texto)

//JSON.stringify podemos transformar un objeto JS a un string en formato JSON.

let persona = {nombre: "Dani", edad: "27", ciudad: "Santiago"};

const personaJSON = JSON.stringify(persona);

localStorage.setItem("persona", personaJSON);

const usuarioEnElLocal = localStorage.getItem("persona");

console.log (usuarioEnElLocal);

//JSON.parse => Convierte el JSON, de string a objeto.

const usuarioObjeto = JSON.parse(usuarioEnElLocal);
console.log (usuarioObjeto);



