const regForm = document.querySelector('.login-form');
regForm.addEventListener('submit', formRule);

function formRule(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const data = {
    email: email,
    password: password,
  };

  console.log(data);
  form.reset();
}
