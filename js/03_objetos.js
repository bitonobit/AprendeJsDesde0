
/*------------------------------------------------------------    
      Tipo de datos estructurados: Objetos
-------------------------------------------------------------- */
/*  Sintaxis: 

   1. Crear un Objeto
      var coche = {tipo:"Fiat", modelo:"500", color:"Blanco"};
      
   2. Mostrar una propiedad del objeto en un elemento del html
      document.getElementById("demo").innerHTML = coche.tipo;

  3.  Acceder a una propiedad de un objeto:
      nombreObjeto.propiedad 
  
  4.  Acceder a un método de un objeto:
      nombreObjeto.metodo()
*/

// Declaración y creación de objeto
var persona = {Nombre:"Candy", Apellido:"González", Edad:45, Sexo:"Mujer"};     // Creación de un objeto

// Declaración y creación de objeto
const personaje = {                     
    nombre:"Gabriel",
    apellido:"García",
    edad: 25,
    sexo:"Hombre"
};
/********************************* Hasta aquí primera parte ********************************************* */


//Acceder a una propiedad
console.log(personaje.apellido);            // García
console.log(personaje.edad);                // 25

//Modificar una proppiedad
personaje.apellido="García Marquez"         
console.log(personaje.apellido);            // García Marquez

// Agregar una propiedad
personaje.nacionalidad="Colombiano";
console.log(personaje);

// Objetos anidados
const alumno = {                     
    nombre:"Candy",
    apellido:"González",
    edad: 52,
    sexo:"Mujer",
    notas:{ UF1: 10,
            UF2: 8,
            UF3: 9
    }
};

// Acceder a una propiedad anidada
console.log(alumno.notas.UF1);  // 10

//Remover una propiedad
delete alumno.sexo;

//Remover una propiedad anidada
delete alumno.notas[UF1];       //notación de []
delete alumno.notas.UF2;        // notación de .

//Métodos de los objetos
var poeta = {
    nombre: "José Ángel",
    apellido : "Buesa",
    id       : 5566,
    nombreCompleto : function() {                 //Un método es una función almacenada como una propiedad.
        return this.nombre + " " + this.apellido;
    }
};

cod = poeta.id;                     // así llamo a una propiedad
nombre = poeta.nombreCompleto();    // así llamo a un método

//También puedo crear un objeto vacío y luego le agrego propiedades
const ejemplo={};
ejemplo.uno="primer elemento";
ejemplo.dos="segundo elemento";

//Otra forma de crear un objeto es:
const bebe = new Object();
bebe.nombre = "Sebas";
bebe.Apellido = "Fernández";
bebe.peso=3.15;


/* -------------------------------
    Recorrer un objeto
----------------------------------
Sintaxis: 
      for (let variable in object) {
        // code to be executed
      }
*/
for (let x in bebe) {
  txt += bebe[x];
}
console.log(txt);


//Cómo recorrer objetos más complejos
const objComplejo = {
  vendedor: "César",
  edad: 45,
  coches: [
    {nombre:"Ford", modelo:["Fiesta", "Focus", "Mustang"]},
    {nombre:"BMW", modelo:["320", "X3", "X5"]},
    {nombre:"Fiat", modelo:["500", "Panda"]}
  ]
}
//Recorrido
var x="";
for (let i in objComplejo.coches) {
  x += "<p>" + objComplejo.coches[i].nombre + "</p>";
  for (let j in objComplejo.coches[i].modelo) {
    x += objComplejo.coches[i].modelo[j];
  }
}


/*Otro bucle de iterables
for (const x of objeto) {
  // code block to be executed
}


*/




/*------------------------------------------------------------    
      Creación de una calse
-------------------------------------------------------------- */
/*  Sintaxis: 

   1. Usa la palabra clave class para crear una clase 
   2. Siempre agrega un método de constructor
   3. Llama al método constructor cada vez que inicialices el objeto de clase
        class coche {
        constructor(brand) {
            this.cocheNombre = brand;
        }
        }
*/

class coche {
    constructor(brand) {
      this.cocheNombre = brand;
    }
  }
  
  miCoche = new coche("Ford");     //El método del constructor se llama automáticamente 
                                   //cuando se inicializa el objeto.


class vehiculo {
    constructor(n) {
      this.vehiculoNombre = n;
    }
    static hola() {                //Los métodos estáticos pertenecen a la clase y no a la instancia del objeto
        return "Hola pepsicola!!";
    }
  }
  
  miVehiculo = new vehiculo("Honda");     //El método del constructor se llama automáticamente 
                                        //cuando se inicializa el objeto.
  console.log(miVehiculo.hola());       //esto dará error
  console.log(vehiculo.hola());         //esto mostrará Hola pepsicola!!


/*------------------------------------------------------------    
     Herencia
-------------------------------------------------------------- */
/*   
   1. Usa la palabra clave extends para heredar todos los métodos de otra clase 
   
   Sintaxis:
    class claseNueva extends claseDeLaQueSeHereda {
        constructor(p1, p2) {
        super(p1);                      //llama al constructor de la clase padre
        this.novela = gen;                
        }
    }

*/

class libro {
    constructor(t) {
      this.libroNombre = t;
    }
    inventario() {
      return 'Hay un ejemplar de: ' + this.libroNombre;
    }
  }
  
  class novela extends libro {
    constructor(t, gen) {
      super(t);                     // llama al constructor de libro que es la clase padre
      this.novela = gen;
    }
    show() {
      return this.inventario() + ', género ' + this.novela;
    }
  }
  
  miNovela = new novela("Alex", "Policíaca");
 // document.getElementById("demo1").innerHTML = miNovela.show();


/*------------------------------------------------------------    
        Métodos Getter y Setter
-------------------------------------------------------------- */
/* 
    1. Proporcionan una sintaxis más simple
    2. Permite llamar a estos métodoscomo  si fueran propiedades
    
    Sintaxis:
        get nombreMétodo() {
            instrucciones;
        }

         set nombreMétodo() {
            instrucciones;
        }
*/
class cuento extends libro {
    constructor(t, gen, len) {
      super(t);                     // llama al constructor de libro que es la clase padre
      this.cuento = gen;
      this.idioma= len;
      this.autor="anónimo";
      
    }
    show() {
      return this.inventario() + ', género ' + this.cuento;
    }
    get lenguaje() {
        return this.idioma.toUpperCase();
    }
    set _autor(_autor) {
        this.autor = _autor.toUpperCase();
     }
  }
    miCuento = new cuento("Caperucita Roja", "Hadas", "Español");
    // document.getElementById("demo2").innerHTML = miCuento.lenguaje;
    miCuento._autor = "horacio";
    //document.getElementById("demo3").innerHTML = miCuento.autor;
