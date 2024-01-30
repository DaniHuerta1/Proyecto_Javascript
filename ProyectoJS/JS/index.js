"use strict"

alert ("Hola, Bienvenido/a");

function verificarEmail (){
    let preguntaSuscribir = Number(prompt("¿Deseas suscribirte a nuestras novedades? \n 1)Si \n 2)No \n Responde con 1 o 2"));

while (isNaN(preguntaSuscribir)){
    preguntaSuscribir = prompt ("Ingresa solo numeros")
}
    if (preguntaSuscribir == "1"){
         alert ("A partir de ahora recibiras todas nuestras novedades")
    }
    else if (preguntaSuscribir != "1" && preguntaSuscribir != "2"){
        alert ("Por favor introduce una respuesta valida")
}
    else {
        alert ("Espero nuestra pagina sea de tu agrado!")
    }
}

verificarEmail ();
