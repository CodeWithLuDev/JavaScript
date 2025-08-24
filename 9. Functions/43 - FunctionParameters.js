/* 
----- Functions -----
Default Parameters
Permiten establecer valores predeterminados para los parámetros de una función.

Rest Parameters
Permiten recibir un número indefinido de argumentos como un array.
*/

// Default
function saludar(nombre = "Amigo") {
    console.log(`Hola, ${nombre}`);
}
saludar(); // Hola, Amigo
saludar("Lucía"); // Hola, Lucía


// Rest
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10
