export default class ScrollAnime {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;

    // bind(this) para fazer referência ao objeto da classe
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowHalf) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    if (this.sections.length) {
      window.addEventListener('scroll', this.animaScroll);
    }
    return this;
  }
}
