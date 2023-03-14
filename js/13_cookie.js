/*==============================================================================
                            Manejo de Cookies
================================================================================
    Sintaxis:
        document.cookie = "nombrecookie=valorcookie; max-age=3600; path=/";
        
        https://www.w3schools.com/js/js_cookies.asp 
--------------------------------------------------------------------------------
    1.- Crear la Cookie
--------------------------------------------------------------------------------*/
document.cookie = "comida_favorita=paella; max-age=3600; path=/";
document.cookie = "color_favorito=rojo";
document.cookie = "usuario=pepito";
var valorGuardado = "Hola mundo!";
document.cookie = "nombreCookie=" + encodeURIComponent(valorGuardado);

/*--------------------------------------------------------------------------------
    Si no se específica fecha de caducidad la cookie será válida sólo para la 
    sesión actual.
    La fecha en formato UTC. Método Date.toUTCString(). 
    Ejemplo: Cookie con caducidad para el 2 de Abril del año 2030 a las 11:20
----------------------------------------------------------------------------------*/
 
var fechaExpira = new Date(2030, 2, 04, 11, 20);
var cookieValor = "Hola Mundo!";
document.cookie = "nombreCookie=" + encodeURIComponent(cookieValor) + "; expires=" + fechaExpira.toUTCString();

/*--------------------------------------------------------------------------------
    2.- Modificar la Cookie
----------------------------------------------------------------------------------*/
document.cookie = "nombreCookie=Arturo";
document.cookie = "nombreCookie=Candy";

/*--------------------------------------------------------------------------------
    3.- Eliminar la Cookie
        Modificando  la expiración a una fecha anterior o usando max-age=0
----------------------------------------------------------------------------------*/
document.cookie = "nombreCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
document.cookie = "nombreCookie=; max-age=0";    

/*--------------------------------------------------------------------------------
    4.- Leer la Cookie
        Devolverá una cadena con el siguiente formato:
        "cookie1=valor1;cookie2=valor2;cookie3=valor3[;...]"
----------------------------------------------------------------------------------*/
var lasCookies = document.cookie;

/*--------------------------------------------------------------------------------
    5.- Obtener un valor específico
        Para separar cada par nombrecookie=valor
----------------------------------------------------------------------------------*/
function leerCookie(nombreCookie) {
    var nombre = nombreCookie + "="; 
    var arrCookie = document.cookie.split(';');     //convierte la cadena en un arreglo donde cada valor es una cookie
    for(var i=0;i < arrCookie.length;i++) {         // Recorre el arreglo
        var c = arrCookie[i];                       // Guarda en c el par valor en este caso:"pais=Uruguay"
      while (c.charAt(0)==' ') c = c.substring(1,c.length);     //elimina los espacios en blanco al principio de la cadena
      if (c.indexOf(nombre) == 0) {                             //indexOf busca el nombre en la cadena, en este caso busca pais=, si esta en la posición 0 entonces ..
        return decodeURIComponent( c.substring(nombre.length,c.length) );   // Devuelve la subcadena, en este caso desde el primer caracter despues del= hasta el final, es decir Uruguay y sale de la función
      }
    }
    return null;        //si no encuentra el nombre dela cookie, en este caso pais=, retorna null
  }
  
  // Creamos una cookie
  document.cookie = "pais=" + encodeURIComponent( "Uruguay" );  //"pais=Uruguay"
  
  // Leemos la cookie
  var miCookie = leerCookie( "pais" );
  
  // Muestra "Uruguay"
  alert( miCookie );