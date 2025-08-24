/* 
----- Modules -----
Exportar todo
Permite exportar todos los elementos de un módulo desde otro.
*/

// utilidades.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// index.js
export * from './utilidades.js';

// app.js
import { sumar, restar } from './index.js';
console.log(sumar(5, 3)); // 8
console.log(restar(5, 3)); // 2
