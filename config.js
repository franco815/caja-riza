// Configuración del dashboard de Caja RIZA.
// Lo único que tenés que cambiar es sheetId (te lo da el script al correrlo).
window.RIZA_CONFIG = {
  // ID de la planilla "Caja RIZA". Es la parte larga del link:
  // https://docs.google.com/spreadsheets/d/  ESTO_ES_EL_ID  /edit
  // Mientras esté vacío, el dashboard muestra datos de ejemplo.
  sheetId: "",

  sheetName: "Respuestas",
  nombre: "RIZA",
  logo: "logo.png",          // subí el logo al repo con este nombre
  colorAcento: "#85896e",    // verde oliva del logo
  refrescoMinutos: 5,

  // Títulos de las preguntas del formulario (deben coincidir exacto)
  columnas: {
    tipo: "¿Qué cargás?",
    fechaRetiro: "Fecha del retiro",
    cierre: "Recaudado en efectivo según cierre",
    gastosLocal: "Gastos pagados con la caja del local",
    detalleGastos: "Detalle de esos gastos",
    recibido: "Efectivo que recibí",
    notaRetiro: "Nota del retiro",
    fechaSalida: "Fecha de la salida",
    tipoSalida: "Tipo de salida",
    montoSalida: "Monto de la salida",
    detalleSalida: "Detalle de la salida",
    fechaAjuste: "Fecha del ajuste",
    montoAjuste: "Monto del ajuste",
    motivoAjuste: "Motivo del ajuste"
  }
};
