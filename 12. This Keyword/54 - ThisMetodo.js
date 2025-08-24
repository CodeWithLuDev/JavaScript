/* 
----- Using this Keyword -----
this en un método
Cuando this se usa dentro de un método, hace referencia al objeto que contiene el método.
*/

const persona = {
    nombre: "Juan",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar(); // Hola, soy Juan

// En este caso, this se refiere al objeto persona.