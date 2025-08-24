/* 
----- Modules -----
Exportación por defecto
Permite exportar un único valor como predeterminado.
*/

// saludo.js
const saludar = (nombre) => `Hola, ${nombre}`;
export default saludar;

// app.js
import saludar from './saludo.js';
console.log(saludar('María')); // Hola, María
