//Dylan Julian Gonzalez

function mostrar() {
  let nota = Math.round(Math.random() * 10);

  if (nota >= 9) {
    return alert(`Tu nota es un ${nota}, EXCELENTE`);
  } else if (nota > 4) {
    return alert(`Tu nota es un ${nota}, APROBÓ`);
  } else if (nota < 4) {
    return alert(`Tu nota es un ${nota}, Vamos, la proxima se puede`);
  }
} //FIN DE LA FUNCIÓN
