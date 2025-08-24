/* 
----- Classes -----
Métodos de una Clase
Los métodos son funciones dentro de una clase que operan sobre sus propiedades.
*/

class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }
}

const calc = new Calculadora();
console.log(calc.sumar(5, 3)); // 8
console.log(calc.restar(10, 7)); // 3
