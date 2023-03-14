/********************************************************************************************
     Sintaxis de la declaración de una función  
*********************************************************************************************
          function nombre(parametro1, parametro2, parametro3) {
               líneas de código;
               return valor;       //opcional
          }
--------------------------------------------------------------------------------------
          nombre(valor1, valor2, valor3);    // llamada a la función
*/

function sumar(a,b){
     let c= a+b;
     return c;
}

var resultado = sumar(2,3);    //5
resultado= sumar(3,6);        //9

/********************************************************************************************
     Sintaxis de una función como expresión
*********************************************************************************************
     var nombreDeFuncion = function ( ) {
          líneas de código; 
          return valor;        
     }

*/

//Función con parámetro
var dividirPorTres = function (number) {
    var val = number / 3;
    console.log(val);
    // document.write(val);

};

dividirPorTres(6);  // Aquí llamamos a la función por su nombre y le decimos cuál es el número de entrada (es decir, 6)
				// Entonces se ejecuta el código dentro de la función.


/********************************************************************************************
     Función saludo: dado un nombre, muestra un mensaje de saludo en la consola
**********************************************************************************************/

var saludo = function (nombre) {
    console.log("Qué bueno verte," + " " + nombre);
};

saludo("Candy"); //llamada a la función



/********************************************************************************************
     Función que retorna el parámetro multiplicado por 2
**********************************************************************************************/
var porDos = function(numero) {
    return numero * 2;
};

// llama aquí porDos
var nuevoNumero = porDos(8);
console.log(nuevoNumero);


/********************************************************************************************
     Funciones con dos parámetros
**********************************************************************************************/
var areaCaja= function(largo, ancho) {
         return largo * ancho;
};

console.log(areaCaja(3,4));


/********************************************************************************************
     Funciones que se ejecutan de inmediato (completar)
**********************************************************************************************/
     
(function(dia, hora){
     return dia * hora;
})(3,5);                   // se ejecuta inmediatamente

/* Las funciones de auto invocación se ejecutan inmediatamente sin ser llamadas. La función que aparece a continuación, es en realidad una función anónima de invocación automática  */

(function () {
     document.getElementById("demo").innerHTML = "Hola, me llamo a mi misma";
   })();
   
 
// ES5
   var x = function(x, y) {
     return x * y;
   }
   
// ES6. Las funciones de flecha permiten una sintaxis corta para escribir expresiones de funciones.
//No necesita la  palabra clave function, la npalabra clave retur, ni los corchetes.
   
   const x = (x, y) => x * y;

   
/*------------------------------------------------------------
  Funciones para convertir al tipo número
          Number()   
          parseFloat()   
          parseInt()   
-------------------------------------------------------------- */


/*------------------------------------------------------------    
         Funciones Mátemáticas propias del Lenguaje
-------------------------------------------------------------- */
Math.PI; 
Math.round(4.7);    // devuelve 5, redondea 
Math.round(4.4);    // devuelve 4
Math.pow(8, 2);     // devuelve 64, eleva a una potencia
Math.sqrt(64);      // devuelve 8, saca la raíz cuadrada
Math.abs(-4.7);     // devuelve 4.7, devuelve el valor absoluto
Math.ceil(4.4);     // devuelve 5, redondea al entero inmediato superior
Math.floor(4.7);    // devuelve 4, redondea al entero inmediato inferior
Math.min(0, 150, 30, 20, -8, -200);  // devuelve -200, el menor valor
Math.max(0, 150, 30, 20, -8, -200);  // devuelve 150
Math.random();     // devuelve un número aleatorio
Math.floor(Math.random() * 10);     // devuelve aleatorio entre 0 y 9
Math.floor(Math.random() * 100);     // devuelve aleatorio entre 0 y 99
Math.floor(Math.random() * 10) + 1;  // devuelve aleatorio entre 1 y 10