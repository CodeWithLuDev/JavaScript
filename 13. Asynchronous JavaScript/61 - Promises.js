/* 
----- Asynchronous JavaScript -----
Promises
Una Promise es un objeto que representa el eventual resultado (exitoso o fallido) de una operación asíncrona.

Estados de una Promise:

Pending: Cuando la operación aún no se ha completado.
Fulfilled: La operación fue exitosa.
Rejected: La operación falló.
*/

const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve("¡Promesa cumplida!");
    } else {
        reject("Error: Algo salió mal.");
    }
});

promesa
    .then(resultado => console.log(resultado)) // ¡Promesa cumplida!
    .catch(error => console.error(error)); // En caso de error

