const productos = [
  { nombre: "Guisande", matricula: 20100, cuotaSocio: 500, planMedico: 8750 },
  { nombre: "Julian", matricula: 20350, cuotaSocio: 1500, planMedico: 21300 },
  { nombre: "Hugo", matricula: 20525, cuotaSocio: 1000, planMedico: 13000 },
];

//BUSQUEDA POR APELLIDO
const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () => {
  resultado.innerHTML = "";

  //console.log(formulario.value);
  const texto = formulario.value.toLowerCase();

  for (let producto of productos) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML = `<li>${producto.nombre} - Matricula: ${producto.matricula} - Cuota Social: ${producto.cuotaSocio} - Plan Medico: ${producto.planMedico}</li>`;
    }
    if (resultado.innerHTML == "") {
      resultado.innerHTML = `<li>Medico no encontrado</li>`;
    }
  }
};

boton.addEventListener("click", filtrar);

//formulario.addEventListener("keyup", filtrar);
