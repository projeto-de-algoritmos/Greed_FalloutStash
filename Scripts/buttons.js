const knapsackButton = document.querySelector("#knapsack-button");
const knapsackAnswer = document.querySelector("#resposta-knapsack");
const knapsackItems = document.querySelector("#selectedItemList");

const optimizeBag = () => {
  const result = knapsack(itens.length - 1, 60, itens, 0);
  let itensTexto = "";

  console.log(result);

  result.itens_selecionados.forEach((item) => {
    itensTexto += `<li>${itens[item].nome}</li>`;
  });

  const resultTexto = `Os itens mais valiosos que consegue levar custam, ao todo, ${result.valor_total} caps.`;
  knapsackAnswer.textContent = resultTexto;
  knapsackItems.innerHTML = itensTexto;
};
