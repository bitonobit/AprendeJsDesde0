// Con el nombre y la nota dada determina la nota definitiva.
  var nombre= "";
  var nota = 0, promedio = 0, po = 0, pp = 0, definitiva = 0;
  nombre = prompt('Ingrese nombre:','');  
  // esto es un ciclo que pide 3 notas y las acumula en una variable
  for (var i = 1; i <= 3; i++) {
  	 nota = nota + parseInt(prompt('Ingrese la nota de la E'+ i + ':',''));
  }

  promedio = nota/3;  // aquí sacamos el promedio de las 3 actividades
  
  // pedimos las notas de la evaluación final
  po=parseInt(prompt('Ingrese la nota de la Prueba Objetiva:',''));
  pp=parseInt(prompt('Ingrese la nota de la Prueba Práctica:',''));

  definitiva=(((po*0.2)+(pp*0.8))*0.7)+(promedio*0.3)   // sacamos la definitiva

  if (definitiva >= 5)  {
    document.write(nombre + ' Apto con: ' + definitiva);
  }else{
    document.write(nombre + ' No Apto con: ' + definitiva);
  }
