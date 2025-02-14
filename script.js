// Seleccionamos el modal y los elementos
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("imgAmpliada");
const closeBtn = document.querySelector(".close");

// Capturamos todas las imágenes de la galería
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show"); // Agrega la animación
        }, 10);
        modalImg.src = this.src;
    });
});

// Cerrar modal al hacer click en "X"
closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // Espera a que termine la animación
});

// Cerrar modal si se hace click fuera de la imagen
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
});
