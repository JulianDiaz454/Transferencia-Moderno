// Es importa la función
import { procesarCompra } from "./modules/ProcesarCompra.js"

// Se importa prompt_sync
import prompt_sync from "prompt-sync";
// Se le asigna la función a las constante
const prompt = prompt_sync();


// Solicitamos los valores al usuario
let nombreCliente = prompt("Ingrese el nombre del cliente: ");
let correoCliente = prompt("Ingrese el correo del cliente: ");  

// Construimos el objeto cliente 
const clienteConsola = {
    nombre: nombreCliente,
    correo: correoCliente
};

// Se genera una lista de productos
const productosFijos = [
    { nombre: "Balon de micro", precio: 70000 },
    { nombre: "Medias Anti deslizantes", precio: 50000 },
    { nombre: "Uniforme del Barcelona", precio: 100000 }
];

// Se llama a la función y obtenemos el retorno
let informeCompra = procesarCompra(clienteConsola, productosFijos);

// Imprimimos el informe
console.log(informeCompra); 