/*-----------------------------------------------------------------------------
    1. Dada una Ip válida, crea una función que devuelva una Ip defanged de 
    esa dirección IP
-------------------------------------------------------------------------------*/
function defanged(ip){
    return ip.replace(/\./g, "[.]");    // Remplaza . por [.]
}

defanged("192.168.0.1");