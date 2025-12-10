// Función que procesa una compra y retorna un informe inmutable
export const procesarCompra = (cliente, productos) => {

    // 1. Validar cliente y productos con trycatch
    try {
        // Validamos que el cliente tenga los dos datos y el tipo
        if (typeof cliente.nombre !== 'string' || typeof cliente.correo !== 'string') {
            throw new Error("Datos del cliente invalidos");
        }

        // Validamos que sea un arreglo con al menos un producto
        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("La lista debe ser un arreglo con al menos un elemento");
        }

        // Validamos que cada producto tenga nombre y precio numérico
        for (let i = 0; i < productos.length; i++) {
            const producto = productos[i];
            if (!producto.nombre || typeof producto.precio !== 'number' || isNaN(producto.precio) || producto.precio <= 0) {
                throw new Error(`El producto ${i + 1} no es valido`);
            }
        }

    } catch (error) {
        // Capturamos el error de validación y lo mostramos
        console.error(`Error: ${error.message}`);
        // Se vuelve a lanzar para terminar la función
        throw error;
    }

    // Usamos spread para crear un nuevo objeto con los datos del cliente
    const nuevoCliente = { ...cliente };
    
    // 3. Usar destructuración para separar el primer producto
    const [primerProducto, ...restoProductos] = productos;

    // Calculamos el precio total
    // Sumamos el precio del primer producto y los precios del resto
    let precioTotal = primerProducto.precio;
    for (const producto of restoProductos) {
        precioTotal += producto.precio;
    }
    
    // Retornamo el objeto inmutable
    return Object.freeze({
        cliente: nuevoCliente, 
        total_productos: productos.length,
        precio_total: parseFloat(precioTotal.toFixed(2)),
        primer_producto: primerProducto.nombre
    });
};