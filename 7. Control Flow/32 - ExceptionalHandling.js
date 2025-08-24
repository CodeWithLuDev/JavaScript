/* 
----- Control Flow -----
throw
Lanza una excepción para manejar errores.

try/catch/finally
try: Bloque que intenta ejecutar código.
catch: Maneja errores si ocurren.
finally: Se ejecuta siempre, con o sin error.

Error Objects
Objetos que representan errores en JavaScript, como Error, TypeError, SyntaxError.
*/

// throw
function verificarNumero(num) {
    if (typeof num !== "number") {
        throw "No es un número";
    }
    console.log("Es un número válido");
}

try {
    verificarNumero("texto");
} catch (error) {
    console.log("Error:", error); // Error: No es un número
}


// try, catch, finally
try {
    let resultado = 10 / 0;
    console.log(resultado); // Infinity
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Este bloque siempre se ejecuta");
}
