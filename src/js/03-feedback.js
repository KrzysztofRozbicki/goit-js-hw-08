import throttle from 'lodash.throttle';

const emailEl = document.querySelector('input[type=email]');
const messageEl = document.querySelector('textarea[name=message]');
const submitEl = document.querySelector('button[type=submit]');
let localData = JSON.parse(localStorage.getItem('feedback-form-state'));

const data = {
  email: '',
  message: '',
};

const updateData = () => {
  if (localData) {
    data.email = localData.email;
    data.message = localData.message;
  } else {
    data.email = '';
    data.message = '';
  }
  emailEl.value = data.email;
  messageEl.value = data.message;
};

const saveData = throttle(event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

const clearData = event => {
  event.preventDefault();
  console.log(data);
  localData = null;
  localStorage.clear();
  updateData();
};

updateData();
emailEl.addEventListener('input', saveData);
messageEl.addEventListener('input', saveData);
submitEl.addEventListener('click', clearData);
