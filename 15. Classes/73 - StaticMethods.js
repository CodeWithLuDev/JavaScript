/* 
----- Classes -----
Métodos Estáticos
Los métodos estáticos pertenecen a la clase en sí, no a las instancias. Se definen usando la palabra clave static.
*/

class Matematica {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Matematica.sumar(10, 5)); // 15