/* 
----- Iterators & Generators -----
Generators infinitos
Un generator puede generar valores infinitos, ideal para flujos de datos dinámicos.
*/

function* numerosInfinitos() {
    let numero = 1;
    while (true) {
        yield numero++;
    }
}

const numeros = numerosInfinitos();
console.log(numeros.next().value); // 1
console.log(numeros.next().value); // 2
console.log(numeros.next().value); // 3