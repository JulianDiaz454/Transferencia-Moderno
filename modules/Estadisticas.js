// Función que procesa el arreglo de jugadores y retorna un informe inmutable
export const estadisticas = (jugadores) => {

    // Verificamos la estructura con trycatch
    try {
        // Validamos que sea un arreglo y no este vacio
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("La lista de jugadores debe ser un arreglo y no puede estar vacia");
        }

        // Validamos la estructura interna de cada jugador
        for (let i = 0; i < jugadores.length; i++) {
            const jugador = jugadores[i];

            // Verificamos que la clave stats exista y sea un objeto
            if (!jugador.stats || typeof jugador.stats.puntos !== 'number' || typeof jugador.stats.asistencias !== 'number') {
                throw new Error(`El jugador en la posición ${i} no tiene una estructura correcta`);
            }
        }

    } catch (error) {
        // Capturamos el error de validación y lo mostramos
        console.error(`Error: ${error.message}`);
        // Se vuelve a lanzar para terminar la función
        throw error;
    }

    // Obtenemos los puntos del jugador 1
    const [{ stats: { puntos: puntosPrimerJugador } }] = jugadores;

    // Calculo de los puntos del equipo
    let puntosTotales = 0; 

    // Iteramos sobre cada objeto en el arreglo
    for (const jugador of jugadores) {
        // Sumamos los puntos de cada jugador al total
        puntosTotales += jugador.stats.puntos;
    }

    // Creamos una lista inmutable de jugadores procesados 
    const jugadoresProcesados = Object.freeze([...jugadores]);
    
    // 4. Devolver un objeto inmutable con los resultados
    return Object.freeze({
        puntos_primer_jugador: puntosPrimerJugador,
        puntos_totales_equipo: puntosTotales,
        lista_jugadores_procesados: jugadoresProcesados
    });
};