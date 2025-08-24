/* 
----- Using this Keyword -----
Usando this solo (fuera de funciones)
En un script de nivel superior (fuera de funciones o métodos), this generalmente se refiere al objeto global (window en navegadores).

En modo no estricto, this apunta al objeto global (en navegadores, sería window).
En modo estricto ("use strict"), this es undefined.
*/

console.log(this); // En navegadores: window