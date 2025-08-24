/* 
------- All about Variables ------- 
Hoisting
Las declaraciones de variables con var son "elevadas" al inicio del código, pero no su inicialización. Con let y const, también hay hoisting, pero no se pueden usar antes de declararlas.
*/

console.log(a); // undefined
var a = 10;

console.log(b); // Error: No se puede acceder antes de la declaración
let b = 20;
