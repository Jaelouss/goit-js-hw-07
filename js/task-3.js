const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', addInputText);

function addInputText() {
  const inputTrim = input.value.trim();
  span.textContent = inputTrim === '' ? 'Anonymous' : inputTrim;
}
