let firstEntry = parseInt(prompt('Introduce un número'));
let secondEntry = parseInt(prompt('Introduce un número'));
let diferencia = firstEntry - secondEntry



if (firstEntry > secondEntry) {
  alert(`${firstEntry} Es el número mayor y la diferencia de los dos es ${Math.abs(diferencia)}`);

} else {
  alert(`${secondEntry} Es el número mayor y la diferencia de los dos es ${Math.abs(diferencia)}`);
}
