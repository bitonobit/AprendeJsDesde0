/*********************************************************************
                    Qué es JSON?
*********************************************************************
JSON es un formato para almacenar y transportar datos.
JSON se usa a menudo cuando los datos se envían desde un servidor a una página web.
JSON significa J ava S cript O bject N otation
JSON es un formato de intercambio de datos ligero
JSON es lenguaje independiente *
JSON es "autodescriptivo" y fácil de entender
La sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript, 
pero el formato JSON es solo de texto. El código para leer y generar datos JSON 
se puede escribir en cualquier lenguaje de programación.
---------------------------------------------------------------------
Reglas de sintaxis de JSON
Los nombres JSON requieren comillas dobles.
Los datos están en pares de nombre / valor ("nombre":"Candy")
Los datos están separados por comas.
Las llaves apoyan objetos
Los corchetes sostienen matrices 
---------------------------------------------------------------------*/

//Objetos JSON: están escritos dentro de llaves. 
var Obj1={"nombre":"Pepe", "apellido":"Pérez"};

//Las matrices JSON: están escritas entre corchetes.

var Obj2= {"alumnos":[
  {"nombre":"Andres", "apellidos":"Glez"}, 
  {"nombre":"Ana", "apellidos":"García"}, 
  {"nombre":"Pedro", "apellidos":"Rodríguez"}
]}

/* Convertir un texto JSON en un objeto JavaScript
Un uso común de JSON es leer datos de un servidor web y mostrar los datos en una página web.
1º crea una cadena JavaScript que contenga la sintaxis JSON:*/

var text = '{ "clientes" : [' +
'{ "nombre":"Carlos" , "apellido":"González" },' +
'{ "nombre":"Juan" , "apellido":"Alvarez" },' +
'{ "nombre":"Pepe" , "apellido":"Pérez" } ]}';

/*Luego, usa la función incorporada de JavaScript JSON.parse() 
para convertir la cadena en un objeto JavaScript:*/

var obj = JSON.parse(text);

/*Finalmente, usa el nuevo objeto JavaScript en tu página:
Ejemplo: <p id="p01"></p>*/

document.getElementById("p01").innerHTML =
obj.clientes[1].nombre + " " + obj.clientes[1].apellido;


//JavaScript también tiene una función integrada para convertir un objeto en una cadena JSON: 
var text2=JSON.stringify({
  "employees":["John", "Anna", "Peter"]
  });


//Saber más: https://www.w3schools.com/html/html5_webstorage.asp

/* Nota: Las funciones de auto invocación se ejecutan inmediatamente sin ser llamadas
La función que aparece a continuación, es en realidad una función anónima de invocación automática  */

(function () {
  document.getElementById("demo").innerHTML = "Hola, me llamo a mi misma";
})();



// ES5
var x = function(x, y) {
  return x * y;
}

// ES6. Las funciones de flecha permiten una sintaxis corta para escribir expresiones de funciones.
//No necesita la  palabra clave function, la npalabra clave retur, ni los corchetes.


//El método call () 
const x = (x, y) => x * y;

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe",
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe",
}
person.fullName.call(person2);  // Will return "Mary Doe"