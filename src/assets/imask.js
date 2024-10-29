import IMask from 'imask';

const phoneInput = document.getElementById('phone');
const maskOptions = {
  mask: '+{375}(00)000-00-00',
};
IMask(phoneInput, maskOptions);
