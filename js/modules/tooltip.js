export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const tooltipTexto = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = tooltipTexto;

    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseLeave.element = this; // propriedade definida agora
    onMouseLeave.tooltipBox = tooltipBox; // propriedade definida agora

    onMouseMove.element = this; // propriedade definida agora
    onMouseMove.tooltipBox = tooltipBox; // propriedade definida agora

    this.addEventListener('mouseleave', onMouseLeave);

    this.addEventListener('mousemove', onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
