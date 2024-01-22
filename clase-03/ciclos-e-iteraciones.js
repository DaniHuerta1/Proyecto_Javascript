"use strict"

//CICLOS:

//CICLO POR CONTEO (COUNTED LOOP): FOT : Es controlado por nosotros ya que nosotros le indicamos de antemano cuantas veces queremos que se ejecute 
// CICLOS CONDICIONALES: WHILE Y DO WHILE: Este ciclo no es controlado por nosotros si no que responde a una condicion en la cual si se cumple termine el proceso

//Operadores:

//OPERADOR DE INCREMENTO : ++

/*let x = 5;
let y = x++; //aca esta en post-incremento
//let y = ++x; aca esta en pre-incremento 

console.log (y)*/

//post incremento = variable++, el valor de la variable se incremente despues de que se utiliza la expresion


//pre-incremento: ++variable= nos dice que el valor de la variable se incrementa despues que se utilice
// OPERADOR DE DECREMENTO : --




//CICLO FOR: 
/*for(inicializacion; condicion; actualizacion){
inicializacion (desde)=> aca se establece la variable de control y se asigne el inicio
condicion (hasta) => expresion logica, y vamos a determinar cuantas iteraciones genera el programa, siempre 
actualizacion =>
}*/

//EJEMPLO:
/*for (let i=0; i < 21; i++){
console.log ("iteracion Nro,", i);
}*/

//TABLA DE MULTIPLICAR, EJEMPLO:

/*const NUMERO =5;

for (let i = 0; i<=10; i++){
    const resultado = NUMERO * i;
    console.log (NUMERO + " x " + i + " = " + resultado);
}*/


//SENTENCIA BREAK =>

/*for (let i = 1; i <=10; i++){

    if ( i === 5){
        break;
    }
    console.log (i)
}*/


//SENTENCIA CONTINUE => se utiliza para saltar en la iteracion algun elemento (lo omite el codigo)

/*for (let i = 1; i <=10; i++){

    if ( i === 5){
        continue;
    }
    console.log (i)
}*/

//BUCLES POR CONDICION: 

//WHILE => en cuanto se cumple la condicion se termina

/*while ( condicion){
    //bloque de codigo a ejecutar mientras la condicion sea verdadera, en el momento que no lo es se termina.
}*/

/*let contador = 1; //inicio del contadorque se piensa evaluar

while (contador <= 5){
    console.log ("numero:" + contador);
    contador++ //incrementar
}

console.log ("blucle se completo")*/


//CREAR UN TEMPORIZADOR QUE HAGA CUENTA REGRESIVA

/*let segundo = 10;

while (segundo >=0){
    console.log ("cuenta regresiva" + segundo);
    segundo--
}

console.log ("Tiempo")*/

//SENTENCIA DO WHILE = > a diferencia de while, por lo menos una vez ejecuta el codigo antes de que se evalue 

/*do {
    //bloque de codigo a ejecutarse al menos una vez 
} while(condicion);*/

//EJEMPLO DOWHILE
//PROGRAMA PARA CALCULAR LA SUMA DE NUMEROS INGRESADOS POR EL USUARIO 

/*let suma = 0;
let continuar;

do{
    const NUMERO = parseFloat(prompt("Ingresar el numero"));

    if (!isNaN(NUMERO)){
        suma += NUMERO;
        continuar = prompt("quiere ingresar otro numero?(SI O NO)").toLowerCase();
    } 
    else {
alert ("ingresa un numero valido")
continuar = "si" //en caso de que no ingrese un numero el programa pueda continuar
    }

}while (continuar === "si");

console.log ("La suma total es:" + suma);*/

//SENTENCIA SWITCH : alternativa a if.. else se utiliza para toma de decisiones basadas en el valor de una expresion 

/*switch(expresion){
    case valor:
        //un codigo a ejecutar en caso que la expresion sea igual al valor
        case valor1: 

        break;
        case valor2:

        break;
        case valor3:

        break;
        default: codigo que se va a ejecutar en caso de que ningun case funcione
}*/


//EJEMPLO: PROGRAMA QUE NOS DE UN DIA DE LA SEMANA

/*const numeroDia =3;

switch (numeroDia){
    case 1 :
        console.log ("lunes");
        break;
        case 2: 
        console.log ("martes");
        break;
        case 3:
            console.log ("miercoles");
            break;
            default:
                console.log ("No existe el dia")
}*/



