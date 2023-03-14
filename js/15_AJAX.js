/*
¿Qué es AJAX?
AJAX = A síncrono J avascript A nd X ML.
AJAX NO es un lenguaje de programación.

AJAX solo usa una combinación de:

Un XMLHttpRequestobjeto integrado en el navegador (para solicitar datos de un servidor web)
JavaScript y HTML DOM (para mostrar o usar los datos)
AJAX es un nombre engañoso. Las aplicaciones AJAX pueden usar XML para transportar datos,
pero es igualmente común transportar datos como texto sin formato o texto JSON.
AJAX permite que las páginas web se actualicen de forma asíncrona al intercambiar datos con 
un servidor web entre bastidores. Esto significa que es posible actualizar partes de una 
página web, sin volver a cargar toda la página.

1. Se produce un evento en una página web (se carga la página, se hace clic en un botón)
2. Un objeto XMLHttpRequest es creado por JavaScript
3. El objeto XMLHttpRequest envía una solicitud a un servidor web
4. El servidor procesa la solicitud.
5. El servidor envía una respuesta a la página web.
6. La respuesta es leída por JavaScript.
7. La acción apropiada (como la actualización de la página) es realizada por JavaScript

La piedra angular de AJAX es el objeto XMLHttpRequest.

Crear un objeto XMLHttpRequest
var xhttp = new XMLHttpRequest();
tanto la página web como el archivo XML que intenta cargar, deben estar ubicados en el mismo servidor.


Al enviar de forma asíncrona, el JavaScript no tiene que esperar la respuesta del servidor, 
sino que puede:

Ejecutar otros scripts mientras se espera la respuesta del servidor.
tratar con la respuesta después de que la respuesta esté lista

Para aplicaciones AJAX, JSON es más rápido y más fácil que XML:

Usando XML

Obtener un documento XML
Utilice el DOM XML para recorrer el documento
Extraer valores y almacenar en variables.
Usando JSON

Obtener una cadena JSON
JSON.Parse la cadena JSON

*/


