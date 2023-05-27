function knapsack(index, capacidade, itens, valor_total) {
  if (index < 0 || capacidade === 0) {
    return valor_total;
  }

  if (itens[index].peso > capacidade) {
    return knapsack(index - 1, capacidade, itens, valor_total);
  }

  const inclui = knapsack(
    index - 1,
    capacidade - itens[index].peso,
    itens,
    valor_total + itens[index].valor
  );
  const exclui = knapsack(index - 1, capacidade, itens, valor_total);

  return Math.max(inclui, exclui);
}

const itens = [];

itens.push(
  { nome: "Delivery", peso: 10, valor: 774 },
  { nome: "The Last Minute", peso: 20, valor: 6500 },
  { nome: "Nuka-nuke Launcher", peso: 40, valor: 650 }
);

const capacidade = 60;

max_value = knapsack(itens.length - 1, capacidade, itens, 0);
console.log("O maior valor possível é: " + max_value);
