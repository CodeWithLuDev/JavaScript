/* 
----- Data Structures -----
Indexed Collections (Arrays, Typed Arrays)
Arrays
Lista ordenada de elementos. Los índices son numéricos y comienzan desde 0.

Typed Arrays
Arrays que contienen un solo tipo de dato, usados para manejar datos binarios de bajo nivel.
*/

// Arrays
let colores = ["rojo", "azul", "verde"];
console.log(colores[1]); // azul


// Typed Arrays
let buffer = new ArrayBuffer(16); // Crear buffer de 16 bytes
let view = new Uint8Array(buffer); // Vista como array de enteros sin signo
view[0] = 255;
console.log(view[0]); // 255

