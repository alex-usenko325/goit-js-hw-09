const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    emailInput.value = email || '';
    messageTextarea.value = message || '';
    formData.email = email || '';
    formData.message = message || '';
  }
};

const clearForm = () => {
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageTextarea.value = '';
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  clearForm();
});

loadFromLocalStorage();
