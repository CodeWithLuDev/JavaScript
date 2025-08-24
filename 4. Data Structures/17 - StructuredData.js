/* 
----- Data Structures -----
Structured Data (JSON - JavaScript Object Notation)
Formato ligero para almacenar e intercambiar datos. Es un texto que sigue una estructura tipo objeto.
Métodos comunes: JSON.stringify() para convertir objetos a JSON, y JSON.parse() para convertir JSON a objetos.
*/

// Objeto JavaScript
let persona = { nombre: "Ana", edad: 25 };
// Convertir a JSON
let json = JSON.stringify(persona);
console.log(json); // {"nombre":"Ana","edad":25}

// Convertir de JSON a objeto
let objeto = JSON.parse(json);
console.log(objeto.nombre); // Ana
