let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', throttle(saveMassage, 500));
form.addEventListener('submit', sendingForm);

function saveMassage(e) {
  if (localStorage.getItem('feedback - form - state')) {
    formData = JSON.parse(localStorage.getItem('feedback - form - state'));
  }
  (formData[e.target.name] = e.target.value),
    localStorage.setItem('feedback - form - state', JSON.stringify(formData));
}

// if (localStorage.getItem('feedback - form - state')) {
//   if (JSON.parse(localStorage.getItem('feedback - form - state')).email) {
//     form.email.value = JSON.parse(
//       localStorage.getItem('feedback - form - state')
//     ).email;
//   }
//   if (JSON.parse(localStorage.getItem('feedback - form - state')).message) {
//     form.message.value = JSON.parse(
//       localStorage.getItem('feedback - form - state')
//     ).message;
//   }
// }

if (localStorage.getItem('feedback - form - state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback - form - state')
  );

  if (email) {
    form.email.value = email;
  }
  if (message) {
    form.message.value = message;
  }
}

function sendingForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback - form - state')));
  localStorage.clear();
  form.reset();
  formData = {};
}
