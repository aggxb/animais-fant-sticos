import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menuBtn, menuList, userEvents) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'ativo';

    // define 'touchstart' e 'click' como argumento padrão de 'userEvents' caso o usuário da função não o defina
    if (userEvents === undefined) {
      this.userEvents = ['click', 'touchstart'];
    } else {
      this.userEvents = userEvents;
    }

    // bind(this) para fazer referência ao objeto da classe
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);

    outsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.userEvents.forEach((evento) => this.menuBtn.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvent();
    }

    return this;
  }
}
