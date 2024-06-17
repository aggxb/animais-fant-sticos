import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  const userEvents = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('ativo');
    menuBtn.classList.add('ativo');

    outsideClick(menuList, userEvents, () => {
      menuList.classList.remove('ativo');
      menuBtn.classList.remove('ativo');
    });
  }

  if (menuBtn) {
    userEvents.forEach((userEvent) => {
      menuBtn.addEventListener(userEvent, openMenu);
    });
  }
}
