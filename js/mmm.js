//Comentario de una línea

/* 
     Bloque de commentarios
 */

// F12 abrir consola web del navegdor para ubicar los errores

/*---------------------------------------------------------------------
    Declaración de Variables y Tipos de datos principales (primitivos)
----------------------------------------------------------------------*/
 var Nombre;
 Nombre = "Candy";                //Tipo Cadena/String/Texto
 var Apellido = 'González';
 var Edad = 45;                   //Tipo Numérico
 var estado = true;               //Tipo Lógico/Booleano

// Las variables son sensibles a las mayúsculas
 var x, y, z;        // Declarar varias variables en una línea
 x = 5; y = 6;       // Asignar valores
 z = x + y; 		    // Realizar Operaciones matemáticas


/*-----------------------------------------------------
    Tipos de datos especiales
        Null
        Undefine
------------------------------------------------------*/


/*-------------------------------------
        Operadores Aritméticos
---------------------------------------
 
 Operador	  Descripción
-----------------------------
	+			Suma
	-			Resta
	*			Multiplicación
	/			Division
	%			Modulo
	++			Incremento
	--			Decremento

---------------------------------------
  Lista de Operadores de Comparación:
---------------------------------------
• >    Mayor que
• <    Menor que
• <=   Menor o igual que
• >=   Mayor o igual que
• ===  Igual que
• !==  Distinto de

---------------------------------------
    Lista de Operadores Lógicos:
---------------------------------------

Operador    Significado  
----------------------
  &&             Y    
  ||             O   
  !              NO   


---------------------------------------
    Operador Condicional (ternario):
---------------------------------------
condición ? valor1 : valor2

Si la condición se cumple devuelve el primer valor 
sino devuelve el segundo

---------------------------------------
  Lista de Operadores de Asignación:
---------------------------------------

Operador            Significado  
-------------------------------------
    =                   x = y
  x += y                x = x + y
  x -= y                x = x - y
  x *= y                x = x * y
  x /= y                x = x / y
  x %= y                x = x % y
  x **= y               x = x ** y
  x <<= y               x = x << y
  x >>= y               x = x >> y
  x >>>= y              x = x >>> y
  x &= y                x = x & y
  x ^= y                x = x ^ y (o exclusivo)
  x |= y                x = x | y (o inclusivo)


---------------------------------------
    Operador typeof:
    (devuelve el tipo de la variable)
---------------------------------------
typeof variable;


--------------------------------------------------------------------------------------- 
Bibliografía:
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://es.wikibooks.org/wiki/Programaci%C3%B3n_en_JavaScript/Operadores_en_JavaScript
https://www.w3schools.com/js/js_operators.asp

*/

/*---------------------------------------------------------
    Posibilidades de visualización de JavaScript
----------------------------------------------------------
  innerHTML
  document.write()
  window.alert()
  console.log()
*/

confirm('Cómo usar JS para crear una interaccion en un sitio web.'); //Devuelve true
alert('este es un archivo js');                        // Abre una ventana emergente 
document.write('Hola mundo dentro de la web');         // Escribe dentro de la web
nombre=prompt('Ingrese nombre:','');                   // Abre una ventana de captura de datos
console.log(2*5);              //Muestra el resultado de la consola web
console.log("Hola");
console.log(14 % 3);


/*------------------------------------------------------------------------    
      Estructuras de Control de Flujo: Condicionales
-------------------------------------------------------------------------- */
/*  Sintaxis: 
        if (condición) {
            instrucciones;
        }; 
*/

    if ("Candy".length <=5 ) {
        console.log( "Tienes un nombre corto");
    };   

/*------------------------------------------------------------------------- */
/*  Sintaxis: 
        if (condición) {
            instrucciones;
        } else {
            otras instrucciones;
        }; 
*/
    var a=2, b=4;
    if (a === b ) {
      console.log("La sentencia es true");
    } else {
      console.log("La sentencia es false");
    };

/*------------------------------------------------------------------------- */
    if ( "Candy".length >=8) 
    {
        alert("¡Tu nombre es largo!");
    }
    else
    {
        // ¿Qué tenemos que  hacer si la condición es false ? 
        console.log("¡Tu nombre es corto!");
    }

