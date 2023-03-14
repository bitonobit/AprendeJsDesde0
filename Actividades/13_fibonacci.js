/*-----------------------------------------------------------------------------------------------------------
                Número de Fibonacci (**)
-----------------------------------------------------------------------------------------------------------
Los  números de Fibonacci , comúnmente denominados  F(n) forman una secuencia, llamada  secuencia de 
Fibonacci, de modo que cada número es la suma de los dos anteriores, a partir de 0 y 1. Es decir:
    F (0) = 0, F (1) = 1
    F (N) = F (N - 1) + F (N - 2),  para N> 1.
    Serie: 0,1,1,2,3,5,8,13,21,34,55, 89, 144, 233, ...
-----------------------------------------------------------------------------------------------------------     
Responda:
    1.- Dado N, calcular el número de Fibonacci  
    2.- Mostrar la secuencia de Fibonacci hasta N  
-----------------------------------------------------------------------------------------------------------*/
function serieFibonacci(num){
   var F=[]; 
   for (let i = 0; i <= num; i++) {
       if (i<2){
        F[i]=i;
       } else {
        F[i]=F[i-1]+F[i-2];         // Calcula el número Fibonacci
       }
    document.write(F[i]);           // Muestra la serie de Fibonacci
   } 
}

serieFibonacci(3);                  // Llama la función Fibonacci para el número 3
