import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const updateData = () => {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    formEl.email.value = localData.email;
    formEl.message.value = localData.message;
  } else formEl.reset();
};

const saveData = throttle(event => {
  const data = {
    email: '',
    message: '',
  };
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

const clearData = event => {
  event.preventDefault();
  localStorage.clear();
  updateData();
};

updateData();
formEl.addEventListener('input', saveData);
formEl.addEventListener('submit', clearData);
