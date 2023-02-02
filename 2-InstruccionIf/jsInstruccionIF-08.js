function mostrar() {
  let edad = txtIdEdad.value;
  let estadCivil = estadoCivil.value;

  if (edad >= 18 && estadCivil === "Soltero") {
    return alert("Es soltero y no es menor");
  }
} //FIN DE LA FUNCIÓN
