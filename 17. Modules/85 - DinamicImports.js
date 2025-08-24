/* 
----- Modules -----
Importaciones dinámicas
Las importaciones dinámicas permiten cargar módulos bajo demanda. Esto es útil para mejorar el rendimiento, ya que el código se carga solo cuando se necesita.
*/

// app.js
const cargarModulo = async () => {
    const modulo = await import('./saludo.js');
    console.log(modulo.saludar('Luis')); // Hola, Luis
};

cargarModulo();
