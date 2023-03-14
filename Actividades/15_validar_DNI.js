/*-----------------------------------------------------------------------------
      1. Validar un DNI: dado un DNI diga si es válido o no
      Dato de prueba: 12345678Z
-------------------------------------------------------------------------------*/

function validarDNI(valor){   
    var arreglo=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var largo= valor.length;                            // calcula el largo del DNI: 9
    largo=largo-1;	                                    // le quitamos 1 al largo, que será la letra: 8
    var numero= parseInt(valor.substring(0,largo));     // obtenemos la cadena de números: 12345678
    var letra = valor.substring(largo);                 // obtenemos la cadena desde la posición 8: Z
    letra = letra.toUpperCase();                        // convertimos a mayúscula para buscar en el arreglo
    var resto= numero%23;                               // aplicamos la fórmula para validar un DNI
    if (arreglo[resto] == letra){                       // si la lera coincide con el arreglo es válido
        return "Su DNI es válido";
    }else{
        return "Su DNI es inválido";
    }
};