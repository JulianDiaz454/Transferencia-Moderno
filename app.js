// Es importa la función
import { crearEstudiante } from "./modules/AgregarEstudiante.js"
// Se importa prompt_sync
import prompt_sync from "prompt-sync";
// Se le asigna la función a las constante
const prompt = prompt_sync();

// Solicitamos el nombre del estudiante
let nombre = prompt("Ingrese el nombre del estudiante: ");

// Solicitamos las notas
let nota1 = Number(prompt("Ingrese la nota 1: "))
let nota2 = Number(prompt("Ingrese la nota 2: "))
let nota3 = Number(prompt("Ingrese la nota 3: "))
let nota4 = Number(prompt("Ingrese la nota 4: "))

// Enviamos los valores por medio de los argumentos y recibimos el objeto
let obj = crearEstudiante(nombre, nota1, nota2, nota3, nota4);

// Imprimimos el resultado
console.log(obj);