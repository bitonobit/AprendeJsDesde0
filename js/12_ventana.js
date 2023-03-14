/*==============================================================================    
                    Brower Object Model (BOM)
================================================================================ */  

/*-----------------------------------------------------------------------------    
        1. Ventana
-------------------------------------------------------------------------------  
    Tamaño de ventana: Ambas propiedades devuelven los tamaños en píxeles
*/
    var w = window.innerWidth;
    var h = window.innerHeight;

/*
    Otras propiedades      
    window.open() - abre una nueva ventana
    window.close() - cierra la ventana actual
    window.moveTo() - mover la ventana actual
    window.resizeTo() - cambiar el tamaño de la ventana actual
*/

    window.open("https://www.w3schools.com/jsref/obj_geolocation.asp");

    var ventanaNueva;
    function abrirVentna() {
    ventanaNueva = window.open("", "ventanaNueva", "width=200,height=100");
    ventanaNueva.document.write("<p>Esto es 'algo útil?'</p>");
    }

    function cerrarVentana() {
    ventanaNueva.close();                       // Cierra la ventana
    }

    function moverVentana() {
        ventanaNueva.moveTo(500, 100);          // Mueva la ventana   
        ventanaNueva.focus();                   // Establece el focus en la ventana nueva
    }

    function resizeWin() {
        ventanaNueva.resizeTo(250, 250);        // Cambia el tamaño de la Ventana
        ventanaNueva.focus();                   
    }

/*-----------------------------------------------------------------------------------    
    2. Pantalla de la ventana: contiene información sobre la pantalla del usuario
-------------------------------------------------------------------------------------  
    Propiedades:
            screen.width        
            screen.height
            screen.availWidth
            screen.availHeight
            screen.colorDepth
            screen.pixelDepth
*/
    
var ancho= screen.width                         //devuelve el ancho de la pantalla en píxeles.
var alto= screen.height                         //devuelve el alto de la pantalla en píxeles.
var anchoDisponible= screen.availWidth          // devuelve el ancho de la pantalla menos las características de la interfaz
var altoDisponible= screen.availHeight      
var colorBitd= screen.colorDepth                //devuelve el número de bits utilizados para mostrar un color
var p= screen.pixelDepth                        //devuelve la profundidad de píxel de la pantalla.

/*-----------------------------------------------------------------------------------    
    3. Ubicación de la ventana de JavaScript: URL de la página actual
-------------------------------------------------------------------------------------  
    Se puede utilizar para obtener la dirección de la página actual y redirigir 
    el navegador a una nueva página.
    
    Algunos ejemplos:
*/
    var url = window.location.href                //devuelve el href (URL) de la página actual
    var dominio = window.location.hostname        //devuelve el nombre de dominio del servidor web
    var ruta = window.location.pathname           //devuelve la ruta y el nombre de archivo de la página actual
    var pprotocolo = window.location.protocol     //devuelve el protocolo web utilizado (http: o https :)
    var a = window.location.assign("https://www.probosco.es")        //carga un nuevo documento

/*-----------------------------------------------------------------------------------    
    4.  Historial de ventanas de JavaScript 
-------------------------------------------------------------------------------------  
    El objeto window.history contiene el historial de los navegadores.
    
    Algunos métodos:
*/  
    window.history.back();          //retroceder en el navegador
    window.history.forward();       //avanzar en el navegador

/*-----------------------------------------------------------------------------------    
    5.  El Navegador en JavaScript 
-------------------------------------------------------------------------------------  
    El objeto window.navigator contiene información sobre el navegador.
    
    Algunos métodos:
*/ 

navigator.appName               //devuelve el nombre de la aplicación. "Netscape" es el nombre de la aplicación para IE11, Chrome, Firefox y Safari.
navigator.appCodeName           //devuelve el nombre del código de la aplicación del navegador
navigator.platform              //devuelve la plataforma del navegador (sistema operativo)
navigator.cookieEnabled         //devuelve verdadero si las cookies están habilitadas
navigator.product               //devuelve el nombre del producto del motor del navegador
navigator.appVersion            //devuelve información sobre la versión del navegador
navigator.language              //devuelve el idioma del navegador
navigator.javaEnabled();        //devuelve verdadero si Java está habilitado

/*-----------------------------------------------------------------------------------    
    6.  Cajas emergentes de JavaScript  
-------------------------------------------------------------------------------------  
    Cuadro de alerta: window.alert("texto");
    Cuadro de confirmación: window.confirm("texto");
    Cuadro de aviso: window.prompt("texto","Texto por defecto");
*/ 

window.alert("Hola");
window.confirm("texto");
window.prompt("Escribe tu Nombre", "Harry Potter");
alert("Hola");
confirm("texto");
prompt("Escribe tu Nombre", "Harry Potter");

alert("Hola\nTe gusta JavaScript?");

/*-----------------------------------------------------------------------------------    
    7.  Eventos de sincronización de JavaScript  
-------------------------------------------------------------------------------------  
    El objeto window permite la ejecución de código a intervalos de tiempo dados.
    Los dos métodos clave para usar con JavaScript son:
        setTimeout: Ejecuta una función, después de esperar un número específico de milisegundos.
        setInterval: Igual que setTimeout(), pero repite la ejecución de la función continuamente.
        Sintaxis:
            window.setTimeout(function, milliseconds);
            window.clearTimeout(timeoutVariable);
            window.setInterval(function, milliseconds);
            window.clearInterval(timerVariable);
            Ver ejemplo: animaciones.html

*/ 

/*-----------------------------------------------------------------------------------    
    6.  Cookies de JavaScript  
-------------------------------------------------------------------------------------  
    Las cookies son datos, almacenados en pequeños archivos de texto, en el ordenador
    Las cookies se guardan en pares nombre-valor como:    username = John Doe
    Sintaxis:
            document.cookie
*/  
document.cookie = "username=John Doe";  //Crea una cookie  
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";           //Por defecto, la cookie se elimina cuando se cierra el navegador a menos que le des duración
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";   //Por defecto, la cookie pertenece a la página actual, a menos que le des unaruta

var x = document.cookie;        //Leer una cookie. Devolverá todas las cookies en una cadena 
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";     //sE puede cambiar una cookie de la misma manera que SE CREA
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";      //onfigure el parámetro caduca en una fecha pasada

