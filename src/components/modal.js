export function setupModal() {
  const modal = document.getElementById('myModal');
  const openModalButton = document.getElementById('openModal');
  const closeModalButton = document.getElementById('closeModal');

  openModalButton.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  });

  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}
