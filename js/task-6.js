function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const divBox = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  divBox.innerHTML = '';
  const howMuch = parseInt(input.value);

  if (howMuch > 0 && howMuch <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < howMuch; i++) {
      const div = document.createElement('div');

      div.classList.add(`div-${i}`);
      const size = 30 + i * 10;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();

      fragment.appendChild(div);
    }

    divBox.appendChild(fragment);
  }
  input.value = '';
}

function destroyBoxes() {
  divBox.innerHTML = '';
  input.value = '';
}
