function obtenerDiaSemana(numeroDia) {
    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[numeroDia];
}

var fechaActual = new Date();
var numeroDiaActual = fechaActual.getDay();
var diaSemanaActual = obtenerDiaSemana(numeroDiaActual);
console.log("Hoy es " + diaSemanaActual);
