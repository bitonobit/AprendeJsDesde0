/*-----------------------------------------------------------------------------
      1. Determina el mayor de dos números  
      2. Qué pasa si los números son iguales
-------------------------------------------------------------------------------*/
var num1,num2;
  num1=prompt('Ingrese el primer número:','');  // Ventana de entrada de datos
  num2=prompt('Ingrese el segundo número:','');
  num1=parseInt(num1);                          // Función del lenguaje que convierte un valor a tipo entero
  num2=parseInt(num2);
  if (num1>num2) 
    {
      document.write('el mayor es '+num1);
    }
  else 
    {
      document.write('el mayor es '+num2);
    }
