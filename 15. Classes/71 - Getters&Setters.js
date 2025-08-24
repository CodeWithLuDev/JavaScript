/* 
----- Classes -----
Getters y Setters
Los getters y setters permiten controlar cómo se accede o modifica una propiedad.
*/

class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre; // Nota: Se usa _ para evitar conflictos con getters/setters
        this._edad = edad;
    }

    // Getter
    get nombre() {
        return this._nombre;
    }

    // Setter
    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        } else {
            console.error('El nombre no puede estar vacío');
        }
    }
}

const persona = new Persona('Ana', 25);
console.log(persona.nombre); // Ana
persona.nombre = 'Sofía'; // Cambia el nombre
console.log(persona.nombre); // Sofía

