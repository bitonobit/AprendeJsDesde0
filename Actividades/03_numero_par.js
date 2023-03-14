/*----------------------------------------------------------------------
			 1. Determinar si un número es par 
----------------------------------------------------------------------*/
var a;
a = prompt('Ingrese un número:','');  	// Ventana de entrada de datos
if((a%2)===0) {							// Operador de resto
	console.log("¡a es un número es par!");
} else {
	console.log("¡a es un número es impar!");
}
