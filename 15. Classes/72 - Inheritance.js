/* 
----- Classes -----
Herencia
Una clase puede heredar propiedades y métodos de otra clase utilizando extends. Esto es útil para crear jerarquías de objetos.
*/

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log('El animal hace un sonido.');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log('El perro ladra.');
    }
}

const animal = new Animal('Animal');
animal.hacerSonido(); // El animal hace un sonido.

const perro = new Perro('Firulais');
perro.hacerSonido(); // El perro ladra.