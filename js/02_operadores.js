/*====================================================================================
                O P E R A D O R E S  Js
======================================================================================*/
var resultado=0;                       
console.log(resultado);
var a=1, b=2, c=3;                     // Operador , 
console.log(a,b,c);
/*-------------------------------------
        Operadores Aritméticos
---------------------------------------
 
 Operador	  Descripción
-----------------------------
	+			    Suma
	-			    Resta
	*			    Multiplicación
	/			    Division
	%			    Modulo
	++			  Incremento
	--			  Decremento
*/

resultado= a + b;
resultado= a - b;
resultado= a * b;
resultado= a / b;
resultado= (b * c) % 2;
a++
b--

let unaOperacion = 5 + 2 + 3;
let unaConcatenacion = "Candy" + " " + "González";

/*
---------------------------------------
      Operadores de Comparación 
---------------------------------------
 • >    Mayor que
 • <    Menor que
 • <=   Menor o igual que
 • >=   Mayor o igual que
 • ==   Igual que
 • ===  Exactamente igual que
 • !==  Distinto de
*/

console.log(a,b,c);
console.log(a>b);
console.log(a<c);


/*
---------------------------------------
       Operadores Lógicos:
---------------------------------------

Operador    Significado  
----------------------
 &&             Y    
 ||             O   
 !              NO   

*/
var x=true;
var y=false;
console.log(x&&y);   //false
console.log(x||y);   //true
console.log(!x);     //false
/*
-----------------------------------------------------------------------------------
   Operador Condicional (ternario):
-----------------------------------------------------------------------------------
condición ? valor1 : valor2

Si la condición se cumple devuelve el primer valor, sino devuelve el segundo */

c>a ? "c es mayor" : "c es menor";

/*
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
 x &= y                x = x & y    
 x ^= y                x = x ^ y   (o exclusivo)
 x |= y                x = x | y   (o inclusivo)


-------------------------------------------------------------------------------------------------
    Operadores Unarios: Una operación unaria es una operación que sólo necesita un operando
-------------------------------------------------------------------------------------------------

---------------------------------------------------------
   Operador typeof: devuelve el tipo de la variable 
---------------------------------------------------------
typeof variable; */

typeof a;
typeof (a); // () son opcionales

/*---------------------------------------------------------
   Operador delete: es eliminar un objeto, una propiedad, 
   o un elemento en el indice específico de un Array. 
---------------------------------------------------------
delete nombreObjeto;
delete nombreObjeto.propiedad;
delete nombreObjeto[indice];*/



/*
**********************************************************************************************
Bibliografía:
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://es.wikibooks.org/wiki/Programaci%C3%B3n_en_JavaScript/Operadores_en_JavaScript
https://www.w3schools.com/js/js_operators.asp

*/
