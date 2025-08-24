/* 
----- Strict Mode -----
Strict Mode
El modo estricto en JavaScript ("use strict") ayuda a detectar errores y aplicar buenas prácticas. Es útil porque:

Previene el uso de variables sin declarar.
Evita palabras reservadas como nombres de variables (e.g., let, class).
Hace que algunos errores sean visibles que antes se ignoraban silenciosamente.
Cómo usarlo
Se activa al comienzo de un archivo o función.

Ventajas
Evita malas prácticas y errores silenciosos.
Hace que tu código sea más seguro y compatible con el futuro.
*/

"use strict";
x = 10; // Error: x no está declarada


function suma(a, b) {
    "use strict";
    return a + b;
}
