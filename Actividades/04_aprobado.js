/*----------------------------------------------------------------------
    Dado el nombre y la nota de un alumno determina si está aprobado.
------------------------------------------------------------------------*/
  var nombre;
  var nota;
    nombre = prompt('Ingrese nombre:','');
    nota = parseInt(prompt('Ingrese su nota:',''));
    if (nota >= 5){
      document.write(nombre + ' esta aprobado con un ' + nota);
    }
