/*-----------------------------------------------------------------------------
      1. Determina el factorial de un número. 
      El factorial de un número es F= n*(n-1)*(n-2)*... *(n-(n-1))
      Ten en cuenta que no existe el factorial de números negativos y que el 
      factorial de 0 es 1.
-------------------------------------------------------------------------------*/
var n = parseInt(prompt("Introduce un número para saber su factorial", "0"));
var resultado = 1; 
	for(var i=1; i<=n; i++) {
		resultado *= i;
	}
	alert(resultado);