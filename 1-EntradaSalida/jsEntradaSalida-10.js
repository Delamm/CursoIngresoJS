/* Dylan Julian Gonzalez
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let uno = txtIdImporte.value;

  uno = parseInt(uno);

  unoSuma = (25 * uno) / 100;
  txtIdResultado.value = uno - unoSuma;
}