/*------------------------------------------------------------------------- */

    if(12 / 4 === "Ari".length){
        confirm("¿Esto va a ejecutar el primer bloque?");
    } else {
        confirm("¿O  el segundo bloque?");
    }
/*------------------------------------------------------------------------- */
/*  Sintaxis: 
        if (condición1) {
            instrucciones;
        } else if (condición2) {
            instrucciones;
        } else {
            instrucciones;
}
*/

    if(edad < 3) {
      alert("Eres un bebé");
    }
    else if(edad < 13) {
      alert("Eres un niño");
    }
    else if(edad < 19) {
      alert("Eres un adolecente");
    }
    else {
      alert("Eres mayor de edad");
    }
/*------------------------------------------------------------------------- */
/*  Sintaxis: 
        switch(expresión) {
    case n:
        instrucciones;
        break;
    case n:
        instrucciones;
        break;
    default:
        instrucciones;
    }

*/
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}


/*------------------------------------------------------------------------    
      Estructuras de Control de Flujo: Bucles
-------------------------------------------------------------------------- */
/*  Sintaxis: 
    for(inicialización; condición; actualización) {
      ...
    }
*/

var mensaje = "Hola, estoy dentro de un bucle";
 
for(var i = 0; i < 5; i++) {
  alert(mensaje);
}

/*------------------------------------------------------------------------- */
/*  Sintaxis:
      while (condición) {
          instrucciones;
      }
*/

while (i < 10) {
    text += "El número es " + i;
    i++;
}

/*------------------------------------------------------------------------- */
/*  Sintaxis:
      do {
          instrucciones;
      }
      while (condición);
*/
do {
    text += "El número es " + i;
    i++;
}
while (i < 10);
/*------------------------------------------------------------------------- */



/*------------------------------------------------------------    
      Tipo de datos compuestos: Arreglo o Matriz 
-------------------------------------------------------------- */
/*  Sintaxis: 
      var nombre_array = [valor1, valor2, ..., valorN];
*/
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var diaSeleccionado = dias[0];

//Recorrer un arreglo
for(var i=0; i<7; i++) {
  alert(dias[i]);
}

/* El método de JavaScript toString () 
convierte una matriz en una cadena de 
valores de matriz (separados por comas).*/

var fruta = ["Banana", "Naranja", "Manzana", "Mango"];
var lista = fruta.toString();
var lista2= fruta.join(" * ");  //separa los valores con * en lugar de ,
var lista3= fruta.pop();        //elimina el último elemento del arreglo y lo guarda en la variable lista3        
var lista4= fruta.push("Kiwi"); // agrega el valor kiwi a la última posición del arreglo y guarda el índice(5) en la variable lista4
var lista5= fruta.shift();      //elimina el primer elemento del arreglo y lo guarda en la variable lista5        
var lista6= fruta.unshift("Limón"); // agrega el valor limón en la primera posición del arreglo y guarda el índice(5) en la variable lista6
fruta[0] = "Kiwi";    //cambia el valor de la primera posición del arreglo
fruta.splice(2, 0, "Melón", "fresa");   // agrega los valores a partir de la segunda (2) posición sin eliminar nada (0)
fruta.sort();     //ordena el arreglo alfabéticamente


/*------------------------------------------------------------    
        Funciones definidas por el usuario
-------------------------------------------------------------- */
/*  Sintaxis: 
        function nombreFunción(parametro1, parametro2, paramettro3) {
            instrucciones a ejecutar;
        }
*/

function multiplicar(p1, p2) {
    return p1 * p2;              // TLa función retorna el producto de p1 y p2
}


/*------------------------------------------------------------    
        Lista de Funciones propias del Lenguaje
-------------------------------------------------------------- */
Math.PI; 
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random();     // returns a random number
Math.floor(Math.random() * 10);     // returns a number between 0 and 9
Math.floor(Math.random() * 100);     // returns a number between 0 and 99
Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10


/*------------------------------------------------------------    
        Formas de crear objetos
-------------------------------------------------------------- */
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array objectWDAWS
var x7 = function(){}; // new function object

















