/* 
----- Iterators & Generators -----
Iterables personalizados
Puedes crear tus propios objetos iterables implementando [Symbol.iterator].
*/

const rango = {
    inicio: 1,
    fin: 5,

    [Symbol.iterator]() {
        let actual = this.inicio;
        let ultimo = this.fin;

        return {
            next() {
                if (actual <= ultimo) {
                    return { value: actual++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const numero of rango) {
    console.log(numero); // 1, 2, 3, 4, 5
}