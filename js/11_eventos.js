/*************************************************************************************
                            Eventos
--------------------------------------------------------------------------------------
      Sintaxis en html:  <element event="código de Js"></element>

	Evento		      Descripción
      ------------            ----------------------------------------
      onchange			Un elemento HTML ha sido cambiado
      onclick		      El usuario hace clic en un elemento HTML 
      onmouseover			El usuario mueve el mouse sobre un elemento HTML.
      onmouseout			El usuario aleja el mouse de un elemento HTML.
      onkeydown			El usuario presiona una tecla del teclado
      onload			El navegador ha terminado de cargar la página.
----------------------------------------------------------------------

***************************************************************************************/

var btn= document.getElementById("myBtn");      //Guarda el boton
btn.addEventListener("click", displayDate);
        function displayDate() {
              document.getElementById("demo").innerHTML = Date();
        }