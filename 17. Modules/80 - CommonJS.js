/* 
----- Modules -----
CommonJS (CJS)
Este es el sistema de módulos que usa Node.js. Utiliza require para importar y module.exports para exportar.
*/

// Archivo: saludo.js - Exportar 
const saludar = (nombre) => `Hola, ${nombre}`;
module.exports = saludar;


// Archivo: app.js - Importar 
const saludar = require('./saludo');
console.log(saludar('Juan')); // Hola, Juan


// Nota: CommonJS es exclusivo de Node.js y no funciona directamente en el navegador.