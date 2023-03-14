/*-----------------------------------------------------------------------------------------
    Se da una cadena que representa un registro de asistencia para un estudiante. 
    El registro sólo contiene los siguientes tres caracteres:
        'A' : Ausente.
        'T' : Tarde
        'P' : Presente.
    Se recompensará a un estudiante si su registro de asistencia no contiene más de 
    una 'A' (ausente) o más de dos 'T' continuas (tarde) .
    Debe devolver si el estudiante puede ser recompensado de acuerdo con su registro 
    de asistencia.
    Ejemplo 01:	Entrada: "PPATTP"
 	Salida: Verdadero
-------------------------------------------------------------------------------------------*/
function recompensar(asistencia){
    let str=asistencia.toUpperCase();
    let largo=str.length;
    let ausencias=0;
    let tardes=0;
    let letra="";
    for (let i = 0; i < largo; i++) {
        letra=str.charAt(i)
        if (tardes<2){
            if (letra=="A"){
                    ausencias=ausencias+1;
                    tardes=0;
                }else if (letra=="T"){ 
                    tardes=tardes+1;
                }else{
                    tardes=0;
                }
        }else{
            return false;
        } 
    }
    if (ausencias>1){
        return false;
    }
    return true;
}
var asistencia= prompt("Escribe la cadena de asistencia","");
recompensar(asistencia);