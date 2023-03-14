// Con el nombre y la nota dada determina si está aprobado.
  var nombre= "";
  var nota = 0;
  var promedio =  0;
  nombre = prompt('Ingrese nombre:','');

  for (var i = 1; i <= 3; i++) {
  	 nota = nota + parseInt(prompt('Ingrese la nota de la E'+ i + ':',''));

  }

  promedio = nota/3;
  if (promedio >= 5)  {
    document.write(nombre + ' Apto con: ' + promedio);
  }else{
    document.write(nombre + ' No Apto con: ' + promedio);
  }
