/*-----------------------------------------------------------------------------
    // Dado un arreglo de números, escribe una función para mover todos los 0's 
    al final de la misma mientras se mantiene el orden relativo de los elementos 
    que no son cero?

        Ejemplo 01:	
            Entrada: [0,1,0,3,12]
            Salida: [1,3,12,0,0] 
-------------------------------------------------------------------------------*/
function e01(entrada) {
    var n= entrada.length;              //Largo del arreglo
    var salida=[];                      //creamos un arreglo para la salida
    for (let i = 0; i < n;  i++) {      //Bucle que recorre el arreglo de entrada 
        if(entrada[i]!==0){             //buscando los valores que no son ceros
        salida.push(entrada[i]);        //Pasando los valores al arreglo de salida
        } 
    }
    var s= salida.length;
    if(n>s){
        for (let i = 0; i < n-s;  i++) {        //Bucle que rrellena los ceros al final
            salida.push(0);
        }
    } 
    return salida;
}

console.log(e01([ 0, 1, 0, 3, 12 ]));