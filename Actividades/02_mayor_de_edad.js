/*----------------------------------------------------------------------
         ¡Asegúrate de que el usuario está listo para jugar! 

 1. Determina si un usuario es mayor de edad
----------------------------------------------------------------------*/

confirm("Estás listo para jugar");
edad = prompt("que edad tienes?");
if (edad>=18){ 
    console.log("Bienvenido al juego");
}
else {
    console.log("Puedes jugar bajo la supervisión de un adulto");
}
