export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab= "menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';

  function activeTab(index) {
    const dataAnimeDirection = tabContent[index].dataset.anime;

    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });

    tabContent[index].classList.add(activeClass, dataAnimeDirection);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    // As linhas 5, 6 e 7 (forEach) removem a classe de todos os elementos de tabContent assim que a função activeTab for ativada
    // A linha 8 indica que o index do tabContent que for passado dentro da função terá a classe adicionada

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });

    // Esse forEach adiciona o evento de click no elemento clicado, ativando, assim, a função activeTab
  }
}
initTabNav();
