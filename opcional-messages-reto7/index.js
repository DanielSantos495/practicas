let firstEntry = document.getElementById('firstEntry');
let form = document.getElementById('form');


form.addEventListener('submit', rainOrNot);
function rainOrNot() {

  let numMessage = parseInt(firstEntry.value.toLowerCase());
  event.preventDefault();

  switch(numMessage) {
    case 1:
      console.log('Hoy aprenderemos sobre progamación');
      break;
    case 2:
      console.log('¿Qué tal tomar un curso de marketing digital?');
      break;
    case 3:
      console.log('Hoy es un gran día para comenzar a aprender de diseño');
      break;
    case 4:
    console.log('Y si aprendemos algo de negocios online');
      break;
    case 5:
      console.log('Veamos un par de clases sobre producción audiovisual');
      break;
    case 6 :
      console.log('Tal vez sea bueno desarrollar una habilidad blanda en Platzi');
      break;
    default:
      console.log('Ingresa un número valido, recuerda que es del 1 al 6');
  }
}
