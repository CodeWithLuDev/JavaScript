/* 
----- Asynchronous JavaScript -----
Event Loop
El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asíncronas.

Proceso básico:

El código síncrono se ejecuta primero.
Las operaciones asíncronas se envían a la cola de tareas.
Cuando el Call Stack (pila de ejecución) está vacío, el Event Loop toma una tarea de la cola y la ejecuta.

*/

console.log("Primero");

setTimeout(() => {
    console.log("Tercero");
}, 0);

console.log("Segundo");
// Salida:
// Primero
// Segundo
// Tercero