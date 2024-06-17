export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind(this) para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.modalOutsideClick = this.modalOutsideClick.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  modalOutsideClick(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.modalOutsideClick);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
