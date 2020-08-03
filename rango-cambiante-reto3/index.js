let firstEntry = document.getElementById('firstEntry');
let secondEntry = document.getElementById('secondEntry');
let thirdEntry = document.getElementById('thirdEntry');
let form = document.getElementById('form');

form.addEventListener('submit', rango);
function rango() {
  event.preventDefault();
  let num1 = parseInt(firstEntry.value);
  let num2 = parseInt(secondEntry.value);
  let num3 = parseInt(thirdEntry.value);

  if (num1 < num2 && num3 > num2) {
    alert(`El número ${num2} esta dentro del rango de ${num1} y rango ${num3}`);
  } else if (num1 > num2) {
    alert(`El número ${num2} esta fuera del rango inferior`);
  } else  if (num3 < num2) {
    alert(`El número ${num2} esta fuera del rango superior`);
  }
}
