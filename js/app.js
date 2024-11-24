// Declara uma função chamada `alterarStatus` que recebe um parâmetro `id`.
function alterarStatus(id) {
  // Obtém o elemento HTML com o ID `game-{id}`. Exemplo: se id = 1, busca por um elemento com ID `game-1`.
  let gameClicado = document.getElementById(`game-${id}`);

  // Seleciona a imagem dentro do elemento `gameClicado` que possui a classe `dashboard__item__img`.
  let imagem = gameClicado.querySelector(".dashboard__item__img");

  // Seleciona o botão dentro do elemento `gameClicado` que possui a classe `dashboard__item__button`.
  let botao = gameClicado.querySelector(".dashboard__item__button");

  // Seleciona o nome do jogo dentro do elemento `gameClicado` que possui a classe `dashboard__item__name`.
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  // Verifica se a imagem contém a classe `dashboard__item__img--rented`.
  if (imagem.classList.contains("dashboard__item__img--rented")) {
    // Caso contenha, remove a classe `dashboard__item__img--rented` da imagem.
    imagem.classList.remove("dashboard__item__img--rented");
    // Remove a classe `dashboard__item__button--return` do botão.
    botao.classList.remove("dashboard__item__button--return");
    // Altera o texto do botão para "Alugar".
    botao.textContent = "Alugar";
  } else {
    // Caso a imagem NÃO contenha a classe `dashboard__item__img--rented`.
    // Adiciona a classe `dashboard__item__img--rented` à imagem.
    imagem.classList.add("dashboard__item__img--rented");
    // Adiciona a classe `dashboard__item__button--return` ao botão.
    botao.classList.add("dashboard__item__button--return");
    // Altera o texto do botão para "Devolver".
    botao.textContent = "Devolver";
  }
}
