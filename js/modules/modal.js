export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"');
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = containerModal.querySelector('[data-modal="fechar"');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function modalOutsideClick(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (btnAbrir && btnFechar && containerModal) {
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);

    containerModal.addEventListener('click', modalOutsideClick);
  }
}
