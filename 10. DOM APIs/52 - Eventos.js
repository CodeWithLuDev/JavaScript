/* 
----- DOM APIs -----
Eventos
Puedes añadir interactividad usando event listeners.
*/

const boton = document.querySelector("#miBoton");

boton.addEventListener("click", () => {
    alert("¡Botón presionado!");
});