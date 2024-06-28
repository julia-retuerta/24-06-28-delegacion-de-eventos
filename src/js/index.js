// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const boxContainerElement = document.getElementById('container');

const printBoxContent = event => {
  if (!event.target.classList.contains('box')) {
    return;
  }

  console.log(event.target.dataset.country);
  console.log(event.target.textContent);
};

boxContainerElement.addEventListener('click', printBoxContent);

// ACCESO A OBJETOS MÚLTIPLES

const pets = {
  cat1: {
    name: 'Anubis',
    age: 9
  },
  cat2: {
    name: 'Nala',
    age: 6
  }
};

const printValue = (pet, property) => {
  console.log(pets[pet][property]);
};

printValue('cat1', 'name');
printValue('cat2', 'age');
