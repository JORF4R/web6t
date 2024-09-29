$(document).ready(function () {
    // Actualizar el contador de productos (esto debería estar basado en la lógica de tu aplicación)
    var productCount = 2; // Ejemplo: hay 2 productos en el carrito
    $('#productCount').text(productCount);

    // Mostrar/ocultar el carrito al hacer clic en el botón del carrito
    $('#cartButton').click(function () {
        $('#cartCard').toggle();
    });

    // Cerrar el carrito al hacer clic fuera de él
    $(document).click(function(event) {
        if (!$(event.target).closest('#cartButton, #cartCard').length) {
            $('#cartCard').hide();
        }
    });
});
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })
