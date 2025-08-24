/* 
----- Using this Keyword -----
this en event handlers
Cuando this se usa en un controlador de eventos, hace referencia al elemento HTML que disparó el evento.
*/

const boton = document.querySelector("#miBoton");

boton.addEventListener("click", function () {
    console.log(this); // Hace referencia al botón que fue clickeado
});


// Nota: Si usas una función flecha, el valor de this se hereda del contexto en el que fue definida, no del elemento.

boton.addEventListener("click", () => {
    console.log(this); // Aquí, this depende del contexto externo, no del botón
});
