// Función que recibe las configuraciones
export const configFinal = (...configs) => {
    
    // Objeto donde haremos la fusión de las propiedades
    let objetoBase = {};

    // Se valida que los elementos sean objetos
    try {
        for (const config of configs) {
            // Validamos si no es un objeto, si es null o si es un arreglo
            if (typeof config !== 'object' || config === null || Array.isArray(config)) {
                // Si la validación falla, lanzamos el error
                throw new Error("Se deben manejar objetos");
            }
            
            // Usamos spread para expandir el contenido en el nuevo objeto
            objetoBase = { ...objetoBase, ...config };
        }
    } catch (error) {
        // Capturamos el error
        console.error(`Error: ${error.message}`);
        
        // Retornamos un objeto inmutable indicando que falló
        return Object.freeze({
            validacion: false, 
            mensaje_error: error.message
        });
    }

    // Objeto retornado
    return Object.freeze({
        ...objetoBase,
        validacion: true 
    });
};