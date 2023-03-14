/*---------------------------------------------------------------------------------------    
    1. Determina si una palabra es palíndrome
--------------------------------------------------------------------------------------- */
var palabra= prompt("Escribe una palabra","");
var largo=palabra.length;
palabra=palabra.toUpperCase();
var a=palabra.slice(-1);
for (let i = 1; i <= largo; i++) {
    a+=palabra.slice(-i-1,-i);
}
palabra == a ?  console.log("La palabra es un plalíndromo") : console.log("La palabra NO es un plalíndromo");

