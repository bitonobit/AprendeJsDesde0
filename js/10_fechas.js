/*------------------------------------------------------------    
      Tipo de datos fecha: es un tipo Objetos 
      new Date()
      new Date(year, month, day, hours, minutes, seconds, milliseconds)
      new Date(milliseconds)
      new Date(date string)
-------------------------------------------------------------- */
var d = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0); // 7 números que especifican:  año, mes, día, hora, minuto, segundo y milisegundos (en ese orden)
var d = new Date(2018, 11, 24, 10, 33, 30);    // 6 números que especifican:  año, mes, día, hora, minuto, segundo 
var d = new Date(2018, 11, 24, 10, 33);        // 5 números que especifican:  año, mes, día, hora, minuto 
var d = new Date(2018);               //1 número que especifica:  año
var d = new Date(0);                  //milisegundos en 0 es el día 01/01/1970
var d = new Date(1540000000000);      //Un día (24 horas) son 86,400,000 milisegundos.
var d = new Date(-100000000000);      
var d = new Date("October 13, 2018 11:13:00");
// Mostrar las fechas 
d.toString();
d.toUTCString();
d.toDateString();

//Formato fecha
var d = new Date("03/25/2015");   //Fecha corta YYYY-MM-DD
var d = new Date("2015-03-25");   //  ISO 8601
var d = new Date("Mar 25 2015");  //Fecha larga "MMM DD YYYY"
/*------------------------------------------------------------ 
        Métodos para obtener la fecha   
-------------------------------------------------------------
      Métodos     Descripción
getFullYear()     Devuelve el año como un número de 4 dígitos (yyyy)
getMonth()        Devuelve el mes como un número  (0-11)
getDate()         Devuelve el día como un número (1-31)
getHours()        Devuelve la hora (0-23)
getMinutes()      Devuelve los minutos (0-59)
getSeconds()      Devuelve los segundos (0-59)
getMilliseconds() Devuelve los milisegundos (0-999)
getTime()         Devuelve los millisegundos desde el 1 de Enero de 1970
getDay()          Devuelve el día de la semana (0-6)
-------------------------------------------------------------- */
var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();


/*------------------------------------------------------------ 
    Métodos para establecer la fecha
--------------------------------------------------------------   
      Métodos       Descripción
setDate()           Set the day as a number (1-31)
setFullYear()       Set the year (optionally month and day)
setHours()          Set the hour (0-23)
setMilliseconds()   Set the milliseconds (0-999)
setMinutes()        Set the minutes (0-59)
setMonth()          Set the month (0-11)
setSeconds()        Set the seconds (0-59)
setTime()           Set the time (milliseconds since January 1, 1970)
-------------------------------------------------------------- */
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;

//Referencia:https://www.w3schools.com/jsref/jsref_obj_date.asp

// calcular milisegundos desde el 
let cumple= Date.parse("April 2, 1973");
