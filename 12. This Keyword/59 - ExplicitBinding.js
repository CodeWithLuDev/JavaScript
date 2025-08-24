/* 
----- Using this Keyword -----
Explicit Binding (call, apply, bind)
call: Llama a una función con un valor específico para this y permite pasar argumentos uno por uno.
apply: Igual que call, pero los argumentos se pasan como un array.
bind: Devuelve una nueva función con this vinculado al valor especificado.
*/

function saludar(saludo) {
    console.log(`${saludo}, soy ${this.nombre}`);
}

const persona = { nombre: "Marta" };

saludar.call(persona, "Hola"); // Hola, soy Marta
saludar.apply(persona, ["Buenas"]); // Buenas, soy Marta

const saludarMarta = saludar.bind(persona);
saludarMarta("Hola"); // Hola, soy Marta