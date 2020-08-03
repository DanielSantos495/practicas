let firstEntry = document.getElementById('firstEntry');
let secondtEntry = document.getElementById('secondtEntry');
let formRain = document.getElementById('formRain');
let formWind = document.getElementById('formWind');


formRain.addEventListener('submit', rainOrNot);
formWind.addEventListener('submit', rainOrNot);
function rainOrNot() {

  let rain = firstEntry.value.toLowerCase();
  let wind = secondtEntry.value.toLowerCase();
  let yes = 'si';
  let no = 'no';
  event.preventDefault();

  if (event.path[0].id === 'formRain') {

    if (rain === yes) {
      formWind.style.display = 'block';
      formRain.style.display = 'none';
    } else if (rain === no) {
      console.log(`Ten un lindo día`);
    }
  }

  if (event.path[0].id === 'formWind') {
    if (wind === yes) {
      console.log(`Con este viento tan fuerte con la sombrilla sales volando, mejor no la lleves o no salgas, perrifly`);
    } else if (wind === no) {
      console.log(`Sal con sombrilla, así no te mojas`);
    }
  }
}
