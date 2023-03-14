/*-----------------------------------------------------------------------------
    1. Determine la edad de un pasajero que compra un billete de avión,
    sabiendo que los bebes 0-2 pagan el 25% del billete, los niños 2-12 pagan 
    el 75% del precio del billete y los adultos +12 pagan el 100%
    
    2. Muestre el tipo de pasajero y el coste del billete, partiendo del 
    supuesto de que el precio para un adulto es de 350 euros
-------------------------------------------------------------------------------*/
var edad;
var pasaje=350;
edad=prompt('Ingrese la edad del pasajero', '');
edad=parseInt(edad);
if (edad>=0 && edad<2){
    pasaje=350*(25/100);
	document.write('El pasajero es un bebé, el costo del pasaje es:'+ pasaje);
}
else if (edad>=2 && edad<12){
    pasaje=350*(75/100);
	document.write('El pasajero es un niño, el costo del pasaje es:'+ pasaje);
}
else if(edad>=12){
	document.write('El pasajero es un adulto, el costo del pasaje es:'+ pasaje);
}
else{
	document.write('Datos no disponibles');
}