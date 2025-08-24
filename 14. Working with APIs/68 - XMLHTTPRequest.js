/* 
----- Working with APIs -----
XMLHTTPRequest
Antes de fetch, se usaba XMLHTTPRequest para realizar solicitudes HTTP. Es más antiguo y menos intuitivo, pero aún es compatible con navegadores más antiguos.
*/

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error('Error:', xhr.status);
    }
};
xhr.send();
