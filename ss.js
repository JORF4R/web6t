var productCount = 0;

function añadirAlCarrito(boton) {
    productCount += 1;
    $('#productCount').text(productCount);
    event.stopPropagation();
    // Obtener el contenedor de la tarjeta donde se encuentra el producto
    const card = boton.closest('.card');
    
    // Obtener el nombre del producto desde el h5 con la clase 'card-title'
    const nombreProducto = card.querySelector('.card-title').textContent;
    
    // Crear un nuevo elemento de lista
    const itemLista = document.createElement('li');
    itemLista.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
    // Agregar el nombre del producto
    const spanNombre = document.createElement('span');
    spanNombre.textContent = nombreProducto;
    
    // Crear el botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
    botonEliminar.textContent = 'Eliminar';
    
    // Añadir el evento al botón para eliminar el producto
    botonEliminar.addEventListener('click', function() {
        eliminarProducto(itemLista);
        
    });
    
    // Agregar el nombre del producto y el botón al elemento de lista
    itemLista.appendChild(spanNombre);
    itemLista.appendChild(botonEliminar);
    
    // Agregar el producto al listado del carrito
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.appendChild(itemLista);
}
function goBack() {
    window.history.back();
}
function eliminarProducto(item) {
    // Remover el elemento de la lista del carrito
    item.remove();
    
    // Actualizar el contador de productos
    productCount -= 1;
    $('#productCount').text(productCount);
}

let currentCategory = 'all'; // Guardamos la categoría seleccionada

function filterProducts(category) {
    currentCategory = category; // Guardar la categoría actual
    var products = document.querySelectorAll('.articulo');
    event.preventDefault(); 
    products.forEach(function(product) {
        const matchesCategory = (category === 'all' || product.getAttribute('data-category') === category);
        const matchesSearch = product.textContent.toLowerCase().includes(document.querySelector("#buscador").value.toLowerCase());

        // Solo muestra los productos que coincidan con la categoría y la búsqueda
        if (matchesCategory && matchesSearch) {
            product.classList.remove('oculto');
        } else {
            product.classList.add('oculto');
        }
    });
}
// Manejar la expansión/cierre de las cards
document.querySelectorAll('.card-clickable').forEach(card => {
    card.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en la card dispare el evento global

        const description = card.querySelector('.product-description');

        // Cerrar cualquier otra card abierta antes de abrir esta
        closeAllCards();

        if (description.style.display === 'none') {
            description.style.display = 'block';
            card.classList.add('expanded');
        } else {
            description.style.display = 'none';
            card.classList.remove('expanded');
        }
    });
});

// Función para cerrar todas las cards abiertas
function closeAllCards() {
    document.querySelectorAll('.card-clickable').forEach(card => {
        const description = card.querySelector('.product-description');
        if (description.style.display === 'block') {
            description.style.display = 'none';
            card.classList.remove('expanded');
        }
    });
}

// Cerrar las cards si haces clic fuera de ellas
document.addEventListener('click', function() {
    closeAllCards();
});


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
        if (e.key === "Escape") e.target.value = ""; // Limpia la búsqueda al presionar Escape

        var products = document.querySelectorAll('.articulo');
        products.forEach(function(product) {
            const matchesSearch = product.textContent.toLowerCase().includes(e.target.value.toLowerCase());
            const matchesCategory = (currentCategory === 'all' || product.getAttribute('data-category') === currentCategory);

            // Solo muestra los productos que coincidan con la búsqueda y la categoría
            if (matchesSearch && matchesCategory) {
                product.classList.remove('oculto');
            } else {
                product.classList.add('oculto');
            }
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
