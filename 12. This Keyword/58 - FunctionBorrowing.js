/* 
----- Using this Keyword -----
Function Borrowing
Consiste en usar el método de un objeto en otro.
*/

const persona1 = {
    nombre: "Carlos",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const persona2 = { nombre: "Luisa" };

// Usamos el método de persona1 en persona2
persona1.saludar.call(persona2); // Hola, soy Luisa
