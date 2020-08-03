let firstEntry = document.getElementById('firstEntry');
let form = document.getElementById('form');

form.addEventListener('submit', animalFavorite);
function animalFavorite() {
  event.preventDefault();
  let animal = firstEntry.value.toLowerCase();
  console.log(animal)

  if (animal === 'tortuga') {
    alert(`La ${animal} también es mi animal favorito `);
  } else {
    alert(`Ese animal es genial, pero prefiero las tortugas`)
  }
}
