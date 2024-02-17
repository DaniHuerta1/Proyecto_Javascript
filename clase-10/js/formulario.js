"Use strict"

//TRAER LOS DIFERENTES INPUT:

let nombreInput = document.getElementById("nombre");
let apellidoInput = document.getElementById("apellido");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");


emailInput.addEventListener("input", function(){
    if (!this.validity.valid){
        emailError.style.display = "block";
    }else {
        emailError.style.display = "none";
    }
})

let registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", function(event){
if (!nombreInput.validity.valid || !apellidoInput.validity.valid || !emailInput.validity.valid){
if (!nombreInput.validity.valid){
    alert ("Ingresa tu nombre correcto por favor")
}
if (!apellidoInput.validity.valid){
    alert("Ingresa tu apellido correcto por favor")
}
if (!emailInput.validity.valid){
    emailError.style.display = "block"
    alert ("Ingreso tu correo correcto por favor")
}
event.preventDefault();//evita que el formulario se recargue si tiene algún error
} else {
    alert ("Registro Exitoso");
}
})