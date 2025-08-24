/* 
------- All about Variables ------- 
Variable Scopes (block, function, global)
Global: Accesible en cualquier parte del código.
Función: Accesible solo dentro de la función donde se declaró.
Bloque: Accesible solo dentro del {} donde fue declarado (aplica a let y const).
*/

{
    let blockScope = "Bloque";
    console.log(blockScope); // Funciona
}
// console.log(blockScope); // Error

function miFuncion() {
    var funcionScope = "Función";
    console.log(funcionScope);
}
miFuncion();
// console.log(funcionScope); // Error

