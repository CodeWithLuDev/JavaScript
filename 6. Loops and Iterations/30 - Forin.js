/* 
----- Loops and Iterations -----
for...in loop
Itera sobre las propiedades de un objeto.
*/

let persona = { nombre: "Ana", edad: 25 };
for (let clave in persona) {
    console.log(clave, persona[clave]); // nombre Ana, edad 25
}
