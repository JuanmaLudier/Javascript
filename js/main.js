/*let nombre = prompt("Ingrese su Nombre");
let edad = prompt("Ingrese su Edad");

alert("Bienvenido " + nombre + " tu tienes " + edad + " años de edad.")
alert("Gracias por inscribirte a este lindo curso")*/

/*let modoOscuro = true;

if (modoOscuro) {
  console.log("modo oscuro activado");
}

if (modoOscuro == false) {
  console.log("no esta en modo oscuro");
}

let x = prompt("Ingrese su Nota");

if (x < 7) {
  console.log("Te la llevaste a diciembre");
  alert("Te la llevaste a diciembre");
} else if (x == 7) {
  console.log("Aprobaste con lo justo");
  alert("Aprobaste con lo justo");
} else {
  console.log("Pasaste de taquito");
  alert("Pasaste de taquito");
}*/

/*let hijo = 10;
let padre = 18;
let pagoLaEntrada = true;

if ((pagoLaEntrada == true && padre >= 18) || hijo >= 18) {
  console.log("PUEDEN ENTRAR");
} else(console.log("NO PUEDEN ENTRAR")
)

for(let i = 0; i < 10; i++){

alert(i)
}*/

/*let tabla = 2;
let resultado;

for(let i = 1; i <= 10; i++){

  resultado = tabla * i;
  console.log(tabla + " x " + i + " es igual a " + resultado);

}*/

/*for(let i = 1; i <= 5; i++){

  let ingresarNombre = prompt("ingresar nombre");
  alert(" Turno n° " + i + " a nombre de " + ingresarNombre)
  console.log(" Turno n° " + i + " a nombre de " + ingresarNombre);
}*/

//Ultima clase vista 3. Ciclos/iteraciones minuto 30

let emisorRI = "Responsable inscripto";
let emisorMono = "Monotributista";
let emisorEx = "Exento";
let receptor1 = "1.Consumidor final / Exento";
let receptor2 = "2.Monotributista";
let receptor3 = "3.Responsable inscripto";
let receptor4 = "4.Exportación";
let receptor5 = "5.Turista del extranjero";

let tipoComp = prompt(
  "Escriba el numero de la opcion seleccionanda: Emitire una Facura para \n" +
    receptor1 +
    ", \n" +
    receptor2 +
    ", \n" +
    receptor3 +
    ", \n" +
    receptor4 +
    ", \n" +
    receptor5
);

switch (tipoComp) {
  case "1":
    alert(
      "Usted podra emitir: \nFacturas B en caso de ser " +
        emisorRI +
        "." +
        "\nFacturas C en caso de ser " +
        emisorMono +
        "/" +
        emisorEx +
        "."
    );
    break;
  case "2":
    alert(
      "Usted podra emitir: \nFacturas A en caso de ser " +
        emisorRI +
        "\nFacturas C en caso de ser " +
        emisorMono +
        "/" +
        emisorEx +
        ". " +
        " \nIMPORTANTE: Las facturas que emita un R.I. a un Monotributista deben contener la leyenda 'El crédito fiscal discriminado en el presente comprobante, sólo podrá ser computado a efectos del Régimen de Sostenimiento e Inclusión Fiscal para Pequeños Contribuyentes de la Ley Nº 27.618.'" +
        " \nPor su parte, los comprobantes que emita un R.I. a otro podrán ser, dependiendo de la autorización con la que cuente el emisor: Tipo 'A'. Tipo 'A' con leyenda 'Operación sujeta a retención'. Tipo 'M'"
    );
    break;
  case "3":
    alert(
      "Usted podra emitir: \nFacturas A en caso de ser " +
        emisorRI +
        "." +
        "\nFacturas C en caso de ser " +
        emisorMono +
        "/" +
        emisorEx +
        "."
    );
    break;
  case "4":
    alert(
      "Usted podra emitir: \nFacturas E en caso de ser " +
        emisorRI +
        "." +
        "\nFacturas E en caso de ser " +
        emisorMono +
        "/" +
        emisorEx +
        "."
    );
    break;
  case "5":
    alert(
      "Usted podra emitir: \nFacturas B o T en caso de ser " +
        emisorRI +
        "." +
        "\nFacturas C en caso de ser " +
        emisorMono +
        "/" +
        emisorEx +
        "."
    );
    break;
    case "":
    alert(
      "Usted no eligio ninguna opcion"
    );
    break;
  default:

  if(tipoComp != "1" || "2" || "3" || "4" || "5"){
    alert(
      "La opcion seleccionada no esta en el listado"
    );
  }
}
