/*-----------------------------------------------------------------------------
    1. Dada una cadena, encuentra la longitud de la subcadena más larga sin repetir caracteres. 

        Ejemplo 01:	
            Entrada: "abcabcbb"
            Salida: 3 
            Explicación:  La respuesta es "abc", con una longitud de 3 caracteres.
        
        Ejemplo 02:	
            Entrada: "aaaaaa"
            Salida: 1
            Explicación:  La respuesta es "a", con una longitud de 1 caracter.
-------------------------------------------------------------------------------*/
function subcadena(cadena){
    cadena=cadena.toUpperCase();            //Mayúsculas
    let largo= cadena.length;               //Largo de la cadena
    let sub=cadena.slice(0,1);              //Primer caracter
    let cont=1;                             //Subcadena al menos de un caracter
    let aux="";
    let larMax=1;                           //Guardara el largo máximo de subcadena encontrado
    let subMax=sub;                         //Gurdará la subcadena mas larga
    for (let i = 1; i < largo; i++) {       //De la posición 1 en adelante rrecorre l cadena
        aux= cadena.slice(i,i+1);           //Obtiene sólo el caracter de la posición i
        if(sub.indexOf(aux)==-1){           //Busca en la cadena si esta repetido el caracter, si no est´devuelve -1
            sub=sub+aux;
            cont=cont+1;                    //Agrega el caracter a la subcadena
        }else{
            if (cont>larMax){
                larMax=sub.length;          //Guardo el largo de la subcadena antes de borrarla
                subMax=sub;                 //Guardo la subcadena
            }
            sub=aux;                        //Empieza una nueva subcadena        
            cont=1;                         //Limpia el contador
        }

    }  
    return "La subcadena más larga antes de repetir un caracter es de: " + larMax + "caracteres y es: ' " + " '" + subMax + "'"
}

subcadena("abcabbcd");

//Añadir dificultad: que sea la subcadena mas larga abcadb en este caso bcad es la mas larga