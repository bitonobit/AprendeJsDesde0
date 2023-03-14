/*------------------------------------------------------------------------    
         Estructuras de Control de Flujo: Bucles
-------------------------------------------------------------------------- */

/*-------------------------- FOR ----------------------------------------- */
/*  Sintaxis: 
    for(inicialización; condición; actualización) {
      ..........;
    }
*/

var mensaje = "Hola, estoy dentro de un bucle";
 
for(var i = 0; i < 3; i++) {
  alert(mensaje);
}


/*-------------------------- WHILE ----------------------------------------- */
/*  Sintaxis:
      while (condición) {
          instrucciones;
      }
*/
var texto = " ";
var i = 1;
while (i < 10) {
    texto += "El número es " + i;
    i++;
}


/*-------------------------- DO WHILE ----------------------------------------- */
/*  Sintaxis:
      do {
          instrucciones;
      }
      while (condición);
*/
do {
    text += "El número es " + i;
    i++;
}
while (i < 10);


/*-------------------------- FOR ... IN ----------------------------------- */
/*  Sintaxis: 
        for (variable in object) {
            // instrucciones
        }
*/
// Declaración y creación de objeto
var persona = {Nombre:"Candy", Apellido:"González", Edad:45, Sexo:"Mujer"};     // Creación de un objeto
var txt="";
for (x in persona) {              //itera cada propiedad del objeto
  txt += persona[x] + " ";
}
console.log(txt);

/*-------------------------- FOR ... OF ----------------------------------- */
/*  Sintaxis: 
        for (let variable of object) {
            // instrucciones
        }
*/
// Declaración y creación del array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}
console.log(txt);

/************************************************
 *  NOTA: Dentro de un bucle podemos usar un break o un continue para alterar las vueltas del bucle  
 **********************************************/
