/* 
----- Asynchronous JavaScript -----
async/await
Son palabras clave que simplifican el manejo de promesas y hacen que el código sea más legible.
*/

function promesaAsincrona() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Tarea completada"), 2000);
    });
}

async function ejecutarTarea() {
    console.log("Iniciando...");
    const resultado = await promesaAsincrona(); // Espera a que la promesa se resuelva
    console.log(resultado); // Tarea completada
}

ejecutarTarea();
