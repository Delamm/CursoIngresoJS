// Dylan Julian Gonzalez

function mostrar() {
  let edad = txtIdEdad.value;

  if (edad >= 18) {
    return alert(`Usted tiene ${edad} y es mayor de edad `);
  } else if (edad < 18 && edad >= 13) {
    return alert(`Usted tiene ${edad} y es adolescente`);
  } else if (edad < 13) {
    return alert(`Usted tiene ${edad} y es un niño `);
  }
} //FIN DE LA FUNCIÓN
