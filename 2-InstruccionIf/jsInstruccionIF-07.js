// Dylan Julian Gonzalez

function mostrar() {
  let edad = txtIdEdad.value;
  let estadCivil = estadoCivil.value;

  if (edad < 18 && estadCivil !== "Soltero") {
    return alert("Es muy pequeño para NO ser soltero");
  }
} //FIN DE LA FUNCIÓN
