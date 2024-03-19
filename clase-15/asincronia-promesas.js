//Asincronia

 //Threads => nos dice que solo podemos hacer una cosa a la vez
//bloqueante: una tarea no devuelve el control de la logica de lo que esta haciendo hasta ser completado. alert.
//no bloqueante => una tarea se puede devolver inmediatamente independiente del resultado 

//sincronismo: refiere a la ejecucion de operacion en un orden secuencial.

/*console.log ("inicio de programa")

function sincronismo (){
    for(let i = 0; i < 3; i++){
        console.log ("itere " + (i+1));
    }
}

sincronismo();

console.log ("fin de programa");

//ASINCRONISMO 

//Las operaciones asincronas son aquellas que no van a bloquear el hilo del programa 
//nos va a permitir ejecutar operaciones "Como si fueran en un segundo plano"
//nos va a permitar ejecutar operacion en distintos (multiple thread)

//setTimeOut => ejecutar funciones despues de un cierto periodo de tiempo 

//setTimeout(funcion, declaramosElTiempoEnMiliSegundos)

console.log ("inicio de programa")

setTimeout(function(){
    console.log ("Este es un ejemplo de operación asincrona")
},4000
)
console.log ("fin de programa");



function cambiarElemento (){
    const elemento = document.getElementById("elemento").innerHTML = "proyecto-Daniel"
}

setTimeout(cambiarElemento, 3000);

function cambiarElemento2 (){
    const elemento = document.getElementById("elemento").innerHTML = "proyecto-Guille"
}

setTimeout(cambiarElemento2, 6000);*/



const mensaje = "Hola gente";
const elemento2 = document.getElementById("elemento2");
let indice = 0;

function mostrarLetra (){
elemento2.textContent += mensaje[indice];
indice++;
if (indice < mensaje.length){
    setTimeout(mostrarLetra, 1000);
}
}


setTimeout(mostrarLetra, 1000);


//callback => refiere a una funcion que se pasa como argumento a otra funcion 
//son utilizados en situaciones donde las operaciones toman un tiempo y no bloquean el hilo principal 

//CALLSTACK (PILA)