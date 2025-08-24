/* 
----- Classes -----
Prototypal Inheritance (Prototipos en Clases)
Aunque las clases son una forma más "bonita" de trabajar con objetos, internamente funcionan con prototipos. Cada método que defines en una clase realmente se almacena en ClassName.prototype.
*/

class Vehiculo {
    arrancar() {
        console.log('El vehículo está en marcha.');
    }
}

const auto = new Vehiculo();
console.log(auto.__proto__ === Vehiculo.prototype); // true
