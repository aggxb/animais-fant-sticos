export default class NumerosAnime {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind(this) para fazer referência ao objeto da classe
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM com número em seu texto, incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa a função de incrementar número para cada número selecionado no DOM
  numerosAnime() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // função que ocorre quando houver uma mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numerosAnime();
    }
  }

  // adiciona o mutation observer para verificar quando a classe 'ativo' é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
    }

    return this;
  }
}
