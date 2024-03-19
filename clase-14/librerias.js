//Sweet alert

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  Swal.fire({
    title: "CoderHouse",
    text: "Aprende Haciendo",
    imageUrl: "./marca-de-verificacion.png",
    confirmButtonText: "aceptar",
  });
});

btn2.addEventListener("click", () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
});

//Toastify:

const toastify = document.getElementById("toastify");

toastify.addEventListener("click", () => {
Toastify({
    text: "producto agregado al carrito",
duration: 2000,
position: "right",
gravity: "top",
style: {
    background: "red"
}
}).showToast();
});


//chart.js 


/*const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });*/


  //Cleave.js

  const cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: '{country}',
  })


  //libreria Granim.js (buscar)
  //libreria typeitjs (buscar)
  //libreria luxon (buscar)
  //libreria anime.js (buscar)

