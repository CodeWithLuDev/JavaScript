/* 
----- Data Types -----
Built-in Objects
JavaScript has several built-in objects that provide a wide range of functionalities and utilities. Here are some of the most commonly used built-in objects:

Object: The root object of all prototypes in JavaScript, providing methods such as toString(), assign(), and defineGetter()/defineSetter().
JSON: A built-in object for working with JSON data, including methods for parsing and stringifying JSON.
Console: A built-in object for logging messages and errors, available in browsers and Node.js environments.
String: A built-in object for working with strings, providing methods such as toUpperCase(), toLowerCase(), and trim().
Math: A built-in object for mathematical operations, providing constants and functions such as PI, E, and sin().
Date: A built-in object for working with dates and times, providing methods such as getFullYear(), getMonth(), and getTime().
Array: A built-in object for working with arrays, providing methods such as forEach(), map(), and filter().
Key Properties and Methods
Here are some key properties and methods for each built-in object:

Object:
toString(): Returns a string representation of the object.
assign(): Copies properties from one or more source objects to a target object.
defineGetter()/defineSetter(): Defines getters and setters for object properties.
JSON:
parse(): Parses a JSON string into a JavaScript object.
stringify(): Converts a JavaScript object to a JSON string.
Console:
log(): Logs a message to the console.
error(): Logs an error message to the console.
String:
toUpperCase(): Converts a string to uppercase.
toLowerCase(): Converts a string to lowercase.
trim(): Removes whitespace from the beginning and end of a string.
Math:
PI: A constant representing the mathematical value of pi.
E: A constant representing the mathematical value of Euler’s number.
sin(), cos(), tan(): Trigonometric functions.
Date:
getFullYear(): Returns the full year (4 digits) of a date.
getMonth(): Returns the month (0-11) of a date.
getTime(): Returns the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 GMT).
Array:
forEach(): Iterates over an array and calls a provided function for each element.
map(): Creates a new array with the results of applying a provided function to each element.
filter(): Creates a new array with only the elements that pass a provided test.
Best Practices
*/

let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre); // Ana
