/* 
----- Working with APIs -----
Fetch
El método fetch() es una forma moderna de hacer solicitudes HTTP en JavaScript. Devuelve una Promise, lo que significa que puedes usar .then() o async/await para manejar los datos.
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Convierte la respuesta en JSON
    .then(data => console.log(data)) // Maneja los datos obtenidos
    .catch(error => console.error('Error:', error)); // Maneja errores



// Con async/await:
async function obtenerPost() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerPost();


// Ejemplo práctico: Obtener una lista de usuarios
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();

        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

obtenerUsuarios();

/* 
Salida:
Nombre: Leanne Graham, Email: Sincere@april.biz
Nombre: Ervin Howell, Email: Shanna@melissa.tv
...
*/
