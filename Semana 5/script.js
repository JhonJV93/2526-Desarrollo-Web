const inputUrl = document.getElementById("imageUrl");
const btnAdd = document.getElementById("addImage");
const btnDelete = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let imagenSeleccionada = null;

/* AGREGAR IMAGEN */
btnAdd.addEventListener("click", agregarImagen);

inputUrl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    agregarImagen();
  }
});

function agregarImagen() {
  const url = inputUrl.value.trim();

  if (url === "") {
    alert("Por favor ingresa una URL válida");
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.classList.add("fade-in");

  img.addEventListener("click", function () {
    seleccionarImagen(img);
  });

  gallery.appendChild(img);
  inputUrl.value = "";
}

/* SELECCIONAR IMAGEN */
function seleccionarImagen(img) {
  const imagenes = document.querySelectorAll(".galeria img");

  imagenes.forEach(function (imagen) {
    imagen.classList.remove("seleccionada");
  });

  img.classList.add("seleccionada");
  imagenSeleccionada = img;
}

/* ELIMINAR IMAGEN */
btnDelete.addEventListener("click", eliminarImagen);

document.addEventListener("keydown", function (e) {
  if (e.key === "Delete") {
    eliminarImagen();
  }
});

function eliminarImagen() {
  if (imagenSeleccionada) {
    imagenSeleccionada.remove();
    imagenSeleccionada = null;
  } else {
    alert("Selecciona una imagen primero");
  }
}
