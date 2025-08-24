/* 
----- Functions -----
Scope & Function Stack (Recursion, Lexical Scoping, Closures)
Recursion
Una función que se llama a sí misma para resolver problemas repetitivos.

Lexical Scoping
Las funciones pueden acceder a variables definidas en su ámbito padre.

Closures
Una función "recuerda" el ámbito en el que fue creada, incluso después de que ese ámbito haya finalizado.
*/

// Scope
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Lexical Scoping
function padre() {
    let mensaje = "Hola desde el ámbito padre";

    function hijo() {
        console.log(mensaje); // Accede a mensaje desde el ámbito padre
    }

    hijo();
}
padre();

// Closures
function crearContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
