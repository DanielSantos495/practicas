let firstEntry = document.getElementById('firstEntry');
let secondEntry = document.getElementById('secondEntry');
let form = document.getElementById('form');

form.addEventListener('submit', rango);
function rango() {
  event.preventDefault();
  let num1 = parseInt(firstEntry.value);
  let num2 = parseInt(secondEntry.value);

  if (num1 > num2) {
    alert(`El número ${num2} esta dentro del rango de ${num1}`);
  } else {
    alert(`El número ${num2} esta fuera del rango de ${num1}`);
  }
}
