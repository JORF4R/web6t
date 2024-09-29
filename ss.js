var productCount = 0;

$(document).ready(function () {
    // Actualizar el contador de productos
    $('#productCount').text(productCount);  // Ajustamos a jQuery en ambas funciones

    // Mostrar/ocultar el carrito al hacer clic en el botón del carrito
    $('#cartButton').click(function () {
        $('#cartCard').toggle();
    });

    // Cerrar el carrito al hacer clic fuera de él
    $(document).click(function (event) {
        if (!$(event.target).closest('#cartButton, #cartCard').length) {
            $('#cartCard').hide();
        }
    });
});

// Función para aumentar el número de productos en el carrito
function aumentar() {
    productCount += 1;
    $('#productCount').text(productCount);  // Usar jQuery consistentemente
}

// Filtrar artículos con el buscador
document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll(".articulo").forEach(fruta => {
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro")
                : fruta.classList.add("filtro");
        });
    }
});

// Carrusel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Ir a la siguiente imagen
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Ir a la imagen anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Función para iniciar el carrusel automático
function startAutoCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 3000);
}
startAutoCarousel();

// FAQs
const tarjetasFaq = document.querySelectorAll('.tarjeta-faq');

// Agregar evento de clic a cada tarjeta
tarjetasFaq.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        const respuesta = tarjeta.querySelector('.respuesta');
        respuesta.classList.toggle('abierto');
    });
});

