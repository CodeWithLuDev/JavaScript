/* 
----- Classes -----
Declarar una Clase
Se utiliza la palabra clave class para definir una clase.
*/

class Persona {
    constructor(nombre, edad) { // Constructor: método especial que inicializa el objeto
        this.nombre = nombre; // Propiedad
        this.edad = edad; // Propiedad
    }

    // Método
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear una instancia de la clase
const juan = new Persona('Juan', 30);
juan.saludar(); // Hola, me llamo Juan y tengo 30 años.
