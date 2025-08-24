/* 
----- Data Structures -----
Keyed Collections (Map, WeakMap, Set, WeakSet)
Map
Estructura de datos para almacenar pares clave-valor, donde las claves pueden ser de cualquier tipo.

WeakMap
Similar a Map, pero solo acepta objetos como claves y no evita que los objetos sean eliminados por el recolector de basura.

Set
Estructura para almacenar valores únicos (sin duplicados).

WeakSet
Similar a Set, pero solo acepta objetos y los elementos pueden ser recolectados por el recolector de basura.
*/

// Map
let map = new Map();
map.set("nombre", "Ana");
map.set(42, "Número");
console.log(map.get("nombre")); // Ana

// Set
let set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set { 1, 2, 3, 4 }
