function calcularPrecio() {
    console.log("hola");
    // Obtener el valor de cantidad y categoria seleccionado
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var categoria = document.getElementById("categoria").value;

    // Precio base
    var precioBase = 200;

    // Aplicar descuentos según la categoria
    var descuento = 0;
    if (categoria === "estudiante") {
        descuento = 0.8;
    } else if (categoria === "trainee") {
        descuento = 0.5;
    } else if (categoria === "junior") {
        descuento = 0.15;
    } 

    // Calcular el precio total
    var precioTotal = (precioBase - (precioBase * descuento)) * cantidad;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "$" + precioTotal.toFixed(2);
}

function borrarDatos() {
    // Limpiar los campos de entrada y el resultado
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").selectedIndex = 0;
    document.getElementById("resultado").textContent = "";
}