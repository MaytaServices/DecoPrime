// Array para almacenar las notas
const notas = [];

// Función para agregar una nota
function agregarNota(nota) {
  notas.push(nota);
  console.log("Nota agregada:", nota);
}

// Función para obtener una cotización (ejemplo simplificado)
function obtenerCotizacion(valor1, valor2) {
  // Aquí puedes implementar tu lógica de cálculo de cotizaciones
  // Basado en los valores proporcionados y cualquier otra información relevante
  const cotizacion = valor1 * valor2;
  console.log("Cotización:", cotizacion);
  return cotizacion;
}

// Ejemplo de uso
agregarNota("Iniciar diseño del sitio web");
agregarNota("Seleccionar paleta de colores");

const resultadoCotizacion = obtenerCotizacion(100, 2);
console.log(resultadoCotizacion);