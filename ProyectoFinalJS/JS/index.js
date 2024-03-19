

function novedades (){
    let preguntaSuscribir = Swal.fire({
      title: "¿Deseas suscribirte a nuestras novedades?",
      showDenyButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#008000",
      denyButtonText: "No",
      background: "#f5f5f5"
    }).then((result) => {
      if (result.isConfirmed) {
        const { value: email } =  Swal.fire({
          title: "Ingresa tu email",
          input: "email",
          inputLabel: "",
          inputPlaceholder: "Ingresa tu email",
          confirmButtonText: "Ok",
          confirmButtonColor: "#008000",
        });
        if (email) {
          Swal.fire(`Entered email: ${email}`);
        }
      } else if (result.isDenied) {
        Swal.fire({
          title: "Espero nuestra pagina sea de tu agrado!",
          confirmButtonText: "Ok",
          confirmButtonColor: "#008000",
        });
      }
    });
    
}

novedades ();


let carrito = JSON.parse (localStorage.getItem("carrito")) || [];

const contenedorProductos = document.querySelector("#contenedor-productos");
const verCarrito = document.getElementById ("ver-carrito")
const modalContenedor = document.getElementById("modalContenedor")
const cantidadCarrito = document.getElementById("cantidadCarrito")

"¿Deseas suscribirte a nuestras novedades? \n 1)Si \n 2)No \n Responde con 1 o 2"

const getProducts = async () => {
const response = await fetch ("data.json");
const data = await response.json();

data.forEach((producto) => {
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


};
getProducts ();




const saveLocal =  () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse (localStorage.getItem("carrito"));