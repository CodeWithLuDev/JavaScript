/* 
----- Iterators & Generators -----
Crear un rango con Generators
*/

function* rango(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        yield i;
    }
}

for (const numero of rango(1, 5)) {
    console.log(numero); // 1, 2, 3, 4, 5
}