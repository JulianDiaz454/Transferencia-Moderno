// Función para combinar arreglos
export const fusionarCatalogos = (a, b) => {

    // Validamos los parámetros con trycatch
    try {
        // Validamos que algunos de los parametros no sea un arreglo
        if (!Array.isArray(a) || !Array.isArray(b)) {
            // Se lanza el error si alguno no es un array
            throw new Error("Los elementos deben ser arreglos");
        }

    } catch (error) {
        // Capturamos el error de validación y lo mostramos
        console.error(`Error: ${error.message}`);
        // Se vuelve a lanzar para termiar la función
        throw error;
    }

    // Fusionamos los catálogos con spread, creando un nuevo arreglo
    const catalogoCombinado = [...a, ...b];

    // Ordenamos por precio ascendente
    catalogoCombinado.sort((itemA, itemB) => itemA.precio - itemB.precio);

    // Se retorna el objeto inmutable )
    return Object.freeze(catalogoCombinado);
};