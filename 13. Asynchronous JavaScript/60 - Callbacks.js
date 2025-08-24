/* 
----- Asynchronous JavaScript -----
Callbacks
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que una tarea se completa.

Problema: Callback Hell Cuando tienes muchos callbacks anidados, el código se vuelve difícil de leer y mantener.
*/

// Callback
function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    callback();
}

function finalizado() {
    console.log("Tarea finalizada.");
}

procesarUsuario("Juan", finalizado);
// Procesando usuario: Juan
// Tarea finalizada.


// Calball Hell
setTimeout(() => {
    console.log("Primera tarea");
    setTimeout(() => {
        console.log("Segunda tarea");
        setTimeout(() => {
            console.log("Tercera tarea");
        }, 1000);
    }, 1000);
}, 1000);
