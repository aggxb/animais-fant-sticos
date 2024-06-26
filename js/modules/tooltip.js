export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind(this) para fazer referência ao objeto da classe
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mouse move e mouse leave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const tooltipTexto = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = tooltipTexto;

    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mouse move e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip box e a coloca em uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  // adiciona os eventos de mouse over a cada tooltip
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }

    return this;
  }
}
