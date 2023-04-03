const medicos = [
  {
    nombre: "Guisande",
    matricula: "20100",
    especialidad: "Ginecologo",
    cuotaSocio: 500,
    planMedico: 11500,
  },
  {
    nombre: "Julian",
    matricula: "20350",
    especialidad: "Todologo",
    cuotaSocio: 500,
    planMedico: 15700,
  },
  {
    nombre: "Hugo",
    matricula: "20525",
    especialidad: "Pediatra",
    cuotaSocio: 500,
    planMedico: 9500,
  },
];

//BUSCAR POR NOMBRE
document.getElementById("show").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.toLowerCase();
  const buscar = medicos.find(
    (buscar) => buscar.matricula.toLowerCase() === nombre
  );

  if (buscar) {
    alert(`Bienvenido Dr/a ${buscar.nombre}, Su matricula es ${buscar.matricula}. Se especiliza en ${buscar.especialidad}
    Su deuda de Cuota Social es ${buscar.cuotaSocio}
    Su deuda de Plan Medico es ${buscar.planMedico}`);
  } else {
    alert("Usted no es socio del circulo medico");
  }
});
