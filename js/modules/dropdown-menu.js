import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const userEvents = ['click', 'touchstart'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, userEvents, () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((evento) => {
      menu.addEventListener(evento, handleClick);
    });
  });
}
