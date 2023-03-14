/*-----------------------------------------------------------------------------------------------------------------    
                Manipulación de Texto: Tipo String.
    Cada caracter de la cadena está numerado comenzando desde 0
------------------------------------------------------------------------------------------------------------------ */

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		// Crea una cadena de caracteres
var sln = txt.length;						          // largo de la cadena
"Candy".length;                           // largo de la cadena: devuelve 5
"Estoy escribiendo código como un genio".length > 10;  	// Devuelve true

/*-------------------------------------------------------------------------------------------------------------------    
1. Cortar Cadenas
    slice(inicio, fin) : extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena
    substring(inicio, fin) : similar a silice, pero no puede aceptar índices negativos 
    substr(inicio, largo) : similar a silice, pero el segundo parámetro especifica la longitud de la parte extraída.
------------------------------------------------------------------------------------------------------------------- */
var str = "0123456789, ABCDE";
var sub = str.slice(10, 16);           /* devuelve un trozo de la cadena, desde el caracter 10 hsta el 15 
                                          porque no incluye al último caracter. En este caso: ", ABCD".*/
sub = str.slice(4);                    /* Si sólo se incluye un parámetro la subcadena resultante será desde la posición 
                                          indicada hasta el final. En este caso: 456789, ABCDE */
sub = str.slice(-1);                    /* Si un parámetro es negativo, la posición se cuenta desde el final de la cadena,
                                           en este caso devuelve el último caracter E */
sub = str.slice(-3);                    // Devuelve CDE
sub = str.slice(-3,-1);                 // Devuelve CD porque la última posición no está incluida

"milanesas".substring(3,7);             /* Devuelve un trozo de la cadena, desde el caracter 3 hasta el 7 
                                           porque no incluye al último caracter. En este caso: "anes"  */
console.log("Enero".substring(0,3));	  // "Ene"
sub= str.substr(5, 3);                  // Devuelve desde el caracter 5, 3 caracteres. En este caso 567

/*----------------------------------------------------------------------------------------------------------------------    
    2. Reemplazar contenido de cadena 
        replace() : reemplaza un valor especificado con otro valor en una cadena
---------------------------------------------------------------------------------------------------------------------- */
var str = "Mi nombre es Candy";
str= str.replace("Candy", "Carolina");    // Remplaza Candy por Carolina

/*----------------------------------------------------------------------------------------------------------------------    
    3. Convertir String
        String() : convierte a string
        toUpperCase() : convierte a mayúsculas

---------------------------------------------------------------------------------------------------------------------- */
String(true);               		      	// Convierte a string el contenido del parentesis
var text2 = text1.toUpperCase(); 	    	// Convierte a string a mayúsculas
var text2 = text1.toLowerCase(); 		    // Convierte a string a minúsculas

/*----------------------------------------------------------------------------------------------------------------------    
    4. Unir o concaatenar String
        concat()
        +
---------------------------------------------------------------------------------------------------------------------- */
var text1 = "Una forma de";
var text2 = "concatenar";
var text3 = text1.concat(" ", text2);

/*----------------------------------------------------------------------------------------------------------------------    
    5. Extraer caracteres de cadena
---------------------------------------------------------------------------------------------------------------------- */
var str="Hola";
str.charAt(0);             				      // devuelve el carácter en la posición especificada:"H" 
str.charCodeAt(0);         				      // devuelve el unicode del caracter de la posición indicada: 72

/*----------------------------------------------------------------------------------------------------------------------    
    6. Encontrar subcadenas
---------------------------------------------------------------------------------------------------------------------- */
str="Estoy escribiendo javascript como un experto, porque practicando me hago más experto"     
var pos=str.indexOf("experto");         //devuelve la posición de la primera aparición de un texto especificado en una cadena
pos=str.lastIndexOf("experto");         //devuelve la posición de la última aparición de un texto especificado en una cadena
//Ambos indexOf(), y lastIndexOf() devuelven -1 si no se encuentra el texto.
pos = str.search("experto");

/*----------------------------------------------------------------------------------------------------------------------    
    7. Eliminar los espacios en blanco al principio y al final de un string
---------------------------------------------------------------------------------------------------------------------- */
str = "       Esta es mi cadena        ";
str=str.trim();

/*----------------------------------------------------------------------------------------------------------------------    
    8. Convertir un string a un arreglo
---------------------------------------------------------------------------------------------------------------------- */
str="lunes martes miercoles jueves sabado domingo";         // String
str.split(" ");                                             // Split en los espacios en blanco
str="Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
str.split(",");                                             // Split en las comas

// Caracteres de escape
  var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
  alert(mensaje);
/*------------------------------------------------------------------------
Para incluir...       Se debe incluir...
Una nueva línea           \n
Un tabulador              \t
Una comilla simple        \'
Una comilla doble         \"
Una barra inclinada       \\
------------------------------------------------------------------------*/