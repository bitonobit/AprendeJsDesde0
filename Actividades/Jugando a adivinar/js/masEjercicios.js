/************************************************************************
 *                          Mi Librería de funciones                    * 
*************************************************************************/
var r= Math.floor(Math.random() * 10) + 1;  // genera un numero aleatorio entre 1 y 10
var res="";    //inicio la variable con una cadena vacía
var i=0;       //contador de intentos

function adivina(){
     //función que adiva el número
     var x=document.getElementById("n").value;
     i++;
     document.getElementById("adivinando").innerHTML="Intento número: "+i;
     if( r==x){  //pregunto si el número introducido es igual al aleatorio que intento adivinar
          res="Felicidades adivinaste!!";
          document.getElementById("adivinado").innerHTML=res;
     }else{
          res="Nop ese no es..";
          document.getElementById("adivinado").innerHTML=res;
     }
     if(i==3){
          document.getElementById("r").innerHTML="El número es: "+r;
          i=0;
          res="";
          r= Math.floor(Math.random() * 10) + 1; // genero otro número para volver a jugar
          document.getElementById("adivinando").innerHTML="Empezamos otra vez!";
          document.getElementById("adivinado").innerHTML="";
     }
}


// Inicio de variables

var y=prompt("Introduce una palabra de 5 letras: ").toUpperCase();
if(y.length==5){
var palabra=Array.from(y);
y=palabra.toString();
var res=["_","_","_","_","_"];
var err="";  
var intentos=6;
} else {
   alert("La palabra no es de 5 letras, no hagas trampa"); 
   location.reload();
}

function ahorcado(x){
     var ocu=0;
     x=x.toUpperCase();
     for(let j=0;j<5;j++){
          if(x==palabra[j]){
               res[j]=palabra[j];
               ocu++;
          }
     }
     if(ocu==0){
          men="La letra: <strong>"+ x +"</strong> no esta.Te quedan: <strong>"+ --intentos +"</strong> intentos";
          err+=x + " ";
     }else{
          men="La letra: <strong>"+ x +"</strong> esta "+ ocu +" vez/ veces";
     }
     var ver=res.toString();
     document.getElementById("p01").innerHTML=men;
     document.getElementById("p02").innerHTML=ver;
     document.getElementById("p03").innerHTML=err;
     document.getElementById("l").value="";
     
     if(y==ver){
          document.getElementById("p04").innerHTML="¡F E L I C I D A D E S      A D I V I N A S T E !!!";
     }else{
          if(intentos<=0){
               document.getElementById("p04").innerHTML="¡Lo siento haz perdido! Tu invitas el café. La palabra era: <strong>"+ y +"</strong> ";
          }
     }
     
}