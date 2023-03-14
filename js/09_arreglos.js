/*---------------------------------------------------------------------------------
                Declaración y creación de arreglos
    Sintaxis:
        var array_name = [item1, item2, ...];  
---------------------------------------------------------------------------------*/
var alumnos = ["Elena", "Lolo", "Elsa"];

var novelas = [
    "Aura",
    "María",
    "Cantaclaro"
  ];
  
var l=alumnos.length;                       //Largo dle arreglo

var miArreglo = Array.from("ABCDEFG");          // Crea un arreglo a partir de una cadena
var cadena= miArreglo.join(",");                // Convierte un arreglo en una cadena
var cadena2= miArreglo.toString();              // Convierte un arreglo en una cadena
/*-------------------------------------------------------------------------------------
    Acceder a  un elemento
-------------------------------------------------------------------------------------*/
var x = novelas[0];               //Asignar el contenido de la posición 0 aunavariable
novelas[0]="Aurora";              //Escribir dentro de la posición cero

/*-------------------------------------------------------------------------------------
                    Métodos de los arreglos
---------------------------------------------------------------------------------------
    1.- PUSH: array.push(item1, item2, ..., itemX). Inserta un elemento al final 
    2.- POP: array.pop(). Remueve el último elemento del arreglo
    3.- FILL: array.fill(valor). Rellena todos los elementos de la matriz con un valor
    4.- REVERSE: array.reverse(). Voltea el arreglo
    5.- SHIFT: array.shift(). Elimina el primer elemento del arreglo
    6.- SLICE: array.slice(). Devuelve un arreglo con los elementos especificados
    7.- SORT: array.sort(). Ordena el arreglo
    8.- UNSHIFT: array.unshift(). Agrega elementos al principio del arreglo
--------------------------------------------------------------------------------------*/
alumnos.push("Rosa","Irene");
alumnos.pop();  
alumnos.fill("Candy"); 
alumnos.reverse();            
alumnos.shift();        
alumnos.slice(1,3);
alumnos.sort();
alumnos.unshift("Claudia");
Array.isArray(alumnos);             //Devuelve true si el objeto es un arreglo

              

/*---------------------------------------------------------------------------------------
    9.- CONCAT: array1.concat(array2, array3, ..., arrayX). Concatena arreglos
--------------------------------------------------------------------------------------*/
alumnos.concat(novelas);
alumnos.concat(novelas,novelas);            //si quiero concatenar mas de 1 los separo con comas

/*---------------------------------------------------------------------------------------
    10.- copyWithin: array.copyWithin(target, inicio, fin). Copia elementos del arreglo en 
    otras posiciones del mismo arreglo sobreescribiendolo, no agrega casillas al arreglo
    target: donde voy a copiar
    inicio y fin : que casillas voy a copiar
--------------------------------------------------------------------------------------*/
var meses=['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ];
meses.copyWithin(5,0,4);
//Salida: ["", "Enero", "Febrero", "Marzo", "Abril", "", "Enero", "Febrero", "Marzo", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

/*-------------------------------------------------------------------------------------------------------------------------------------
    11.- array.entries().Devuelve un objeto Array Iterator con pares clave / valor.
---------------------------------------------------------------------------------------------------------------------------------------*/
meses=['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ];
var m=meses.entries();      
for (x of m) {
    x+=  "\n";
  console.log(x);
}

/*-------------------------------------------------------------------------------------------------------------------------------------
    12.- array.keys().Crea un arreglo con los indices de un arreglo
---------------------------------------------------------------------------------------------------------------------------------------*/

var iK = meses.keys();
for (x of iK) {
    x+=  "\n";
    console.log(x);
}


/*---------------------------------------------------------------------------------------
    13.- FIND: array.find(function(currentValue, index, arr),thisValue). devuelve el 
    valor del primer elemento en una matriz que pasa una prueba (proporcionada como 
    una función)
--------------------------------------------------------------------------------------*/
var edades = [3, 10, 18, 20];
function checkAdulto(edad) {
  return edad >= 18;
}
var mayor = edades.find(checkAdulto);
/*---------------------------------------------------------------------------------------
    14.- FILTER: array.filter(function(currentValue, index, arr), thisValue). Devuelve el 
    valor de todos los elementos en una matriz que pasan una prueba (proporcionada como 
    una función)
--------------------------------------------------------------------------------------*/
var edades = [3, 10, 18, 20];
function checkAdulto(edad) {
  return edad >= 18;
}
var mayor = edades.filtet(checkAdulto);

/*---------------------------------------------------------------------------------------
    15.- FOREACH: array.forEach(function(currentValue, index, arr), thisValue). Llama a 
    una función una vez para cada elemento de una matriz, en orden. la función no se 
    ejecuta para elementos de matriz sin valores.
--------------------------------------------------------------------------------------*/
var suma = 0;
var num = [65, 44, 12, 4];
num.forEach(sumarNum);
function sumarNum(item) {
  suma += item;
}

/*---------------------------------------------------------------------------------------
    16.- INCLUDES: array.includes(element, start). Determina si un valor está dentro 
    de un arreglo, devuelve un booleano
--------------------------------------------------------------------------------------*/
var libros = ["Mates", "Lengua", "Ciencias", "Historia"];
var n = libros.includes("Lengua", 3);               // Devuelve falso
n = libros.includes("Lengua", 0);                   // Devuelve true
var indice = libros.indexOf("Lengua");              // Devuelve 1, porque el método indexOf() busca en una matriz el valor de un elemento y devuelve su posición


/*---------------------------------------------------------------------------------------
    17.- MAP: array.map(function(currentValue, index, arr), thisValue). Crea un arreglo
    resultado e aplicar una función
--------------------------------------------------------------------------------------*/
var numeros = [65, 44, 12, 4];
var result = numeros.map(miFuncion)
function miFuncion(num) {
  return num * 10;
}

/*---------------------------------------------------------------------------------------
    18.- SPLICE: array.splice(eliminar, cuantosElimino, valorIntroducido1, ...)
    Devuelve un arreglo con los valores eliminados en este caso el "2",
    los parametros son 2 la posición a partir de la cual se elimina, 1 el 
    número deelementos a eliminar y las letras A y B son los valores a sustituir 
    en la posición eliminada
---------------------------------------------------------------------------------------*/
var a = ["0", "1", "2", "3"];       
a.splice(2, 1, "A", "B");           

// referencia completa:https://www.w3schools.com/jsref/jsref_obj_array.asp

//Si quiero ver el array por consola como una tabla escribo

console.table(["Audi", "Volvo", "Ford"]);