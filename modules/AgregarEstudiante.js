// Función que crea el objeto de estudiante
export const crearEstudiante = (nombre, ...notas) => {
    let primeraNota;
    let restoNotas = [];
    let sumaRestoNotas = 0;

    try {
        for (let i = 0; i < notas.length; i++) {
            // Tomamos por medio del indice la nota
            const notaActual = notas[i];

            // Validamos si la nota no es un número
            if (isNaN(notaActual)) {
                // Se lanza el error
                throw new Error(`La nota en la posición ${i + 1} no es un valor de tipo númerico`);
            }

            // Separamos el primer elemento del arreglo
            if (i === 0) {
                primeraNota = notaActual;
            } else { // Se envian las demas notas al arreglo
                restoNotas.push(notaActual);
                sumaRestoNotas += notaActual;
            }
        }
    } catch (error) {
        // Capturamos el error de validación y lo mostramos
        console.error(`Error: ${error.message}`);
        // Se vuelve a lanzar para termiar la función
        throw error;
    }

    // Con el operador ternario manejamos division por 0
    const promedioResto = totalRestoNotas > 0 ? sumaRestoNotas / restoNotas.length : 0;

    // Se retorna el objeto
    return Object.freeze({
        nombre,
        primeraNota,
        promedioResto: parseFloat(promedioResto.toFixed(2)), // Redondeamos el promedio
        notas_totales: notas.length
    });
};