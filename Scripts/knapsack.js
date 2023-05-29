function knapsack(index, capacidade, itens, valor_total) {
  if (index < 0 || capacidade === 0) {
    return {
      valor_total,
      itens_selecionados: [],
    };
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

  if (inclui.valor_total > exclui.valor_total) {
    inclui.itens_selecionados.push(itens[index]);
    return inclui;
  } else {
    return exclui;
  }
}
