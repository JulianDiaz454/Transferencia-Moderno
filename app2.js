// Es importa la función
import { fusionarCatalogos } from "./modules/FusionarCatalogos.js"

// Definimos los catálogos
const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 },
];

// Prueba de fusión
try {
    // Enviamos los catálogos para fusionar
    let catalogoFinal = fusionarCatalogos(catalogoA, catalogoB);

    // Imprimimos el resultado
    console.log("Catálogo Fusionado y Ordenado:");
    console.log(catalogoFinal);

} catch (error) {
    // Capturamos cualquier error de validación
    console.log(`Error capturado: ${error.message}`);
}