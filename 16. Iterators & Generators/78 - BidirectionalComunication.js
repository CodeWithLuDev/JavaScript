/* 
----- Iterators & Generators -----
Comunicación bidireccional con Generators
Puedes enviar datos al generator usando next().
*/

function* dialogo() {
    const nombre = yield '¿Cuál es tu nombre?';
    yield `Hola, ${nombre}!`;
}

const gen = dialogo();
console.log(gen.next().value); // ¿Cuál es tu nombre?
console.log(gen.next('Juan').value); // Hola, Juan!
