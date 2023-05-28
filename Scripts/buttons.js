const knapsackButton = document.querySelector("#knapsack-button");
const knapsackAnswer = document.querySelector("#resposta-knapsack");
const knapsackItems = document.querySelector("#selectedItemsList");

const optimizeBag = () => {
  const [resultValue, resultItems] = knapsack(itens.length - 1, 60, itens, 0);

  const resultTexto = `Os itens mais valiosos que consegue levar custam, ao todo, ${resultValue} caps.`;
  knapsackAnswer.textContent = resultTexto;
};
