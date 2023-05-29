//VARIÁVEIS E FUNÇÕES DO BOTÃO KNAPSACK
const knapsackButton = document.querySelector("#knapsack-button");
const knapsackAnswer = document.querySelector("#resposta-knapsack");
const knapsackItems = document.querySelector("#selectedItemList");

//utitliza o Knapsack para devolver os elementos de maior valor que preencham a mochila ao clicar no botão "knapsack"
const optimizeBag = () => {
  const activeList = document.querySelectorAll(".active");
  const itensSelecionados = [];
  let itemID = 0;

  activeList.forEach((item) => {
    itemID = item.getAttribute("id");
    itensSelecionados.push(itens[itemID]);
  });

  const itensSelecionadosOrdenados = quicksort(itensSelecionados);

  const result = knapsack(
    itensSelecionadosOrdenados.length - 1,
    300,
    itensSelecionadosOrdenados,
    0
  );
  let itensTexto = "";

  result.itens_selecionados.forEach((item) => {
    itensTexto += `<li>${item.nome}</li>`;
  });

  const resultTexto = `Dos itens selecionados, os mais valiosos que consegue levar custam, ao todo, ${result.valor_total} caps.`;
  knapsackAnswer.textContent = resultTexto;
  knapsackItems.innerHTML = itensTexto;
};

//adiciona classe "active" nos elementos da lista
const inidividualKnapsackItems = document
  .querySelector("#selectedItemList")
  .getElementsByTagName("li");
for (let i = 0; i < inidividualKnapsackItems.length; i++) {
  inidividualKnapsackItems[i].addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
}

//VARIÁVEIS E FUNÇÕES DO BOTÃO INVENTÁRIO
const inventarioButton = document.querySelector("#inventario-button");

//recarrega a página ao clicar no botão para mostrar o inventário novamente
inventarioButton.addEventListener("click", (event) => {
  location.reload();
});
