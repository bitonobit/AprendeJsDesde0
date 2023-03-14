/*************************************************************************************
            Ejemplos de métodos para manipular el DOM
**************************************************************************************/
var miElemento = document.getElementById("idMiElemento");    // donde idMiElemento será el id de algun elemento html
var x = document.getElementsByTagName("p");                 // donde los elementos a seleccionar son los párrafos
var x = document.getElementsByClassName("miClase");        // Seleccionará todas las etiquetas html con atributo class="miClase"
var x = document.querySelectorAll("p.miClase");              //Seleccionas todos los párrafos con el atributo class="miClase"
// ver ejemplo  03_manipular_el_DOM.html

document.getElementById("miImagen").src = "otraImagen.jpg"; // Permite cambiar una imagen,cambiando el atributo scr 
document.getElementById("p2").style.color = "blue";         // Cambia el color de un párrafo co id="p2"