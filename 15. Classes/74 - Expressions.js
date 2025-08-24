/* 
----- Classes -----
Clases como Expresiones
Las clases también pueden ser definidas como expresiones.
*/

const MiClase = class {
    saludar() {
        console.log('Hola desde una clase expresada.');
    }
};

const instancia = new MiClase();
instancia.saludar(); // Hola desde una clase expresada.
