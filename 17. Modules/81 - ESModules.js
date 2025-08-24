/* 
----- Modules -----
ES Modules (ESM)
El sistema de módulos estándar de JavaScript. Funciona tanto en el navegador como en Node.js (desde la versión 12 en adelante). Utiliza import y export.
*/

// Archivo: saludo.js - Exportar 
export const saludar = (nombre) => `Hola, ${nombre}`;

// Archivo: app.js - Importar 
import { saludar } from './saludo.js';
console.log(saludar('Ana')); // Hola, Ana


// Nota: Para usar ESM en Node.js, el archivo debe tener extensión .mjs o incluir "type": "module" en el archivo package.json.