// Tipo String
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
"Candy".length;
"Estoy escribiendo código como un genio".length > 10;  // Devuelve true
//Cada caracter en la cadena está numerado comenzando desde 0, substring devuelve una subcadena
"milanesas".substring(3,7);             
console.log("Enero".substring(0,2));
String(true);               //convierte a string el contenido del parentesis
cualquiercosa.tostring();   //convierte a string cualquiercosa
var text2 = text1.toUpperCase(); //convierte a string a mayúsculas
var text2 = text1.toLowerCase();  //convierte a string a minúsculas
var str="Hola";
str.charAt(0);             //devuelve el carácter en la posición especificada
str.charCodeAt(0);         //devuelve el unicode del caracter en un índice especificado en una cadena
/*----------------------
  Funciones para convertir a número
    Number()   
    parseFloat()   
    parseInt()   
------------------------*/

// Caracteres de escape
  var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
  alert(mensaje);
/*------------------------------------------------------------------------
Para incluir...       Se debe incluir...
Una nueva línea           \n
Un tabulador              \t
Una comilla simple        \'
Una comilla doble         \"
Una barra inclinada       \\
------------------------------------------------------------------------*/

/*------------------------------------------------------------    
      Tipo de datos compuestos: Objetos
-------------------------------------------------------------- */
/*  Sintaxis: 
      Crear un Objeto
      var car = {type:"Fiat", model:"500", color:"white"};
      
      Mostrar una propiedad del objeto
      document.getElementById("demo").innerHTML = car.type;

      Acceder a una propiedad de un objeto:
      objectName.propertyName 
      objectName["propertyName"]

      Acceder a un método de un objeto:
      objectName.methodName()
*/
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {                 //Un método es una función almacenada como una propiedad.
        return this.firstName + " " + this.lastName;
    }
};

name = person.fullName();

/*------------------------------------------------------------    
      Tipo de datos fecha: es un tipo Objetos 
      new Date()
      new Date(year, month, day, hours, minutes, seconds, milliseconds)
      new Date(milliseconds)
      new Date(date string)
-------------------------------------------------------------- */
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0); // 7 números que especifican:  año, mes, día, hora, minuto, segundo y milisegundos (en ese orden)
var d = new Date(2018, 11, 24, 10, 33, 30);    // 6 números que especifican:  año, mes, día, hora, minuto, segundo 
var d = new Date(2018, 11, 24, 10, 33);        // 5 números que especifican:  año, mes, día, hora, minuto 
var d = new Date(2018);               //1 número que especifica:  año
var d = new Date(0);                  //milisegundos en 0 es el día 01/01/1970
var d = new Date(1540000000000);      //Un día (24 horas) son 86,400,000 milisegundos.
var d = new Date(-100000000000);      
var d = new Date("October 13, 2018 11:13:00");
// Mostrar las fechas 
d.toString();
d.toUTCString();
d.toDateString();

//Formato fecha
var d = new Date("03/25/2015");   //Short Dates YYYY-MM-DD
var d = new Date("2015-03-25");   //  ISO 8601
var d = new Date("Mar 25 2015");  //Long Dates "MMM DD YYYY"
/*------------------------------------------------------------ 
        Métodos para obtener la fecha   
-------------------------------------------------------------
      Métodos     Descripción
getFullYear()     Get the year as a four digit number (yyyy)
getMonth()        Get the month as a number (0-11)
getDate()         Get the day as a number (1-31)
getHours()        Get the hour (0-23)
getMinutes()      Get the minute (0-59)
getSeconds()      Get the second (0-59)
getMilliseconds() Get the millisecond (0-999)
getTime()         Get the time (milliseconds since January 1, 1970)
getDay()          Get the weekday as a number (0-6)
-------------------------------------------------------------- */
var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();


/*------------------------------------------------------------ 
    Métodos para establecer la fecha
--------------------------------------------------------------   
      Métodos       Descripción
setDate()           Set the day as a number (1-31)
setFullYear()       Set the year (optionally month and day)
setHours()          Set the hour (0-23)
setMilliseconds()   Set the milliseconds (0-999)
setMinutes()        Set the minutes (0-59)
setMonth()          Set the month (0-11)
setSeconds()        Set the seconds (0-59)
setTime()           Set the time (milliseconds since January 1, 1970)
-------------------------------------------------------------- */
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;



