/* 
----- Using this Keyword -----
this en una función
En funciones regulares (fuera de objetos), el valor de this depende de cómo se llame la función:

En modo no estricto, this apunta al objeto global (en navegadores, sería window).
En modo estricto ("use strict"), this es undefined.
*/

function mostrarThis() {
    console.log(this);
}

mostrarThis(); // En modo no estricto: objeto global (window). En estricto: undefined