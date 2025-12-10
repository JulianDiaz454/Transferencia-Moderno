// Se importa la función
import { configFinal } from "./modules/Configuracion.js"

// Se crean las configuraciones
const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };


// Enviamos múltiples configuraciones
let configExitosa = configFinal(baseConfig, extraConfig);

// Imprimimos el resultado 
console.log("Configuración Final");
console.log(configExitosa);