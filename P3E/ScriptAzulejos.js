function calcular() {
  var largo = parseFloat(document.getElementById("largo").value);
  var ancho = parseFloat(document.getElementById("ancho").value);
  var precio = parseFloat(document.getElementById("precio").value);

  var areaSuperficie = (largo * 100) * (ancho * 100);

  var areaAzulejo = 25 * 25;

  var cantidadAzulejos = (areaSuperficie / areaAzulejo);

  var precioTotal = cantidadAzulejos * precio;

  var resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = `
    <p><strong>Area de la superficie:</strong> ${areaSuperficie} cm2</p>
    <p><strong>Area de un azulejo:</strong> ${areaAzulejo} cm2</p>
    <p><strong>Cantidad de azulejos:</strong> ${cantidadAzulejos}</p>
    <p><strong>Precio total:</strong> $${precioTotal}</p>
  `;
}