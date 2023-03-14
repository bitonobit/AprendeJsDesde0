/*-----------------------------------------------------------------------------
    1. Dado un número entre 1 y 12, devuelve el nombre del mes correspondiente
    2. Valida los datos  
-------------------------------------------------------------------------------*/
//Creamos el arreglo
var meses=['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ];
var i=parseInt(prompt('Ingrese los números 1-12', ''));
document.write('El mes seleccionado es ' + meses[i] + '<br>');