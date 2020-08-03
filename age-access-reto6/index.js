let firstEntry = document.getElementById('firstEntry');
let form = document.getElementById('form');


form.addEventListener('submit', rainOrNot);
function rainOrNot() {
  let ages = [30, 18, 29];

  let ageInput = parseInt(firstEntry.value.toLowerCase());
  event.preventDefault();

  if (ageInput >= ages[0]) {
    console.log('Nunca es tarde para aprender ¿Qué curso tomaremos?')
  } else if (ageInput >= ages[1] && ageInput <= ages[2]) {
    console.log('Es un momento excelente para impulsar tu carrera.');
  } else if (ageInput < ages[1]) {
    console.log('¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.');
  }
}
