/* Dylan Julian Gonzalez
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let uno = txtIdNumeroUno.value;
  let dos = txtIdNumeroDos.value;

  uno = parseInt(uno);
  dos = parseInt(dos);

  alert(`La suma es ${uno + dos}`);
}
