/*Economia Argentina
let entrada = parseFloat(prompt("INGRESE SU SUELDO"));
if (entrada <= 50000) {
    alert("USTED ESTA POR DEBAJO DE LA LINEA DE POBREZA");
} else {
    alert("USTED ESTA POR ENCIMA DE LA LINEA DE POBREZA");
}  

//Carnet de afiliacion obra social
let persona    = prompt("Ingresar nombre");
let domicilio  = prompt("Ingresar domicilio");
let pais       = prompt("Ingresar nacionalidad");
let documento  = prompt("ingresar DNI")
let nacimiento = prompt("Ingresar fecha de nacimiento");
const codigo   = (documento + nacimiento);
let carnet = "N° Afiliado: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Documento: "+documento+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet);

//Tabla del cuatro
let tabla = 4;
let resultado;

for (let i = 1; i <= 10; i++) {
  resultado = tabla * i;
  console.log(tabla + " x " + i + " es igual a " + resultado);
}

//Sistema de turnos
for (let i = 1; i <= 5; i++) {

let ingresarNombre = prompt("Ingresar nombre");
alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
}

//OBJETOS
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.piernas = 2;
}

const persona1 = new Persona('Homero', 39);

persona1.edad = 50;
persona1.nombre = 'pepa la cerdita';
console.log(persona1.nombre);


//OBJETOS
function Persona(nombre, edad) {
  //constructor
  this.nombre = nombre;
  this.edad = edad;
  this.piernas = 4;

  //funciones
  this.hablar = function () {
    console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
  };
  this.resetear = function () {
    this.nombre = '';
    this.edad = 0;
    this.piernas = 0;
  };
}


//OBJETOS CON ES6
class Persona {
  //constructor
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.piernas = 4;
  }
  //funciones
  hablar() {
    console.log('hola yo soy ' + (this.nombre || 'amigo') + ' tengo ' + this.piernas + ' piernas!');
  }
  resetear() {
    this.nombre = '';
    this.edad = 0;
    this.piernas = 0;
  }
}

const persona1 = new Persona('Homero', 39);
persona1.resetear();
persona1.hablar();*/


/*PRIMER ENTREGA DESAFIO (EJEMPLO 1)
let producto = prompt("Ingrese una de estas opciones de compra (zapatoshombre, zapatosmujer)");
let preciozapatos = (10500);
let producto2 = prompt("Ingrese una de estas opciones de compra (remerahombre, remeramujer)");
let precioremeras = (2300)
let producto3 = prompt("Ingrese una de estas opciones de compra (pantalonhombre, pantalonmujer)");
let preciopantalon = (5000)

console.log("El total de su compra es de" + " " + (preciozapatos + precioremeras + preciopantalon));

//PRIMER ENTREGA DESAFIO (EJEMPLO 2)
let persona    = prompt("Ingresar nombre");
let domicilio  = prompt("Ingresar domicilio");
let pais       = prompt("Ingresar nacionalidad");
let documento  = prompt("ingresar DNI")
let nacimiento = prompt("Ingresar fecha de nacimiento");
const codigo   = (documento + nacimiento);
let carnet = "Nombre: "+ persona + " " +
             "Pais: " + pais + " " +
             "Documento: " + documento + " " +
             "Nacimiento: " + nacimiento + " " +
             "Domicilio: " + domicilio;

console.log(carnet)             
console.log("Su numero de afiliado es " + codigo);*/