/* Dylan Julian Gonzalez
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let uno = txtIdSueldo.value;

  uno = parseInt(uno);

  unoSuma = (10 * uno) / 100;
  txtIdResultado.value = uno + unoSuma;
}
