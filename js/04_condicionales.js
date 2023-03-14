/*====================================================================================
      Estructuras de Control de Flujo: Condicionales
======================================================================================*/

/*----------------------- Condicional simple -----------------------------------------*/
/*  Sintaxis: 
        if (condición) {
            instrucciones;
        }; 
*/

    if ("Candy".length <=5 ) {
        console.log( "Tienes un nombre corto");
    };   

/*----------------------- Condicional doble -----------------------------------------*/
/*  Sintaxis: 
        if (condición) {
            instrucciones;
        } else {
            otras instrucciones;
        }; 
*/
var a=2, b=4;
if (a === b ) {
  console.log("a y b son iguales");      //En caso de ser verdadera la comparación
} else {
  console.log("a y b son diferentes");	 //En caso de ser falsa la comparación 
};

/*----------------------- Condicional múltiple -----------------------------------------*/

/*  Sintaxis: 
        if (condición1) {
            instrucciones;
        } else if (condición2) {
            instrucciones;
        } else {
            instrucciones;
}
*/
var edad=10;

    if(edad < 3) {
      alert("Eres un bebé");
    }
    else if(edad < 13) {
      alert("Eres un niño");
    }
    else if(edad < 18) {
      alert("Eres un adolecente");
    }
    else {
      alert("Eres mayor de edad");
    }

/*----------------------- Selección múltiple -----------------------------------------*/
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
switch (new Date().getDay()) {          //La fecha es un objeto
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sábado";
}

