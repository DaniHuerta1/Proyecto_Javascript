const mostrarCarrito = () => {
    modalContenedor.innerHTML = "";
    modalContenedor.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader"
  modalHeader.innerHTML = `
  <h2 class="modalHeader-title">Carrito</h2>
  `
  modalContenedor.append(modalHeader);
  
  
  const modalButton = document.createElement("h2");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";
  
  modalButton.addEventListener("click", ()=> {
    modalContenedor.style.display = "none";
  });
  
  modalHeader.append(modalButton);
  
  carrito.forEach((producto) => {
    
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
  <img src ="${producto.image}">
  <h3> ${producto.nombre}</h3>
  <p> $${producto.precio}</p>
  <span class="restar"> - </span>
  <p> Cantidad: ${producto.cantidad}</p>
  <span class="sumar"> + </span>
  <p> Total: ${producto.cantidad * producto.precio} </p>
  <span class ="eliminar-producto">❌ </span>

  `;
  
  modalContenedor.append(carritoContent);

let restar = carritoContent.querySelector(".restar");
restar.addEventListener("click", () => {
  if (producto.cantidad !== 1 ){
    producto.cantidad--;

  }
  saveLocal();
  mostrarCarrito();

} );

let sumar = carritoContent.querySelector(".sumar");
sumar.addEventListener("click", () => {
producto.cantidad++;
saveLocal();
mostrarCarrito();

});

let eliminar = carritoContent.querySelector(".eliminar-producto");
eliminar.addEventListener("click", () => {
eliminarProducto(producto.id);
})


  });
  



  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
  
  const totalBuying = document.createElement ("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `
  Total a pagar: ${total}
  `
  modalContenedor.append(totalBuying);

};

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find ((producto) => producto.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
    
 });
 carritoCounter();
 saveLocal ();
 mostrarCarrito();
};


const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength =  carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
 cantidadCarrito.innerText =  JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();