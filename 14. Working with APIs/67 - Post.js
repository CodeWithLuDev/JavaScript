/* 
----- Working with APIs -----
Enviar datos con Fetch (POST)
Puedes enviar datos a una API utilizando el método POST. Aquí es importante configurar el body y las headers.
*/

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Mi primer post',
        body: 'Este es el contenido del post',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

