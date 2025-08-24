/* 
----- DOM APIs -----
Manipular el Contenido
Puedes cambiar texto, HTML o atributos de los elementos.
*/

const titulo = document.querySelector("#titulo");

// Cambiar el texto
titulo.textContent = "Hola, Mundo!";

// Cambiar el HTML
titulo.innerHTML = "<span>Hola, <b>Mundo</b>!</span>";

// Cambiar atributos
titulo.setAttribute("class", "nuevo-estilo");
