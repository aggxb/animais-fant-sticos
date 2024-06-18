import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define 'touchstart' e 'click' como argumento padrão de 'userEvents' caso o usuário da função não o defina
    if (userEvents === undefined) {
      this.userEvents = ['click', 'touchstart'];
    } else {
      this.userEvents = userEvents;
    }

    this.activeClass = 'ativo';

    // bind(this) para fazer referência ao objeto da classe
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((evento) => {
        menu.addEventListener(evento, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
