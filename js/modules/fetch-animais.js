import NumerosAnime from './numeros-anime.js';

export default function fetchAnimais(url, target) {
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');

    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero="">${animal.total}</span>`;

    return div;
  }

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);

    numerosGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animeAnimaisNumeros() {
    const numerosAnime = new NumerosAnime('[data-numero]', '.numeros', 'ativo');
    numerosAnime.init();
  }

  // puxa os animais através de um arquivo json e cria cada animal utilizando 'createAnimal'
  async function criarAnimais() {
    try {
      // faz o fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // ativa as funções para preencher e animar os números
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animeAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
