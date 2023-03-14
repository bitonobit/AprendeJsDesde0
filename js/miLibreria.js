/************************************************************************************
                                Esta es mi Librería de funciones
*************************************************************************************/
function dw(x){
    //función que escribe en el documento html lo que le pase por el parámetro x
    document.write(x);
}

function gId(x,y){
    /* Función que selecciona un elemento por el Id según el parámetro x y 
    escribe dentro del elemento HTML el valor del parámetro y*/
    document.getElementById(x).innerHTML=y;
}

/************************************************** 
Excelente trabajo, Adriana, ¡Te felicito!*/
// Punto 1


//Ejercicio 1), pedir nombre y edad al usuario, para determinar si es mayor de edad y puede registrarse
function mayoriaDeEdad(){

    //Declaramos las variables
    var nombre="";var edad=0;
    
    nombre = document.getElementById("nombre").value;  //Guardamos el valor del nombre, tecleado en la página HTML

    edad = document.getElementById("edad").value;  //Guardamos el valor del nombre, tecleado en la página HTML

    //Verificamos si el usuario es mayor de edad, mostrando el mensaje correspondiente en el documento HTML
    if(edad<18){

        document.getElementById("registrado").innerHTML= nombre+", es usted MENOR DE EDAD, por lo tanto NO PUEDE REGISTRARSE.";

    }else{

        document.getElementById("registrado").innerHTML= nombre+", es usted MAYOR DE EDAD, ¡felicidades!, PUEDE REGISTRARSE.";

    }

};


//Ejercicio 2), obtener el factorial de un número: n!
function numeroFactorial(){

    //Almacenamos el número en una variable
    var num=document.getElementById("numFac").value;

    //Calculamos el factorial del número, verificando que el número no es negativo ni 0, mostrando en tal caso el resultado por pantalla
    if(num>=1){

        var res = 1;  //Comenzamos a calcular el factorial por el número 1

	    for(var i=1; i<=num; i++) {

		    res *= i;  //Vamos multiplicando el valor almacenado en el campo res por la variable del contador, hasta llegar al número dado por el usuario

	    }

        //Una vez salimos del bucle del cálculo del factorial, mostramos en el documento HTML el valor final del acumulador 'res'
	    document.getElementById("factorializado").innerHTML="El resultado de "+num+"!"+" es: "+res;  

    }else{

        //En el caso de que el número introducido no sea positivo, o sea igual a 0, se muestra un mensaje de aviso al usuario
        alert("¡Debe introducir un número positivo, mayor que 0, el factorial de 0 es 1!");  

    }

};


//Ejercicio 3), Determinar si la palabra dada por el usuario es un palíndromo.

function esPalindromo(){

    var palabra = document.getElementById("palabra").value;  //Almacenamos la variable introducida por el usuario en una variable

    var inverseStr = "";var pLength=0;  //Declaramos las variables que contendrán la cadena invertida de la palabra, y la longitud de la palabra

    pLength = palabra.length;   //Almacenamos la longitud de la palabra

    /*Inicializamos el valor del campo contador con la longitud de la cadena de la palabra. El bucle va decrementando desde el último valor del índice
    de los caracteres de la cadena, ya que se toman como un array en el campo que guarda el string. Empezamos por el último caracter, almacenándolo y
    concatenándolo con los demás caracteres, en orden inverso, en el campo acumulador. Al índice le damos un valor -1, ya que palabra.length cuenta
    la posición 0 del array como 1, lo que descuadraría el índice de elementos */

    for(let i = pLength ; i > 0 ; i--){    //Mediante un bucle concatenamos los caracteres de la palabra en la variable, en orden inverso

        inverseStr += palabra[i-1];    

    }

    /*Si la variable de la palabra introducida coincide con la variable que almacena los caracteres de la palabra en sentido inverso, 
    mostramos un mensaje*/
    if(palabra == inverseStr){   

        document.getElementById("palRevisadp").innerHTML="La palabra "+palabra+", ES PALÍNDROMO.";

    }else {  //Si las dos variables no coinciden, mostramos un mensaje

        document.getElementById("palRevisadp").innerHTML="La palabra "+palabra+", NO ES PALÍNDROMO.";
        
    }
};
    


