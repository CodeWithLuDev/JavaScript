/* 
----- Functions -----
Argument Object
Una variable especial disponible dentro de todas las funciones tradicionales (no funciona en funciones flecha). Contiene los argumentos pasados.
*/

function mostrarArgumentos() {
    console.log(arguments);
}
mostrarArgumentos(1, 2, 3); // [1, 2, 3]