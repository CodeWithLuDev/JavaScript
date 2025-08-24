/* 
----- DOM APIs -----
Añadir o Eliminar Elementos
Puedes modificar la estructura del DOM dinámicamente.
*/

const lista = document.querySelector("#lista");

// Crear un nuevo elemento
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo elemento";

// Añadirlo a la lista
lista.appendChild(nuevoItem);

// Eliminar un elemento
lista.removeChild(lista.firstElementChild);
