function setError(input, errorMessage) {
  const errorElement = document.getElementById(`${input.id}-error`);
  if (errorElement) {
    errorElement.textContent = errorMessage;
    input.classList.add('error');
  }
}

function clearErrors(form) {
  form.querySelectorAll('.error-message').forEach((msg) => (msg.textContent = ''));
  form.querySelectorAll('input, textarea').forEach((input) => {
    input.classList.remove('error');
  });
}

function isFieldValid(input, errorMessage) {
  if (!input.value.trim()) {
    setError(input, errorMessage);
    return false;
  }
  return true;
}

export function validateForm(form) {
  clearErrors(form);
  let isValid = true;

  const nameInput = form.querySelector('#name');
  if (nameInput) {
    isValid &= isFieldValid(nameInput, 'Это поле обязательно для заполнения.');
  }

  const emailInput = form.querySelector('#email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Исправлено: добавлен обратный слэш перед точкой
  if (emailInput) {
    if (
      !isFieldValid(emailInput, 'Это поле обязательно для заполнения.') ||
      !emailPattern.test(emailInput.value)
    ) {
      setError(emailInput, 'Введите корректный адрес электронной почты.');
      isValid = false;
    }
  }

  const phoneInput = form.querySelector('#phone');
  if (phoneInput) {
    isValid &= isFieldValid(phoneInput, 'Это поле обязательно для заполнения.');
  }

  const messageInput = form.querySelector('#message');
  if (messageInput) {
    isValid &= isFieldValid(messageInput, 'Это поле обязательно для заполнения.');
  }

  return isValid;
}
