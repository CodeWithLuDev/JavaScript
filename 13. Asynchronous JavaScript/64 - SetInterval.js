/* 
----- Asynchronous JavaScript -----
setInterval
Ejecuta una función repetidamente con un intervalo fijo de tiempo.
*/

let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador === 5) {
        clearInterval(intervalo); // Detiene el intervalo
    }
}, 1000);
