//Economia Argentina
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




  