// Es importa la función
import { estadisticas } from "./modules/Estadisticas.js"

// Datos de prueba
const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },
    { nombre: "Carlos", stats: { puntos: 12, asistencias: 3 } }
];

// Enviamos el arreglo de jugadores y obtenemos el retorno
let informeEstadistico = estadisticas(jugadores);

// Imprimimos el informe
console.log("Informe Estadístico del Equipo:");
console.log(informeEstadistico);