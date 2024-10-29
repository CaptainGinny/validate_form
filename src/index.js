import { setupModal } from './components/modal';
import { validateForm } from './components/validateForm';
import './assets/imask';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  setupModal();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (validateForm(form)) {
        await submitForm(form);
      }
    });
  }
});

async function submitForm(form) {
  const formData = new FormData(form);
  try {
    const response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    handleResponse(result, form);
  } catch (error) {
    console.error('Ошибка соединения:', error);
    alert('Ошибка соединения. Пожалуйста, попробуйте позже.');
  }
}

function handleResponse(result, form) {
  if (result.status === 'success') {
    form.reset();
    alert(result.msg);
  } else if (result.status === 'error' && result.fields) {
    for (const [inputName, errorMessage] of Object.entries(result.fields)) {
      const input = document.querySelector(`[name="${inputName}"]`);
      if (input) {
        input.classList.add('error');
        document.getElementById(`${inputName}-error`).textContent = errorMessage;
      }
    }
  }
}
