let throttle = require('lodash.throttle');

const getEl = el => document.querySelector(el);

const form = getEl('.feedback-form');

form.addEventListener('input', throttle(saveMassage, 500));

let formData = { email: '', massage: '' };

function saveMassage(e) {
  (formData.email = e.currentTarget.elements.email.value),
    (formData.massage = e.currentTarget.elements.massage.value),
    localStorage.setItem('feedback - form - state', JSON.stringify(formData));
  console.log(formData);
}

if (localStorage.getItem('feedback - form - state')) {
  form.email.value = JSON.parse(
    localStorage.getItem('feedback - form - state')
  ).email;
  console.log(
    JSON.parse(localStorage.getItem('feedback - form - state')).email
  );
  console.log(form.email);
}
