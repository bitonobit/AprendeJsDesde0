/*-----------------------------------------------------------------------------
     Función para calcular la nota de un alumno,sabiendo que:
     - Se hacen 3 evaluciones continuas llamadas E1,E2 y E3 que representan el
     30% de la nota final.
     - Se realizan una prueba objetiva y un a prueba práctica que representan el
     70% de la nota final, donde la prueba objetiva es un 20% y la prueba 
     práctica un 80%
-------------------------------------------------------------------------------*/
function calcular_nota() {
  var nota = 0, po = 0, pp = 0;
  // esto es un ciclo que pide 3 notas y las acumula en una variable
  for (var i = 1; i <= 3; i++) {
     nota = nota + parseInt(prompt('Ingrese la nota de la E'+ i + ':',''));
  }
  nota = nota/3;            // aquí sacamos el promedio de las 3 actividades

  // Pedimos las notas de la evaluación final
  po=parseInt(prompt('Ingrese la nota de la Prueba Objetiva:',''));
  pp=parseInt(prompt('Ingrese la nota de la Prueba Práctica:',''));
  
  nota=(((po*0.2)+(pp*0.8))*0.7)+(nota*0.3)   // sacamos nota la definitiva
  return nota;

};


var definitiva = 0;
for (var j = 0; j < 5; j++) {
    nombre = prompt('Ingrese nombre:','');  
    definitiva = calcular_nota();   // Llamamos  la función
     if (definitiva >= 5)  {
        document.write(nombre + ' Apto con: ' + definitiva + '<br>');
    }else{
        document.write(nombre + ' No Apto con: ' + definitiva + '<br>');
    }
}


