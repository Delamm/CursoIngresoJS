/* Dylan Julian Gonzalez
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  let uno = txtIdNumeroUno.value;
  let dos = txtIdNumeroDos.value;

  uno = parseInt(uno);
  dos = parseInt(dos);

  alert(`La suma es ${uno + dos}`);
}

function restar() {
  let uno = txtIdNumeroUno.value;
  let dos = txtIdNumeroDos.value;

  uno = parseInt(uno);
  dos = parseInt(dos);

  alert(`La resta es ${uno - dos}`);
}

function multiplicar() {
  let uno = txtIdNumeroUno.value;
  let dos = txtIdNumeroDos.value;

  uno = parseInt(uno);
  dos = parseInt(dos);

  alert(`La multiplicación es ${uno * dos}`);
}

function dividir() {
  let uno = txtIdNumeroUno.value;
  let dos = txtIdNumeroDos.value;

  uno = parseInt(uno);
  dos = parseInt(dos);

  alert(`La division es ${uno / dos}`);
}
