/*Para crear un mapa en Js se usa: new Map() */

const frutas = new Map([
    ["manzanas", 500],
    ["plátanos", 300],
    ["naranjas", 200]
  ]);

/* Se puede crear un mapa vacío y agregar los valores luego */
// Crea un Mapa
const frutero = new Map();

// asigna los valores en mapa
frutero.set("Kiwis", 500);
frutero.set("Fresas", 300);
frutero.set("Moras", 200);

//Obtener un valor
frutero.get("Fresas");    // Devuelve 300
var largo=frutero.size;  //devuelve 3 que es el nº de elementos del mapa

frutero.delete("Moras"); //borre el elemento moras
frutero.clear();     // los elimina todos

frutero.has("Fresas");  //Devuelve true si Fresas está en el mapa

//SAber más: https://www.w3schools.com/js/js_object_maps.asp