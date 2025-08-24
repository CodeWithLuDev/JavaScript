/* 
----- Equality Comparisons -----
Object.is
Similar a === pero trata correctamente los casos especiales como NaN.
*/

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false