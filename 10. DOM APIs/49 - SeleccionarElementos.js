/* 
----- DOM APIs -----
Seleccionar Elementos del DOM
Puedes seleccionar elementos para modificarlos o interactuar con ellos.

Métodos comunes:

document.getElementById(id) - Selecciona un elemento por su ID.
document.querySelector(selector) - Selecciona el primer elemento que coincide con un selector CSS.
document.querySelectorAll(selector) - Selecciona todos los elementos que coinciden con un selector CSS.
*/

const titulo = document.getElementById("titulo");
const botones = document.querySelectorAll(".boton");
console.log(titulo.textContent); // Obtiene el texto del título
