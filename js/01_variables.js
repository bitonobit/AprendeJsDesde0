//Comentario de una línea

/* 
     Bloque de commentarios
*/

// F12 abrir consola web del navegdor para ubicar los errores

/*---------------------------------------------------------------------
    Declaración de Variables y Tipos de datos principales (primitivos)
----------------------------------------------------------------------
        Hay 3 formas de declarar una variable de JavaScript:
        Utilizando var
        Utilizando let  
        Utilizando nada

*/
 var Nombre;                      //Declaración de una variable
 Nombre = "Candy";                //Asignación de un valor
 var Apellido = 'González';       //Tipo Cadena||String||Texto
 var Edad = 45;                   //Tipo Numérico
 var estado = true;               //Tipo Lógico/Booleano

                                  // Las variables son sensibles a las mayúsculas
 var x, y, z;                     // Declarar varias variables en una línea
 x = 5; y = 6;                    // Asignar valores
 z = x + y; 		              // Realizar Operaciones matemáticas
 var a=1, b=2, c=3;               // Declarar e inicializar varias variables en una línea
 let a, b, c;                     // También puedes declarar variables de bloque con let. Las variables definidas con let no se pueden volver a declarar: https://www.w3schools.com/js/js_let.asp

/* 
       Declaración de constantes, usando const (podemos ver su comportamiento en la consola): https://www.w3schools.com/js/js_const.asp
*/
const Pi=3.14;

/*-----------------------------------------------------------------------------------------------------------------------
    Tipos de datos especiales
          Null: El valor null es un literal de Javascript que representa un valor nulo o "vacío". 
                Ejemplo: cuando una variable existe, pero no tiene tipo ni valor.
         
          Undefine: Una variable no se ha declarado en absoluto (no se declara, no existe) son de tipo undefined.
------------------------------------------------------------------------------------------------------------------------*/


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
Nombre=prompt('Ingrese nombre:','');                   // Abre una ventana de captura de datos
console.log(2*5);                                      // Muestra el resultado de la consola web
console.log("Hola");
console.log(14 % 3);
