/* 
----- Modules -----
Exportaciones
Exportación nombrada Permite exportar múltiples elementos de un módulo.
*/

// saludo.js
export const saludar = (nombre) => `Hola, ${nombre}`;
export const despedir = (nombre) => `Adiós, ${nombre}`;

// app.js
import { saludar, despedir } from './saludo.js';
console.log(saludar('Carlos')); // Hola, Carlos
console.log(despedir('Carlos')); // Adiós, Carlos
