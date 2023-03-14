/// probar y agregar más ejemplos

var a=1; 		 
alert(a);			// Uso de la variable
var b="esta es otra variable";
a=b;				// a cambia de tipo
const pi=3.1416; 	//esto es una constante


//************** Ambito de las Variables ************************
function saludo(x) {
 	// body... 
	 var c = "variable local a la función";
	 c=x;
 } 


saludo(a);		// llamada ala función

console.log(typeof c);
console.log(obj);

